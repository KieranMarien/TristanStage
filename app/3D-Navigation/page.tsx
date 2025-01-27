'use client';

import dynamic from 'next/dynamic';
import React from "react";

const MyModel = dynamic(() => import('@/components/3dRendererComponent'), { ssr: false });

export default function Home() {
    return (
        <main className="flex items-center justify-center h-screen w-full bg-light-purple">
            <a href="/dashboard" className="flex space-x-3 rtl:space-x-reverse">
                <button
                    className="flex flex-row fixed z-[98] transform -translate-x-1/2 items-center justify-center left-1/4 w-12 h-12 bg-white rounded-full shadow-md hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-400 focus:ring-offset-2">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 rotate-45" fill="none"
                         viewBox="0 0 24 24" stroke="currentColor">
                        <path d="M12 4v16m8-8H4"/>
                    </svg>
                </button>
            </a>
            <MyModel/>
        </main>
    );
}