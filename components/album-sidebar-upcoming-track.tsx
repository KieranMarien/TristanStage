export function AlbumSidebarUpcomingTrack() {
    return (
        <div className="flex items-center">
            <a href="./track-detail" className="flex space-x-3 rtl:space-x-reverse">
                <div className="w-12 h-12 bg-gray-800 text-white flex items-center justify-center rounded-full">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none"
                         viewBox="0 0 24 24" stroke="currentColor">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                              d="M9 19V6l12-2v13M9 10l12-2M9 14l12-2M3 6h.01M3 10h.01M3 14h.01M3 18h.01"/>
                    </svg>
                </div>
                <div className="ml-4">
                    <p className="font-semibold text-gray-800">Track Name</p>
                    <p className="text-sm text-gray-500">Duration: 3:45</p>
                </div>
            </a>
        </div>
    );
}