export default function Login() {
    return (
        <main className="flex min-h-screen flex-col p-6">
            <div className="min-h-screen flex items-center justify-center">
                <div className="max-w-sm bg-black bg-opacity-25 rounded-lg shadow-md p-6">
                    <div className="flex justify-center">
                        <div className="w-24 h-24 bg-white flex items-center mb-3 mt-3 justify-center rounded-full">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="none" viewBox="0 0 24 24"
                                 stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"
                                      d="M12 12c2.209 0 4-1.791 4-4s-1.791-4-4-4-4 1.791-4 4 1.791 4 4 4zm0 2c-2.761 0-8 1.405-8 4v2h16v-2c0-2.595-5.239-4-8-4z"/>
                            </svg>
                        </div>
                    </div>
                    <div className="flex justify-center p-6 pt-2 gap-7 font-tommy">
                        <a href="./dashboard/"
                           className="min-w-32 rounded-md bg-white py-2 px-4 border border-transparent text-center text-sm transition-all shadow-md hover:shadow-lg focus:bg-slate-700 focus:shadow-none active:bg-slate-700 hover:bg-slate-700 active:shadow-none disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none"
                           type="button">
                            Login
                        </a>
                    </div>
                </div>
            </div>
        </main>
    );
}