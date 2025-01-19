import React from 'react';

const ScrollButtons = ({ onSwitchCamera }) => {
    return (
        <div className="flex flex-row fixed z-[99] bottom-32 left-1/2 transform -translate-x-1/2">
            {/* Camera 1 Button */}
            <button
                onClick={() => onSwitchCamera("Tower1ViewCamera")}
                className="border-none outline-none bg-white cursor-pointer p-4 rounded-l-full text-lg hover:bg-blue-700 hover:text-white transition-colors"
            >
                Home
            </button>

            {/* Camera 2 Button */}
            <button
                onClick={() => onSwitchCamera("Tower2ViewCamera")}
                className="border-none outline-none bg-white cursor-pointer p-4 text-lg hover:bg-blue-700 hover:text-white transition-colors"
            >
                Music
            </button>

            {/* Camera 3 Button */}
            <button
                onClick={() => onSwitchCamera("Tower3ViewCamera")}
                className="border-none outline-none bg-white cursor-pointer p-4 text-lg hover:bg-blue-700 hover:text-white transition-colors"
            >
                Books
            </button>

            {/* Camera 4 Button */}
            <button
                onClick={() => onSwitchCamera("Tower4ViewCamera")}
                className="border-none outline-none bg-white cursor-pointer p-4 rounded-r-full text-lg hover:bg-blue-700 hover:text-white transition-colors"
            >
                Merch
            </button>
        </div>
    );
};

export default ScrollButtons;