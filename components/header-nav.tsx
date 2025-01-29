import NavLinks from 'components/nav-links';

export function HeaderNav() {
    return (
        <div>
            <nav className="bg-transparent border-gray-200 font-tommy">
                <div className="max-w-screen-xl justify-between flex flex-wrap items-center mx-auto p-4">
                    <div className="mr-60">
                        <a href="/dashboard" className="flex space-x-3 rtl:space-x-reverse mr-96">
                            <img src="/AppFoundryTitle.png" className="h-8" alt="AppFoundry Title"/>
                        </a>
                    </div>
                    <div className="flex flex-row">
                        <NavLinks/>
                        <div className="w-10 h-10 mr-6 overflow-hidden bg-gray-100 rounded-full">
                            <a href="/dashboard/profile">
                                <svg className="w-12 h-12 text-gray-400 hover:bg-black hover:text-white" fill="currentColor"
                                     viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M10 9a3 3 0 100-6 3 3 0 000 6zm-7 9a7 7 0 1114 0H3z"></path>
                                </svg>
                            </a>
                        </div>
                    </div>
                </div>
            </nav>
        </div>
    )
}