'use client'
import React, { useContext, useState } from 'react'
import FormSection from '../_components/FormSection'
import OutputSection from '../_components/OutputSection'
import Templates from '@/app/(data)/Templates'
import { TEMPLATE } from '../../_components/TemplateListSection'
import { Button } from '@/components/ui/button'
import { ArrowLeft } from 'lucide-react'
import Link from 'next/link'
import { chatSession } from '@/utils/AiModal'
import { db } from '@/utils/db'
import { AIOutput } from '@/utils/schema'
import { useUser } from '@clerk/nextjs'
import moment from 'moment'
import { TotalUsageContext } from '@/app/(context)/TotalUsageContext'
import { useRouter } from 'next/navigation'
import { UpdateCreditUsageContext } from '@/app/(context)/UpdateCreditUsageContext'
import { toast } from '@/components/ui/use-toast'
import { ToastAction } from '@/components/ui/toast'

interface PROPS {
    params: {
        'template-slug': string
    }
}

function CreateNewContent(props: PROPS) {
    const selectedTemplate: TEMPLATE | undefined = Templates?.find((item) => item.slug === props.params['template-slug']);
    const router = useRouter();
    const { user } = useUser();
    const [loading, setLoading] = useState(false);
    const [aiOutput, setAIOutput] = useState<string>('');
    const { totalUsage, setTotalUsage } = useContext(TotalUsageContext);
    const { updateCreditUsage, setUpdateCreditUsage } = useContext(UpdateCreditUsageContext);

    const GenerateAIContent = async (FormData: any) => {
        if (totalUsage >= 100000) {
            toast({
                variant: "destructive",
                title: "Oh! Something went wrong.",
                description: "It looks like you've run out of free words. ",
                action: <ToastAction altText="Upgrade Your Plan"><Link href={'/dashboard/billing'}>Upgrade Your Plan</Link></ToastAction>,
            })
            return;
        }

        setLoading(true);
        const SelectedPrompt = selectedTemplate?.aiPrompt;

        const FinalAIPrompt = JSON.stringify(FormData) + ', ' + SelectedPrompt;

        const result = await chatSession.sendMessage(FinalAIPrompt);

        setAIOutput(result?.response.text());
        await SaveInDb(FormData, selectedTemplate?.slug, result?.response.text());
        setLoading(false);

        setUpdateCreditUsage(Date.now());
    }

    const SaveInDb = async (formData: any, slug: any, aiResp: string) => {
        const result = await db.insert(AIOutput).values({
            formData: formData,
            aiResponse: aiResp,
            templateSlug: slug,
            createdBy: user?.primaryEmailAddress?.emailAddress,
            createdAt: moment().format('DD/MM/yyyy')
        });

        console.log(result);
    }

    return (
        <div className='p-5'>
            <Link href={'/dashboard'}>
                <Button className='rounded-lg'><ArrowLeft /> Back</Button>
            </Link>
            <div className='grid grid-cols-1 md:grid-cols-3 gap-5 py-5'>
                <FormSection selectedTemplate={selectedTemplate} userFormInput={(v: any) => GenerateAIContent(v)} loading={loading} />
                <div className='col-span-2'>
                    <OutputSection aiOutput={aiOutput} />
                </div>
            </div>
        </div>
    )
}

export default CreateNewContent