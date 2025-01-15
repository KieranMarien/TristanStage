export default function Example() {
    return (
        <div className="min-h-screen">
            <div className="flex items-center justify-center justify-self-center mt-8">
                <h1 className="text-5xl text-gray-700 font-butler">Explore an endless library</h1>
            </div>
            <div className="flex items-center justify-center justify-self-center mt-8">
                <label className="inline-flex items-center cursor-pointer">
                    <input type="checkbox" value="" className="sr-only peer"/>
                    <div className="relative w-11 h-6 bg-red-600 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-blue-300 dark:peer-focus:ring-blue-800 rounded-full peer dark:bg-gray-700 peer-checked:after:translate-x-full rtl:peer-checked:after:-translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:start-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all dark:border-gray-600 peer-checked:bg-blue-600"></div>
                    <span className="ms-3 text-sm font-medium text-gray-700 dark:text-gray-300">Immerse yourself</span>
                    <span className="ms-3 text-sm font-medium text-gray-400 dark:text-gray-300">I dare you</span>
                </label>
            </div>
            <div className="flex flex-row mt-28 justify-center items-center">
                <div className="grid grid-cols-3 grid-rows-5 gap-6 w-3/4 max-h-screen">
                    <div className="row-span-5 bg-light-purple rounded-3xl">
                        <a href="./dashboard/books" className="flex space-x-3 rtl:space-x-reverse">
                            <div className="h-max">
                                <p className="font-butler text-4xl ml-8 mt-5 flex items-center opacity-70">Books</p>
                                <p className="text-l ml-8 flex items-center opacity-70">blablibloebliep blablibloebliep
                                    blablibloeblie pbl</p>
                                <img className="justify-self-end" src="/DashboardSprintBooks.png" alt="HomeBooks"/>
                            </div>
                        </a>
                    </div>
                    <div className="col-span-2 row-span-2 bg-steel-blue rounded-3xl overflow-hidden">
                        <a href="./dashboard" className="flex space-x-3 rtl:space-x-reverse">
                            <div>
                                <p className="font-butler text-4xl ml-8 mt-5 flex items-center opacity-70">Reminder</p>
                                <p className="text-l ml-8 flex items-center opacity-70">blablibloebliep blablibloebliep
                                    blablibloeblie pbl</p>
                                <img className="justify-self-end" src="/AppFoundryDevices.png" alt="HomeDevices"/>
                            </div>
                        </a>
                    </div>
                    <div className="row-span-2 col-start-2 row-start-3 bg-pink rounded-3xl overflow-hidden">
                        <a href="./dashboard/music" className="flex space-x-3 rtl:space-x-reverse">
                            <div className="">
                                <img className="w-4/5 justify-self-end -m-2" src="/AppFoundryMusicPlayer.png"
                                     alt="HomeMusicPlayer"/>
                                <p className="font-butler text-4xl ml-8 mt-5 items-center opacity-70">Music</p>
                                <p className="text-l ml-8 flex items-center opacity-70">blablibloebliep blablibloebliep
                                    blablibloeblie pbl</p>
                            </div>
                        </a>
                    </div>
                    <div className="row-span-2 col-start-3 row-start-3 bg-dark-yellow rounded-3xl overflow-hidden">
                        <a href="./dashboard/merchandise" className="flex space-x-3 rtl:space-x-reverse">
                            <div>
                                <p className="font-butler text-4xl ml-8 mt-5 flex items-center opacity-70">Merchandise</p>
                                <p className="text-l ml-8 flex items-center opacity-70">blablibloebliep blablibloebliep
                                    blablibloeblie pbl</p>
                                <img className="justify-self-end -m-4 w-3/4" src="/AppFoundryShirt.png"
                                     alt="HomeShirt"/>
                            </div>
                        </a>
                    </div>
                    <div className="col-span-2 col-start-2 row-start-5 bg-dark-orange max-h-24 rounded-3xl">
                        <div className="flex flex-row justify-between h-full">
                            <p className="font-butler text-4xl ml-8 flex items-center opacity-70">Voeg toe</p>
                            <a href="./dashboard/additem-choosecat" className="flex space-x-3 rtl:space-x-reverse">
                                <button
                                    className="flex items-center justify-center my-auto w-12 h-12 mr-8 bg-white rounded-full shadow-md hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-400 focus:ring-offset-2">
                                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none"
                                         viewBox="0 0 24 24" stroke="currentColor">
                                        <path d="M12 4v16m8-8H4"/>
                                    </svg>
                                </button>
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
)
}

