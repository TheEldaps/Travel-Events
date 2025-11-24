import React from 'react'

export default function ({ heading1, heading2, wrap = true
}: { heading1: string, heading2: string, wrap?: boolean }) {
    return (
        <div>
            <h2 className="font-[dmsans] text-[2.5rem] sm:text-[3rem] font-semibold text-center mb-0">
                {heading1}   <br className={
                    `${wrap ? 'block' : 'hidden'}`} />
                <span className="font-[dmserif] text-[#8D8D8D] font-normal italic">{heading2}</span>
            </h2>
        </div>
    )
}
