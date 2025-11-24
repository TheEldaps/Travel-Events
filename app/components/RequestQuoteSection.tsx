import FormItems from "./FormItems"
import Heading from "./Heading"

export default function RequestQuoteSection() {
    return (
        <section id='request-quote' className=' px-[5%] sm:px-[10%]  pt-15 mb-10   '>
            <section className='mx-auto max-w-[1000px] md:bg-[url("/RequestQuoteBgImage.png")] bg-no-repeat bg-[position:center_bottom] 
 bg-contain pb-10'>
                <div className=' text-center text-[1rem] mb-10'>
                    <Heading heading1='Request a ' heading2='Quote.' wrap={false
                    } />
                    <p>Please provide the following information. </p>
                </div>

                <form action="" className='p-[5%] mx-auto shadow-2xl bg-[white]  w-full md:w-[60%] rounded-xl'>
                    <div className='sm:flex  gap-2'>
                        <FormItems label='Full Name' placeholder='Your Full Name' />

                        <FormItems label='Phone Number' placeholder='Your Phone Number' />
                    </div>

                    <FormItems label='Email Address' placeholder='Your Email Address' />

                    <FormItems label='Type of service needed' placeholder='Enter the type of service required' />

                    <FormItems label='Number of Guest' placeholder='Enter number of guests' />
                    <div className='sm:flex gap-2 '>
                        <FormItems label='Date' placeholder='Select Date' type='date' />

                        <FormItems label='Time' placeholder='Select Time' type='time' />
                    </div>
                    <div className='mb-5'>
                        <label htmlFor="" className='font-semibold font-dmsans text-[0.8rem]' >Additional Information</label>

                        <textarea name="" id="" rows={5} placeholder='Type your message ' className='px-2 py-1 w-full bg-[#F6F6F6] text-[0.8rem] focus:outline-0'></textarea>
                    </div>
                    <p className='text-[0.8rem] mb-2'>You may receive marketting and promotional materials. Contact the merchant for their privacy practices.</p>

                    <button className=' block w-full text-white py-2 rounded-lg bg-black hover:bg-[#070707af] cursor-pointer'>Submit </button>
                </form>
            </section>

        </section >
    )
}
