import Image from 'next/image'
import Link from 'next/link'
import { TEMPLATE } from './TemplateListSection'

function TemplateCard(item: TEMPLATE) {
    return (
        <Link href={'/dashboard/content/' + item?.slug}>
            <div className='p-5 shadow-md rounded-md border bg-white flex flex-col gap-3 cursor-pointer hover:scale-105 ease-in-out transition-all'>
                <Image src={item.icon} alt={item.name + 'icon'} width={50} height={50} />
                <h2 className='font-medium text-lg'>{item.name}</h2>
                <p className='text-gray-500 line-clamp-3'>{item.desc}</p>
            </div>
        </Link>
    )
}

export default TemplateCard