import { useThree } from '@react-three/fiber';
import { useRouter } from 'next/router';
import { useEffect } from 'react';

const ObjectClickHandler = () => {
    const { scene } = useThree();
    const router = useRouter();

    useEffect(() => {
        // Find the TV object in the scene
        const tvObject = scene.getObjectByName('tv');
        if (!tvObject) {
            console.error('TV object not found in the scene');
            return;
        }

        // Add click event listener
        const handleTVClick = () => {
            console.log('TV clicked! Redirecting to dashboard...');
            router.push('/dashboard'); // Adjust the route to match your dashboard page
        };

        tvObject.userData = { onClick: handleTVClick }; // Assign custom data for clicks

        return () => {
            // Clean up if the component unmounts
            tvObject.userData.onClick = null;
        };
    }, [scene, router]);

    return null; // This component doesn't render anything
};