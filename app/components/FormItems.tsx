import React from 'react'

export default function FormItems({ label, placeholder, }: { label: string, placeholder: string }) {
    return (
        <div className='mb-3 grow text-[#2A2A2A]'>
            <label htmlFor={label} className='text-[0.8rem] font-[dmsans] font-semibold'>{label}</label>

            <input type="text" id={label} className='bg-[#F6F6F6] text-[0.8rem] px-2 py-1 rounded-md w-full ' placeholder={placeholder} />
        </div>
    )
}
