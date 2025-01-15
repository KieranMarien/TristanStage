export default function Page() {
    return <div>
        <div className="flex items-center justify-center justify-self-center mt-8">
            <h2 className="text-3xl font-butler mb-8">Voeg toe+</h2>
        </div>
        <div className="flex items-center justify-center justify-self-center mb-8">
            <p className="font-tommy">Soort item</p>
        </div>
        <div className="flex flex-row justify-center items-center">
            <div className="grid grid-cols-3 grid-rows-1 gap-6 w-2/3 font-tommy">
                <a href="./additem-choosecat/Category-Book">
                    <div className="bg-light-purple max-h-screen min-h-80 rounded-3xl flex items-center justify-center flex-col">
                        <img className="justify-self-end" src="/BookIcon.png" alt="AddBookIcon"/>
                        <p className="">Boek</p>
                    </div>
                </a>
                <a href="./additem-choosecat/Category-Music">
                    <div className="bg-pink max-h-screen min-h-80 rounded-3xl flex items-center justify-center flex-col">
                        <img className="justify-self-end max-w-32" src="/MusicDiscIcon.png" alt="AddMusicIcon"/>
                        <p className="">Muziek</p>
                    </div>
                </a>
                <a href="./additem-choosecat/Category-Merch">
                    <div className="bg-dark-yellow max-h-screen min-h-80 rounded-3xl flex items-center justify-center flex-col">
                        <img className="justify-self-end" src="/Merch.png" alt="AddMerchIcon"/>
                        <p className="">Merch</p>
                    </div>
                </a>
            </div>
        </div>
        <div className="bg-gray-200 flex justify-self-center rounded-full h-2.5 dark:bg-gray-700 w-1/2 mt-14">
            <div className="bg-red-600 h-2.5 rounded-full w-1/2"></div>
        </div>
    </div>
}