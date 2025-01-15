export const FilterButtons = ({ }: { }) => {
    return (
        <div className="flex items-center justify-center">
            <button
                className="bg-blue-400 hover:bg-blue-500 active:bg-blue-400 text-white font-bold py-2 px-4 rounded-l-full">
                Educatief
            </button>
            <button
                className="bg-light-brown hover:bg-gray-300 active:bg-blue-400 text-gray-800 font-bold py-2 px-4 mx-1">
                Programmeren
            </button>
            <button
                className="bg-light-brown hover:bg-gray-300 active:bg-blue-400 text-gray-800 font-bold py-2 px-4 rounded-r-full">
                Ontwerp
            </button>
        </div>
    );
};