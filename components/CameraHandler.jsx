import React from 'react';
import { useThree } from '@react-three/fiber';

const CameraHandler = ({ cameraRefs, onSwitchCamera }) => {
    const { camera } = useThree();

    const switchCamera = (cameraName) => {
        const targetCamera = cameraRefs.current[cameraName];
        if (targetCamera) {
            // Copy position and rotation from target camera
            camera.position.copy(targetCamera.position);
            camera.rotation.copy(targetCamera.rotation);
            camera.updateProjectionMatrix();
        } else {
            console.warn(`Camera "${cameraName}" not found.`);
        }
    };

    // Pass the switchCamera function to the parent via the callback
    React.useEffect(() => {
        if (onSwitchCamera) {
            onSwitchCamera(switchCamera); // Expose the switchCamera function
        }
    }, [onSwitchCamera]);

    return null; // No UI is rendered
};

export default CameraHandler;