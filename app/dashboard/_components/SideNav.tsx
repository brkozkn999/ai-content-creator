'use client'
import { FolderClock, Home, Settings, WalletCards } from 'lucide-react'
import { usePathname } from 'next/navigation'
import Image from 'next/image'
import Link from 'next/link'
import UsageTrack from './UsageTrack'

function SideNav() {
    const menuList = [
        {
            name: 'Home',
            icon: Home,
            path: '/dashboard'
        },
        {
            name: 'History',
            icon: FolderClock,
            path: '/dashboard/history'
        },
        {
            name: 'Billing',
            icon: WalletCards,
            path: '/dashboard/billing'
        },

        {
            name: 'Settings',
            icon: Settings,
            path: '/dashboard/settings'
        },
    ]

    const path = usePathname();

    return (
        <div className='h-screen relative p-5 shadow-md border bg-white'>
            <div className='flex justify-center'>
                <Link href={'/dashboard'}>
                    <Image src={'/logo.svg'} alt='Logo Image' width={100} height={100} />
                </Link>
            </div>
            <hr className='my-6 border' />
            <div className='mt-3'>
                {menuList.map((menu, index) => (
                    <a href={menu.path} key={index}>
                        <div className={`flex gap-2 mb-2 p-3 hover:bg-primary hover:text-white rounded-lg cursor-pointer items-center ease-in-out duration-200 ${path === menu.path && 'bg-primary text-white'}`}>
                            <menu.icon className='h-6 w-6' />
                            <h2 className='text-lg'>{menu.name}</h2>
                        </div>
                    </a>
                ))}
            </div>
            <div className='absolute bottom-10 left-0 w-full'>
                <UsageTrack />
            </div>
        </div>
    )
}

export default SideNav