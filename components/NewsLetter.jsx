import React from 'react'

const NewsLetter = () => {
  return (
      <section className='mt-[66px] md:mt-[147px] flex flex-col lg:items-center lg:border border-[#333333] pl-[30px] pb-[29.15px] md:pb-[62px] pr-[30px] md:ml-[65px] md:mr-[65px]'>
          <h2 className='font-basker text-2xl md:text-[30.21px] pt-6 leading-[39.06px]'>NewsLetter</h2>
          <p className='text-[11.64px] md:text-[32px]'>Subscribe to get daily updates on new drops & exciting deals </p>
          <form className='flex flex-col md:flex-row gap-[23px] mt-[25px] mb-[25px] md:mt-9 md:mb-9'>
              <input
                  className='font-basker border border-[#333] h-[46px] md:h-[60px] pl-4 md:pl-[50px] w-[300px] sm:w-[340px] md:w-[446px]'
                  type='email'
                  placeholder='Enter your Email'

              />
              <button className='font-basker uppercase border bg-[#333] text-white h-[53.64px] md:h-[60px] text-center w-[181.63px]'>Subscribe</button>
          </form>
      </section>
  )
}

export default NewsLetter