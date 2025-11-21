import React from 'react'

export default function FormItems({ label, placeholder, type = 'text' }: { label: string, placeholder: string, type?: string }) {
    return (
        <div className='grow mb-2 text-[#2A2A2A]'>
            <label htmlFor={label} className='text-[0.8rem] font-dmsans font-semibold mb-2'>{label}</label>

            <input type={type} id={label} className='bg-[#F6F6F6] text-[0.8rem] px-4 py-2 rounded-md w-full ' placeholder={placeholder} />
        </div>
    )
}
