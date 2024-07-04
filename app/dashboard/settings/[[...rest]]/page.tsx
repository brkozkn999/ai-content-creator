import { UserProfile } from '@clerk/nextjs'
import React from 'react'

function settings() {
    return (
        <div className='flex justify-center'>
            <UserProfile />
        </div>
    )
}

export default settings