import { db } from '@/utils/db';
import { AIOutput } from '@/utils/schema';
import { currentUser } from '@clerk/nextjs/server'
import { desc, eq } from 'drizzle-orm';
import { TEMPLATE } from '../_components/TemplateListSection';
import { Button } from '@/components/ui/button';
import Image from 'next/image';
import React from 'react'
import Templates from '@/app/(data)/Templates';
import { Copy } from 'lucide-react';

export interface HISTORY {
    id: number,
    formData: string,
    aiResponse: string,
    templateSlug: string,
    createdBy: string,
    createdAt: string
}

async function History() {
    const user = await currentUser();
    {/* @ts-ignore */ }
    const HistoryList: HISTORY[] = await db.select().from(AIOutput).where(eq(AIOutput.createdBy, user?.primaryEmailAddress?.emailAddress)).orderBy(desc(AIOutput.id));

    const getTemplateName = (slug: string) => {
        const template: TEMPLATE | any = Templates?.find((item) => item.slug == slug);
        return template;
    }

    const copyToClipboard = (text: string) => {
        // navigator.clipboard API'si istemci tarafında çalıştığı için,
        // bu fonksiyon sunucuda çalışırken bir uyarı verecektir.
        // Bu uyarıyı engellemek için bir kontrol ekledik.
        if (typeof window !== 'undefined') {
            navigator.clipboard.writeText(text)
                .then(() => {
                    // Kopyalama işlemi başarılı olduğunda çalışacak kodlar
                    console.log('Metin panoya kopyalandı:', text);
                })
                .catch(err => {
                    // Kopyalama işlemi başarısız olduğunda çalışacak kodlar
                    console.error('Metin panoya kopyalanamadı:', err);
                });
        }
    };

    return (
        <div className='m-5 p-5 border rounded-lg bg-white'>
            <h2 className='font-bold text-3xl'>History</h2>
            <p className='text-gray-500'>Search your previously generated</p>
            <div className='grid grid-cols-7 font-bold bg-secondary mt-5 py-3 px-3 rounded-lg'>
                <h2 className='col-span-2'>Template</h2>
                <h2 className='col-span-2'>Ai Response</h2>
                <h2>Date</h2>
                <h2>Words</h2>
            </div>
            {HistoryList.map((item: HISTORY, index: number) => (
                <>
                    <div className='grid grid-cols-7 my-5 py-3 px-3' key={index}>
                        <h2 className='col-span-2 flex gap-2 items-center'>
                            <Image src={getTemplateName(item?.templateSlug).icon} width={30} height={30} alt={getTemplateName(item?.templateSlug).name + 'icon'} />
                            {getTemplateName(item?.templateSlug).name}
                        </h2>
                        <h2 className='col-span-2 line-clamp-3'>{item?.aiResponse}</h2>
                        <h2>{item?.createdAt}</h2>
                        <h2>{item?.aiResponse.length}</h2>
                        
                        {/*<h2>
                                onClick={() => copyToClipboard(item.aiResponse)} 
                            <Button
                                variant={'ghost'}
                                className='text-primary hover:bg-transparent hover:text-primary'>
                                <Copy className='w-6 h-6' />
                            </Button>
                        </h2>
                        */}
                    </div>
                </>
            ))}
        </div>
    )
}

export default History