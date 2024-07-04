import { UserButton } from '@clerk/nextjs'
import { Search } from 'lucide-react'
import Link from 'next/link'
import React from 'react'

function Header() {
    return (
        <div className='p-5 shadow-md bg-white border-b-2 flex justify-between items-center'>
            <div className='flex gap-2 items-center p-2 rounded-md max-w-lg bg-transparent'>
            </div>
            <div className='flex gap-5 items-center justify-end'>
                <h2 className='bg-primary p-1 rounded-full text-xs text-white px-2'>
                    <Link href={'/dashboard/billing'}>
                        🔥Join membership just for <span className='font-bold'>$9.99</span>
                    </Link>
                </h2>
                <UserButton />
            </div>
        </div>
    )
}

export default Header