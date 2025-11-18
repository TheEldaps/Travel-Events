import React from 'react'

export default function FormItems({ label, placeholder, }: { label: string, placeholder: string }) {
    return (
        <div>
            <label htmlFor={label}>{label}</label>
            <input type="text" id={label} className='bg-[grey] text-' placeholder={placeholder} />
        </div>
    )
}
