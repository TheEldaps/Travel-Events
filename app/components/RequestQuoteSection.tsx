import React from 'react'

export default function RequestQuoteSection() {
    return (
        <section>
            <div className='text-center text-[1rem]'>
                <h2 className=''>Request a <span>Quote. </span></h2>
                <p>Please provide the following information </p>
            </div>

            <form action="" className='p-[5%]'>
                <div className='flex'>
                    <div>
                        <label htmlFor="">Full Name</label>
                        <input type="text" className='bg-[grey]' />
                    </div>
                    <div>
                        <label htmlFor="">Phone Number</label>
                        <input type="text" />
                    </div>
                </div>
                <div>
                    <label htmlFor="">Email Address</label>
                    <input type="text" />
                </div>

                <div>
                    <label htmlFor="">Type of service needed</label>
                    <input type="text" />
                </div>

                <div>
                    <label htmlFor="">Number of Guest</label>
                    <input type="text" />
                </div>
                <div>
                    <div>
                        <label htmlFor="">Date</label>
                        <input type="text" />
                    </div>

                    <div>
                        <label htmlFor="">Time</label>
                        <input type="text" />
                    </div>
                </div>
                <div>
                    <label htmlFor="">Additional Information</label>

                    <textarea name="" id=""></textarea>
                </div>
                <p>You may receive marketting and promotional materials. Contact the merchant for their privacy practices.</p>

                <button>Submit </button>
            </form>

        </section >
    )
}
