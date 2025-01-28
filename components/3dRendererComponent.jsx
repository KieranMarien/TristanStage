'use client';

import React, { useRef, useState, Suspense, useEffect } from 'react';
import { Canvas, useThree } from '@react-three/fiber';  // Import useThree
import { useGLTF } from '@react-three/drei';
import { useRouter } from 'next/navigation';
import * as THREE from 'three';
import CameraButtons from './CameraButtons';
import CameraHandler from './CameraHandler';

const Model = ({ cameraRefs, onObjectClick }) => {
    const { scene } = useGLTF('/models/NavigationTower.gltf');
    const { set } = useThree();  // Get the 'set' function from useThree to modify the camera
    const [cameraSet, setCameraSet] = useState(false); // State flag to check if camera is set

    useEffect(() => {
        if (cameraSet) return;

        scene.traverse((node) => {
            if (node.isCamera) {
                cameraRefs.current[node.name] = node;

                if (node.name === 'Tower1ViewCamera' && !cameraSet) {
                    set({ camera: node });
                    cameraRefs.current.activeCamera = node; // Set active camera
                    setCameraSet(true);
                    console.log('Set Tower1ViewCamera as starting camera');
                }
            }

            // Assign click handlers to objects
            const clickableObjects = {
                ArrowGoBack: 'Arrow clicked! Redirecting to /dashboard',
                ArrowBooks: 'Arrow clicked! Redirecting to /books',
                TextBooks: 'Title clicked! Redirecting to /books',
                ArrowMusic: 'Arrow clicked! Redirecting to /music',
                TextMusic: 'Title clicked! Redirecting to /music',
                ArrowMerch: 'Arrow clicked! Redirecting to /merchandise',
                textMerch: 'Title clicked! Redirecting to /merchandise',
            };

            if (node.isMesh && clickableObjects[node.name] && !node.userData.onClick) {
                node.userData.onClick = () => {
                    console.log(clickableObjects[node.name]);
                    onObjectClick(node.name);
                };
                console.log(`Clickable Object Assigned: ${node.name}`);
            }
        });
    }, [scene, cameraRefs, onObjectClick, set, cameraSet]); // Add the 'cameraSet' dependency to control setting only once

    return <primitive object={scene} />;
};

const MyModel = () => {
    const router = useRouter();
    const cameraRefs = useRef({});
    const raycasterRef = useRef(new THREE.Raycaster());
    const pointerRef = useRef({ x: 0, y: 0 });
    const [switchCameraFunc, setSwitchCameraFunc] = useState(null);

    const handlePointerMove = (event) => {
        pointerRef.current.x = (event.clientX / window.innerWidth) * 2 - 1;
        pointerRef.current.y = -(event.clientY / window.innerHeight) * 2 + 1;
    };

    const handleClick = () => {
        const raycaster = raycasterRef.current;

        // Ensure activeCamera and scene are set
        if (!cameraRefs.current.activeCamera || !cameraRefs.current.scene) {
            console.warn('Active camera or scene is missing!');
            return;
        }

        raycaster.setFromCamera(pointerRef.current, cameraRefs.current.activeCamera);

        // Ensure raycaster checks against the correct scene objects
        const intersects = raycaster.intersectObjects(cameraRefs.current.scene.children, true);
        if (intersects.length > 0) {
            const clickedObject = intersects[0].object;
            console.log('Intersected Object:', clickedObject.name);

            if (clickedObject.userData.onClick) {
                clickedObject.userData.onClick();
            }
        } else {
            console.log('No objects intersected');
        }
    };

    const handleObjectClick = (objectName) => {
        console.log(`handleObjectClick executed for: ${objectName}`);
        const redirectMap = {
            ArrowGoBack: '/dashboard',
            ArrowBooks: '/dashboard/books',
            TextBooks: '/dashboard/books',
            ArrowMusic: '/dashboard/music',
            TextMusic: '/dashboard/music',
            ArrowMerch: '/dashboard/merchandise',
            textMerch: '/dashboard/merchandise',
        };

        const redirectTo = redirectMap[objectName];

        if (redirectTo) {
            console.log(`Redirecting to ${redirectTo}`);
            router.push(redirectTo);
        }
    };

    return (
        <div
            className="h-screen w-full relative"
            onMouseMove={handlePointerMove}
            onClick={handleClick}
        >

            <Canvas
                camera={{ position: [0, 0, 5], fov: 75 }}
                onCreated={({ scene, camera }) => {
                    cameraRefs.current.scene = scene;
                    cameraRefs.current.activeCamera = camera;
                    console.log('Scene and Camera Initialized:', { scene, camera });
                }}
            >
                <Suspense fallback={null}>
                    <Model cameraRefs={cameraRefs} onObjectClick={handleObjectClick} />
                </Suspense>
                <CameraHandler
                    cameraRefs={cameraRefs}
                    onSwitchCamera={(func) => setSwitchCameraFunc(() => func)}
                />
            </Canvas>

            {/* Pass switchCameraFunc to the CameraButtons */}
            <CameraButtons onSwitchCamera={switchCameraFunc} />
        </div>
    );
};

export default MyModel;