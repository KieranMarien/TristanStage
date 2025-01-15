import {AlbumSidebarUpcomingTrack} from "@/components/album-sidebar-upcoming-track";

export default function Page() {
    return (
        <div className="space-y-8 lg:space-y-14 bg-beige-background">
            <div className="flex flex-row justify-end">
                <div className="rounded-lg p-4 dark:bg-black dark:shadow-white w-screen">
                    <div className="flex flex-col justify-center items-center">
                        <img className="rounded-lg aspect-square w-64 mt-16"
                             src="https://is1-ssl.mzstatic.com/image/thumb/Music116/v4/d5/37/f0/d537f0d1-5cfd-ce67-d7ac-0c4151f63f70/23UMGIM17915.rgb.jpg/1200x1200bb.jpg"/>
                        <p className="font-semibold text-md text-gray-600 mt-6">I ain't worried</p>
                        <p className="font-semibold text-xs text-gray-600 my-6">One Republic</p>
                    </div>
                    <div className="flex flex-col justify-center items-center my-4">
                        <div className="max-w-44 flex justify-between w-3/5 items-center my-2">
                            <button
                                className="aspect-square bg-black bg-opacity-10 flex justify-center items-center rounded-full p-2">
                                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24">
                                    <path
                                        d="M7 6a1 1 0 0 1 2 0v4l6.4-4.8A1 1 0 0 1 17 6v12a1 1 0 0 1-1.6.8L9 14v4a1 1 0 1 1-2 0z"/>
                                </svg>
                            </button>
                            <button
                                className="aspect-square bg-black bg-opacity-10 flex justify-center items-center rounded-full p-2">
                                <svg xmlns="http://www.w3.org/2000/svg" width="25" height="25" viewBox="0 0 512 512">
                                    <path
                                        d="M133 440a35.37 35.37 0 0 1-17.5-4.67c-12-6.8-19.46-20-19.46-34.33V111c0-14.37 7.46-27.53 19.46-34.33a35.13 35.13 0 0 1 35.77.45l247.85 148.36a36 36 0 0 1 0 61l-247.89 148.4A35.5 35.5 0 0 1 133 440"/>
                                </svg>
                            </button>
                            <button
                                className="aspect-square bg-black bg-opacity-10 flex justify-center items-center rounded-full p-2">
                                <svg className="rotate-180" xmlns="http://www.w3.org/2000/svg" width="20" height="20"
                                     viewBox="0 0 24 24">
                                    <path
                                        d="M7 6a1 1 0 0 1 2 0v4l6.4-4.8A1 1 0 0 1 17 6v12a1 1 0 0 1-1.6.8L9 14v4a1 1 0 1 1-2 0z"/>
                                </svg>
                            </button>
                        </div>
                    </div>
                </div>
                <div className="flex min-h-screen">
                    <div className="w-72 mr-16">
                        <h2 className="text-2xl font-bold mb-4">Upcoming Tracks</h2>
                        <ul className="space-y-4">
                            <li className="flex items-center">
                                <AlbumSidebarUpcomingTrack/>
                            </li>
                            <li className="flex items-center">
                                <AlbumSidebarUpcomingTrack/>
                            </li>
                            <li className="flex items-center">
                                <AlbumSidebarUpcomingTrack/>
                            </li>
                            <li className="flex items-center">
                                <AlbumSidebarUpcomingTrack/>
                            </li>
                            <li className="flex items-center">
                                <AlbumSidebarUpcomingTrack/>
                            </li>
                            <li className="flex items-center">
                                <AlbumSidebarUpcomingTrack/>
                            </li>
                            <li className="flex items-center">
                                <AlbumSidebarUpcomingTrack/>
                            </li>
                            <li className="flex items-center">
                                <AlbumSidebarUpcomingTrack/>
                            </li>
                            <li className="flex items-center">
                                <AlbumSidebarUpcomingTrack/>
                            </li>
                            <li className="flex items-center">
                                <AlbumSidebarUpcomingTrack/>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>

        </div>
    );
}