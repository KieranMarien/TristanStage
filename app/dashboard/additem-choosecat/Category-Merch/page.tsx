import { PhotoIcon, UserCircleIcon } from '@heroicons/react/24/solid'

export default function Example() {
    return (
        <main className="flex flex-col flex-grow place-content-center">
            <div className="mx-auto w-full max-w-6xl pb-10 lg:py-12 lg:px-8">
                <div className="space-y-6 sm:px-6 lg:px-0">
                    <div className="min-w-0">
                        <div
                            className="sm:overflow-hidden w-2/3 justify-self-center sm:rounded-md flex items-center justify-center bg-light-purple">
                            <div className="space-y-12">
                                <div className="border-b border-gray-900/10 pb-12">
                                    <div className="flex items-center justify-center flex-col my-12">
                                        <h2 className="text-base/7 font-semibold text-gray-900">Voeg toe+</h2>
                                        <p className="mt-1 text-sm/6 text-gray-600">
                                            Boek specificaties
                                        </p>
                                    </div>

                                    <div className="mt-10 gap-x-6 gap-y-8 min-w-32">
                                        <div className="flex flex-row sm:col-span-4 justify-self-center">
                                            <label className="block text-sm/6 font-medium text-gray-900">
                                                Titel Boek
                                            </label>
                                            <div className="ml-32">
                                                <div
                                                    className="rounded-md bg-transparent outline outline-1 -outline-offset-1 outline-gray-300 focus-within:outline focus-within:outline-2 focus-within:-outline-offset-2 focus-within:outline-indigo-600">
                                                    <input
                                                        type="text"
                                                        placeholder="Book name"
                                                        className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                                                    />
                                                </div>
                                            </div>
                                        </div>

                                        <div className="col-span-full my-6">
                                            <label htmlFor="about"
                                                   className="block text-sm/6 font-medium text-gray-900">
                                                Item Description
                                            </label>
                                            <div className="mt-2">
                                                <textarea
                                                    id="about"
                                                    name="about"
                                                    placeholder="Write a few sentences about the item."
                                                    rows={4}
                                                    className="block w-full rounded-md bg-white px-3 py-1.5 text-base text-gray-900 outline outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-600 sm:text-sm/6"
                                                    defaultValue={''}
                                                />
                                            </div>
                                        </div>

                                        <div className="col-span-full">
                                            <div className="sm:col-span-4">
                                                <div className="flex flex-row sm:col-span-4 justify-self-center my-6">
                                                    <label className="block text-sm/6 font-medium text-gray-900">
                                                        Eigenaar
                                                    </label>
                                                    <div className="ml-32">
                                                        <div
                                                            className="rounded-md bg-transparent outline outline-1 -outline-offset-1 outline-gray-300 focus-within:outline focus-within:outline-2 focus-within:-outline-offset-2 focus-within:outline-indigo-600">
                                                            <input
                                                                type="text"
                                                                placeholder="Naam eigenaar"
                                                                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                                                            />
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="flex flex-row sm:col-span-4 justify-self-center w-full">
                                                    <label className="block text-sm/6 font-medium text-gray-900">
                                                        Locatie
                                                    </label>
                                                    <div className="ml-36">
                                                        <div
                                                            className="rounded-md bg-transparent outline outline-1 -outline-offset-1 outline-gray-300 focus-within:outline focus-within:outline-2 focus-within:-outline-offset-2 focus-within:outline-indigo-600">
                                                            <input
                                                                type="text"
                                                                placeholder="Hasselt"
                                                                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                                                            />
                                                        </div>
                                                    </div>
                                                </div>
                                                <label htmlFor="cover-photo"
                                                       className="block text-sm/6 font-medium text-gray-900 mt-6">
                                                    Cover foto
                                                </label>
                                                <div
                                                    className="mt-2 flex justify-center rounded-lg border border-dashed px-6 py-10 bg-gray-50 border-gray-300 text-gray-900 text-sm focus:ring-blue-500 focus:border-blue-500 w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500">
                                                    <div className="text-center">
                                                        <PhotoIcon aria-hidden="true"
                                                                   className="mx-auto size-12 text-gray-300"/>
                                                        <div className="mt-4 flex text-sm/6 text-gray-600">
                                                            <label htmlFor="file-upload"
                                                                   className="relative cursor-pointer rounded-md bg-white font-semibold text-indigo-600 focus-within:outline-none focus-within:ring-2 focus-within:ring-indigo-600 focus-within:ring-offset-2 hover:text-indigo-500">
                                                                <span>Upload a file</span>
                                                                <input id="file-upload" name="file-upload" type="file"
                                                                       className="sr-only"/>
                                                            </label>
                                                            <p className="pl-1">or drag and drop</p>
                                                        </div>
                                                        <p className="text-xs/5 text-gray-600">PNG or JPG up to 10MB</p>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="flex mt-10 justify-center align-middle">
                            <a href="/dashboard/additem-choosecat" className="justify-self-start m-auto">
                                <p className="justify-self-start m-auto">Cancel</p>
                            </a>
                            <div
                                className="mx-12 bg-gray-200 justify-self-center rounded-full h-2.5 dark:bg-gray-700 w-1/2 m-auto">
                                <div className="bg-lime-400 h-2.5 rounded-full w-full"></div>
                            </div>
                            <a href="/dashboard" className="justify-self-start m-auto">
                                <img className="justify-self-end m-auto" src="/AddArrowRight.png" alt="AddArrowIcon"/>
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </main>
    )
}