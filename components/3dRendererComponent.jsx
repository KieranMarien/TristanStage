'use client';

import React, { useRef, useState, Suspense } from 'react';
import { Canvas } from '@react-three/fiber';
import { useGLTF } from '@react-three/drei';
import { useRouter } from 'next/navigation';
import * as THREE from 'three';
import CameraButtons from './CameraButtons';
import CameraHandler from './CameraHandler';

const Model = ({ cameraRefs, onObjectClick }) => {
    const { scene } = useGLTF('/models/NavigationTower.gltf');

    React.useEffect(() => {
        // Only run once when the scene is initialized
        scene.traverse((node) => {
            if (node.isCamera) {
                cameraRefs.current[node.name] = node; // Collect cameras in the scene
            }
            const clickableObjects = {
                Carpet1: 'Carpet1 clicked! Redirecting to /dashboard',
                Plane004_1: 'TV clicked! Redirecting to /dashboard',
                Cylinder016: 'MerchCarpet clicked! Redirecting to /merchandise',
                MatLogo: 'MerchCarpet clicked! Redirecting to /merchandise',
            };

            if (node.isMesh && clickableObjects[node.name] && !node.userData.onClick) {
                node.userData.onClick = () => {
                    console.log(clickableObjects[node.name]);
                    onObjectClick(node.name);
                };
                console.log(`Clickable Object Assigned: ${node.name}`);
            }
        });
    }, [scene, cameraRefs, onObjectClick]); // Add scene as a dependency to ensure it only runs when the scene changes

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
        raycaster.setFromCamera(pointerRef.current, cameraRefs.current.activeCamera);

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
            Carpet1: '/dashboard',
            Plane004_1: '/dashboard',
            Cylinder016: '/dashboard/merchandise',
            MatLogo: '/dashboard/merchandise',
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