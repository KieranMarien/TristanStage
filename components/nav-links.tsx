'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import clsx from 'clsx';

// Map of links to display in the side navigation.
// Depending on the size of the application, this would be stored in a database.
const links = [
    { name: 'Muziek', href: '/dashboard/music' },
    { name: 'Boeken', href: '/dashboard/books' },
    { name: 'Merch', href: '/dashboard/merchandise' },
];

export default function NavLinks() {
    const pathname = usePathname();
    return (
        <div className="flex flex-row">
            {links.map((link) => {
                return (
                    <Link
                        key={link.name}
                        href={link.href}
                        className={clsx(
                            'flex flex-row h-[48px] grow items-center justify-center gap-5 rounded-md p-3 mr-16 text-sm font-medium bg-beige-background hover:bg-black hover:text-beige-background md:p-2 md:px-3',
                            {
                                'text-blue-600': pathname === link.href,
                            },
                        )}
                    >
                        <p className="hidden md:block">{link.name}</p>
                    </Link>
                );
            })}
        </div>
    );
}