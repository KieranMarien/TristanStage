import { Metadata } from "next";

import { HeaderNav } from 'components/header-nav';

export default function Layout({ children }: { children: React.ReactNode }) {
    return (
        <div className="font-tommy">
            <div>
                <HeaderNav />
            </div>
            <div className="flex-grow md:overflow-y-auto">{children}</div>
        </div>
    );
}


export const metadata: Metadata = {
    metadataBase: new URL("https://partialprerendering.com"),
    title: "Next.js Partial Prerendering",
    description: "A demo of Next.js using Partial Prerendering.",
    openGraph: {
        title: "Next.js Partial Prerendering",
        description: "A demo of Next.js using Partial Prerendering.",
    },
    twitter: {
        card: "summary_large_image",
    },
};