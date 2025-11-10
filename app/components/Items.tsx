

export default function Items({ title, description }: { title: string, description: string }) {
    return (
        <li className='flex flex-col items-end'>
            <p className='font-bold text-[1.5rem] font-[sans] text-right sm:mx-auto lg:mx-0'>{title}</p>
            <p className='text-[#5E5E5E] text-[0.7rem] max-w-[50%] sm:max-w-full text-end sm:text-center'>{description}</p>
        </li>
    )
}
