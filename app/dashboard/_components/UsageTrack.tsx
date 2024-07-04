'use client'
import { Button } from '@/components/ui/button'
import { db } from '@/utils/db';
import { AIOutput } from '@/utils/schema';
import { useUser } from '@clerk/nextjs';
import { eq } from 'drizzle-orm';
import { HISTORY } from '../history/page';
import { TotalUsageContext } from '@/app/(context)/TotalUsageContext';
import React, { useContext, useEffect, useState } from 'react'
import { UpdateCreditUsageContext } from '@/app/(context)/UpdateCreditUsageContext';
import { useRouter } from 'next/navigation';

function UsageTrack() {
    const { user } = useUser();
    const {totalUsage, setTotalUsage} = useContext(TotalUsageContext);
    const [maxWords, setMaxWords] = useState(100000);
    const {updateCreditUsage, setUpdateCreditUsage} = useContext(UpdateCreditUsageContext);
    const router = useRouter();
    
    useEffect(() => {
        user && getData();
    }, [user])

    useEffect(() => {
        user && getData();
    }, [user&&updateCreditUsage])

    const getData = async () => {
        {/* @ts-ignore */}
        const result:HISTORY[] = await db.select().from(AIOutput).where(eq(AIOutput.createdBy, user?.primaryEmailAddress?.emailAddress));

        getTotalUsage(result);
    }

    const getTotalUsage = (result:HISTORY[]) => {
        let total:number = 0;
        result.forEach(element => {
            total = total + Number(element?.aiResponse.length);
        });

        setTotalUsage(total);
        console.log(total);
    }

    return (
        <div className='m-5'>
            <div className='bg-primary text-white p-3 rounded-lg'>
                <h2 className='font-medium'>Credits</h2>
                <div className='h-2 bg-[#7b97ea] w-full rounded-lg mt-3'>
                    <div className='h-2 bg-white rounded-full' style={{
                        width: (totalUsage / maxWords) * 100 + '%'
                    }}>
                    </div>
                </div>
                <h2 className='text-sm my-1'>{totalUsage} / 100,000 Credit Usage</h2>
            </div>
            <Button variant={'secondary'} className='w-full my-3 text-primary shadow-lg' onClick={() => router.push('/dashboard/billing')}>Upgrade</Button>
        </div>
    )
}

export default UsageTrack