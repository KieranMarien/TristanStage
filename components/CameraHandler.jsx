import { useEffect, useRef } from 'react';
import { useFrame, useThree } from '@react-three/fiber';

const CameraHandler = ({ cameraRefs, onSwitchCamera }) => {
    const { camera } = useThree();
    const targetPosition = useRef(null); // Ref for target position
    const targetQuaternion = useRef(null); // Ref for target rotation
    const transitionSpeed = 0.05; // Adjust for smoother/slower transitions

    const switchCamera = (cameraName) => {
        const targetCamera = cameraRefs.current[cameraName];
        if (targetCamera) {
            // Store target position and rotation
            targetPosition.current = targetCamera.position.clone();
            targetQuaternion.current = targetCamera.quaternion.clone();
            console.log(`Switching to ${cameraName}...`);
        } else {
            console.log(`Camera "${cameraName}" not found.`);
        }
    };

    // Animate the camera position and rotation on each frame
    useFrame(() => {
        if (targetPosition.current && targetQuaternion.current) {
            // Interpolate position
            camera.position.lerp(targetPosition.current, transitionSpeed);

            // Interpolate rotation
            camera.quaternion.slerp(targetQuaternion.current, transitionSpeed);

            // Stop interpolation when close enough
            if (
                camera.position.distanceTo(targetPosition.current) < 0.01 &&
                camera.quaternion.angleTo(targetQuaternion.current) < 0.01
            ) {
                targetPosition.current = null;
                targetQuaternion.current = null;
                console.log('Camera transition complete');
            }

            camera.updateProjectionMatrix();
        }
    });

    // Expose the switchCamera function to the parent
    useEffect(() => {
        if (onSwitchCamera) {
            onSwitchCamera(switchCamera);
        }
    }, [onSwitchCamera]);

    return null; // No UI is rendered
};

export default CameraHandler;