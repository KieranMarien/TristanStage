'use client';

import React, { useRef, useState, Suspense } from 'react';
import { Canvas } from '@react-three/fiber';
import { useGLTF } from '@react-three/drei';
import CameraButtons from './CameraButtons';
import CameraHandler from './CameraHandler';

const Model = ({ cameraRefs }) => {
    const { scene } = useGLTF('/models/NavigationTower.gltf');

    React.useEffect(() => {
        scene.traverse((node) => {
            if (node.isCamera) {
                cameraRefs.current[node.name] = node; // Collect cameras in the scene
            }
        });
    }, [scene, cameraRefs]);

    return <primitive object={scene} />;
};

const MyModel = () => {
    const cameraRefs = useRef({});
    const [switchCameraFunc, setSwitchCameraFunc] = useState(null);

    return (
        <div className="h-screen w-full relative">
            <Canvas camera={{ position: [0, 0, 5], fov: 75 }}>
                <Suspense fallback={null}>
                    <Model cameraRefs={cameraRefs} />
                </Suspense>
                <CameraHandler
                    cameraRefs={cameraRefs}
                    onSwitchCamera={(func) => setSwitchCameraFunc(() => func)} // Store switchCamera
                />
            </Canvas>

            {/* Pass switchCameraFunc to the CameraButtons */}
            <CameraButtons onSwitchCamera={switchCameraFunc} />
        </div>
    );
};

export default MyModel;