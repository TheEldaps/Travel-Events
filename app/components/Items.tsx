

export default function Items({ title, description }: { title: string, description: string }) {
    return (
        <li className='flex flex-col items-end'>
            <p className='font-bold text-[1.5rem] md:text-[2rem] text-right sm:mx-auto lg:mx-0'>{title}</p>
            <p className='text-[#5E5E5E] text-[0.7rem] md:text-[0.9rem] max-w-[50%] sm:max-w-full text-end font-nunito sm:text-center'>{description}</p>
        </li>
    )
}
