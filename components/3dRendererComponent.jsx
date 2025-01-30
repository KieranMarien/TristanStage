'use client';

import React, { useRef, useState, Suspense, useEffect } from 'react';
import { Canvas, } from '@react-three/fiber';
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader';
import { useRouter } from 'next/navigation';
import * as THREE from 'three';
import CameraNavigation from './CameraNavigation';
import CameraHandler from './CameraHandler';

const Model = ({ cameraRefs, onObjectClick }) => {
    const [gltf, setGltf] = useState(null);

    useEffect(() => {
        const loadModel = async () => {
            try {
                // Fetch the .gltf file
                const response = await fetch('/models/NavigationTower.gltf');
                if (!response.ok) throw new Error(`Failed to fetch .gltf: ${response.statusText}`);
                let gltfJson = await response.json();

                // Update the .bin reference to external S3 link
                gltfJson.buffers.forEach((buffer) => {
                    if (buffer.uri.endsWith('.bin')) {
                        console.log(`Redirecting buffer ${buffer.uri} to external URL`);
                        buffer.uri = "https://tristan-stage.s3.eu-west-1.amazonaws.com/NavigationTower/NavigationTower.bin";
                    }
                });

                // Convert the modified JSON back to a Blob
                const blob = new Blob([JSON.stringify(gltfJson)], { type: 'application/json' });
                const url = URL.createObjectURL(blob);

                // Load the model using GLTFLoader
                const loader = new GLTFLoader();
                loader.setCrossOrigin('anonymous');
                loader.setResourcePath('/models/'); // Ensure textures are loaded correctly

                loader.load(
                    url,
                    (gltf) => {
                        setGltf(gltf);
                        console.log('GLTF Loaded Successfully');
                    },
                    undefined,
                    (error) => console.error('Error loading GLTF:', error)
                );
            } catch (error) {
                console.error('Error loading .gltf:', error);
            }
        };

        loadModel();
    }, []);

    if (!gltf) return null; // Show nothing while loading

    const { scene } = gltf;
    const [cameraSet, setCameraSet] = useState(false);

    useEffect(() => {
        if (cameraSet) return;

        scene.traverse((node) => {
            if (node.isCamera) {
                cameraRefs.current[node.name] = node;
                if (node.name === 'Tower0ViewCamera' && !cameraSet) {
                    cameraRefs.current.activeCamera = node;
                    setCameraSet(true);
                    console.log('Set Tower0ViewCamera as starting camera');
                }
            }

            const clickableObjects = {
                ArrowGoBack: '/dashboard',
                ArrowBooks: '/dashboard/books',
                TextBooks: '/dashboard/books',
                ArrowMusic: '/dashboard/music',
                TextMusic: '/dashboard/music',
                ArrowMerch: '/dashboard/merchandise',
                textMerch: '/dashboard/merchandise',
            };

            if (node.isMesh && clickableObjects[node.name] && !node.userData.onClick) {
                node.userData.onClick = () => {
                    console.log(`Redirecting to ${clickableObjects[node.name]}`);
                    onObjectClick(node.name);
                };
                console.log(`Clickable Object Assigned: ${node.name}`);
            }
        });
    }, [scene, cameraRefs, onObjectClick, cameraSet]);

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
        if (!cameraRefs.current.activeCamera || !cameraRefs.current.scene) {
            console.warn('Active camera or scene is missing!');
            return;
        }

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
        const redirectMap = {
            ArrowGoBack: '/dashboard',
            ArrowBooks: '/dashboard/books',
            TextBooks: '/dashboard/books',
            ArrowMusic: '/dashboard/music',
            TextMusic: '/dashboard/music',
            ArrowMerch: '/dashboard/merchandise',
            textMerch: '/dashboard/merchandise',
        };

        if (redirectMap[objectName]) {
            router.push(redirectMap[objectName]);
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
            <CameraNavigation onSwitchCamera={switchCameraFunc} />
        </div>
    );
};

export default MyModel;
