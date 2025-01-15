export const MusicCard = ({ }: { }) => {
    return (
        <div className="group flex items-center justify-center">
            <a href="./music/album-detail" className="flex space-x-3 rtl:space-x-reverse">
                <div
                    className="w-60 bg-transparant rounded-lg shadow-transparent shadow p-3 flex flex-col items-center justify-self-center">
                    <img
                        src="https://is1-ssl.mzstatic.com/image/thumb/Music116/v4/d5/37/f0/d537f0d1-5cfd-ce67-d7ac-0c4151f63f70/23UMGIM17915.rgb.jpg/1200x1200bb.jpg"
                        alt="Album Cover"
                        className="w-40 h-40 object-cover rounded-md"/>
                    <h2 className="mt-4 font-semibold text-lg text-gray-800">Album Name</h2>
                    <p className="text-sm text-gray-500">Publisher Name</p>
                </div>
            </a>
        </div>
    );
};