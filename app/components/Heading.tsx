import React from 'react'

export default function ({ heading1, heading2, wrap }: { heading1: string, heading2: string, wrap: string }) {
    return (
        <div>
            <h2 className="text-[3rem] font-[dmsans] font-bold text-center mb-10">
                {heading1} <br />
                <span className="text-[#8D8D8D] font-[dmserif]">{heading2}</span>
            </h2>
        </div>
    )
}
