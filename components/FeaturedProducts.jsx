import Image from "next/image"
import Link from "next/link"
import { VscArrowRight } from 'react-icons/vsc'
import { MdArrowForward } from 'react-icons/md'

import head1 from '/public/head-1.png'
import head2 from '/public/head-2.png'
import head3 from '/public/head-3.png'
import head4 from '/public/head-4.png'

const FeaturedProducts = ({img, title, text}) => {
  return (
      <div className='flex flex-col md:flex-row cursor-pointer mt-[61px] mb-[74px]  justify-between gap-[37px]'>
          <div className='relative w-full md:w-[50%]  h-[305px]'>
              <Image className='h-full object-cover flex flex-wrap content-center' src={img} alt={text} />
              <div className='absolute inset-0 z-10 bg-[#333] text-center flex flex-col items-end lg:items-center pr-10 justify-center lg:opacity-0 hover:opacity-80 bg-opacity-40 duration-300'>
                  <Link href='#' className='hidden lg:flex gap-4 items-center text-white text-5xl '> View product <VscArrowRight /></Link>
                  <Link href='#' className='flex lg:hidden flex-col items-end gap-4 font-clash text-white text-3xl '> {title}
                      <span className='w-[78px] h-[78.5px] rounded-full border flex justify-center items-center'><VscArrowRight className='w-10 h-[26.25px]' /></span></Link>
              </div>
          </div>
          <article className='flex flex-col justify-between md:w-[50%]'>
              <h3 className='hidden lg:block mb-[38px] font-stix font-bold text-[40px]'>{ title}</h3>
              <p>{ text}</p>
              <div className=' flex gap-2 md:justify-between w-[80%] md:w-full items-center mt-[38px] pb-4 border-b border-black md:p-0 md:border-none'>
                  <div className='flex items-center '>
                      <Image className=' md:w-[51px] w-[42px] h-[42px] md-h-[51px]' src={head1} alt='' />
                      <Image className='-ml-4  md:w-[51px] w-[42px] h-[42px] md-h-[51px]' src={head2} alt='' />
                      <Image className='-ml-4  md:w-[51px] w-[42px] h-[42px] md-h-[51px]' src={head3} alt='' />
                      <Image className='-ml-4  md:w-[51px] w-[42px] h-[42px] md-h-[51px]' src={head4} alt='' />
                  </div>
                  <p className='text-[1em] md:text-lg lg:text-[24px] font-medium'>64 major creators</p>
                  <span className='w-[78px] hidden h-[78px] border-[0.5px] border-[#333333] text-[#616161] rounded-full lg:flex items-center justify-center text-3xl cursor-pointer'><VscArrowRight /></span>
              </div>
          </article>
      </div>
  )
}

export default FeaturedProducts