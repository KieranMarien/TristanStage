import React from 'react';

const CameraButtons = ({ onSwitchCamera }) => {
    const handleButtonClick = (cameraName) => {
        if (onSwitchCamera) {
            onSwitchCamera(cameraName); // Call the function with the camera name
        } else {
            console.error('onSwitchCamera is not defined!');
        }
    };

    return (
        <div className="flex flex-row fixed z-[99] bottom-32 left-1/2 transform -translate-x-1/2">
            <button
                onClick={() => handleButtonClick('Tower1ViewCamera')}
                className="border-none outline-none bg-white cursor-pointer p-4 rounded-l-full text-lg hover:bg-blue-700 hover:text-white transition-colors"
            >
                Home
            </button>
            <button
                onClick={() => handleButtonClick('Tower2ViewCamera')}
                className="border-none outline-none bg-white cursor-pointer p-4 text-lg hover:bg-blue-700 hover:text-white transition-colors"
            >
                Music
            </button>
            <button
                onClick={() => handleButtonClick('Tower3ViewCamera')}
                className="border-none outline-none bg-white cursor-pointer p-4 text-lg hover:bg-blue-700 hover:text-white transition-colors"
            >
                Books
            </button>
            <button
                onClick={() => handleButtonClick('Tower4ViewCamera')}
                className="border-none outline-none bg-white cursor-pointer p-4 rounded-r-full text-lg hover:bg-blue-700 hover:text-white transition-colors"
            >
                Merch
            </button>
        </div>
    );
};

export default CameraButtons;