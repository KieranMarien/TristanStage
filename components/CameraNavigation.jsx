import React, { useState } from 'react';

const CameraNavigation = ({ onSwitchCamera }) => {
    const cameras = [
        { id: 1, name: 'Tower1ViewCamera' },
        { id: 2, name: 'Tower2ViewCamera' },
        { id: 3, name: 'Tower3ViewCamera' },
        { id: 4, name: 'Tower4ViewCamera' },
    ];

    const [currentCameraIndex, setCurrentCameraIndex] = useState(0);

    const switchCamera = (direction) => {
        let newIndex;
        if (direction === 'next') {
            newIndex = (currentCameraIndex + 1) % cameras.length; // Loops from 4 -> 1
        } else {
            newIndex = (currentCameraIndex - 1 + cameras.length) % cameras.length; // Loops from 1 -> 4
        }

        setCurrentCameraIndex(newIndex);
        onSwitchCamera && onSwitchCamera(cameras[newIndex].name);
    };

    return (
        <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 flex items-center">
            <button className="border-none outline-none bg-beige-background cursor-pointer p-4 rounded-l-full text-lg hover:bg-black hover:text-beige-background transition-colors" onClick={() => switchCamera('prev')}>{"<"}</button>
            <span className="border-none outline-none bg-beige-background cursor-pointer p-4 text-lg transition-colors">{cameras[currentCameraIndex].name}</span>
            <button className="border-none outline-none bg-beige-background cursor-pointer p-4 rounded-r-full text-lg hover:bg-black hover:text-beige-background transition-colors" onClick={() => switchCamera('next')}>{">"}</button>
        </div>
    );
};

export default CameraNavigation;