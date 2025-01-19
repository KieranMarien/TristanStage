'use client'; // Add this for client-side rendering in Next.js

import React from 'react';
import { useRef, useState, useEffect, Suspense } from 'react';
import { Canvas, useThree } from '@react-three/fiber';
import { OrbitControls, useGLTF } from '@react-three/drei';
import CameraButtons from './CameraButtons';
console.log('Importing dependencies...');

const scenePath = '/public/models/NavigationTower.gltf'

const Model = () => {
    const { scene } = useGLTF('/models/NavigationTower.gltf', (loader) => {
        console.log('Model has loaded');
    }, (error) => {
        console.error('Error loading model:', error);
    });

    const { cameras } = useGLTF('/models/TestScene.gltf');
    const { set, camera } = useThree();

    useEffect(() => {
        if (cameras && cameras.length > 0) {
            // Set the first camera in the GLTF file as the default camera
            const gltfCamera = cameras[0];
            camera.position.copy(gltfCamera.position);
            camera.rotation.copy(gltfCamera.rotation);
            set({ camera: gltfCamera });
        }
    }, [cameras, camera, set]);

    return <primitive object={scene} scale={0.5} />;
};


const MyModel = () => {
    const { scene } = useGLTF('/models/NavigationTower.gltf');
    const cameraRefs = useRef({});

    const handleSwitchCamera = (cameraName) => {
        const targetCamera = cameraRefs.current[cameraName];
        if (targetCamera) {
            targetCamera.updateProjectionMatrix();
            targetCamera.aspect = window.innerWidth / window.innerHeight;
            targetCamera.matrixWorldNeedsUpdate = true;

            // Make the target camera active
            scene.userData.activeCamera = targetCamera;
        } else {
            console.log(`Camera "${cameraName}" not found in the scene.`);
        }
    };

    return (
        <div className="h-screen w-full bg-gray-900">
            <Canvas camera={{position: [0, 0, 5], fov: 75}} onPointerDown={(event) => {
                const object = event.intersections[0]?.object; // Get the clicked object
                if (object?.userData?.onClick) {
                    object.userData.onClick(); // Call the onClick handler
                }
            }}>
                {/* Suspense ensures the scene waits until model is ready */}
                <Suspense>
                    {/* Render the model */}
                    <Model/>
                </Suspense>
                {/* Enable controls for interaction */}
                <OrbitControls/>
            </Canvas>
            <CameraButtons onSwitchCamera={handleSwitchCamera} />
        </div>
    );
};

export default MyModel;