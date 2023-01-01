import Head from 'next/head'
import Link from 'next/link'
import Image from 'next/image'
import HeroSlider from '../components/HeroSlider'
import AuctionSlider from '../components/AuctionSlider'
import { VscArrowRight } from 'react-icons/vsc'
import { MdArrowForward } from 'react-icons/md'

import heroMob from '/public/hero-mob.png'
import feat from '/public/feat.png'
import feat2 from '/public/feat2.png'
import feat3 from '/public/feat3.png'
import head1 from '/public/head-1.png'
import head2 from '/public/head-2.png'
import head3 from '/public/head-3.png'
import head4 from '/public/head-4.png'
import loader from '/public/loader.png'
import VerticalSlider from '../components/VerticalSlider'


export default function Home() {
  return (
    <>
      <Head>
        <title>Artsy</title>
        <meta name="description" content="A commercial photography website" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div className='text-center text-[#292929] pl-[30px] pr-[30px] md:pl-[65px] md:pr-[65px] lg:pl-[120px] lg:pr-[120px]'>
        <h1 className='text-[32px] md:text-[50px] lg:text-[80px] font-medium md:font-bold font-clash'>Photography is poetry & beautiful untold stories</h1>
        <p className='text-[1rem] md:text-[28px] text-[#292929] mt-[50px] font-satoshi'>Flip through more than 10,000 vintage shots,
          old photograghs, historic images and captures
          seamlessly in one place. Register to get top access.</p>
      </div>
      <HeroSlider />
      <Image className='flex md:hidden object-contain' src={heroMob} alt='hero' />
      <section className='pl-[30px] pr-[30px] md:pl-[65px] md:pr-[65px] lg:pl-[120px] lg:pr-[120px]'>
        <h3 className='text-[28px] pb-[30px] md:text-[48px] font-satoshi font-bold mt-[100px] md:mt-[160px] md:font-medium'>Featured products</h3>
        <hr className='bg-[#333333]' />
        <div className='flex flex-col md:flex-row cursor-pointer mt-[61px] mb-[74px]  justify-between gap-[37px]'>
          <div className='relative w-full h-[305px]'>
            <Image className='h-full object-cover flex flex-wrap content-center' src={feat} alt='woman' />
            <div className='absolute inset-0 z-10 bg-[#333] text-center flex flex-col items-center justify-center lg:opacity-0 hover:opacity-60 bg-opacity-40 duration-300'>
              <Link href='#' className='flex gap-4 items-center text-white text-3xl '> View product <VscArrowRight /></Link>
            </div>
          </div>
          <article className='flex flex-col justify-between'>
            <h3 className='mb-[38px] font-stix font-bold text-[40px]'>The Boolean Egyptian</h3>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing
              elit ut aliquam, purus sit amet luctus venenatis,
              lectus magna fringilla urna, porttitor rhoncus do&lor pur</p>
            <div className=' flex gap-2 md:justify-between items-center mt-[38px]'>
              <div className='flex items-center'>
                <Image src={head1} alt='' />
                <Image className='-ml-4' src={head2} alt='' />
                <Image className='-ml-4' src={head3} alt='' />
                <Image className='-ml-4' src={head4} alt='' />
              </div>
              <p className='text-[1rem] md:text-[24px] font-medium'>64 major creators</p>
              <span className='w-[78px] hidden h-[78px] border-[0.5px] border-[#333333] text-[#616161] rounded-full lg:flex items-center justify-center text-3xl cursor-pointer'><VscArrowRight /></span>
            </div>
          </article>
        </div>
        <hr className='bg-[#333333]' />
        <div className='flex flex-col md:flex-row mt-[61px] mb-[74px] justify-between gap-[37px]'>
          <article className='flex flex-col justify-between'>
            <h3 className='mb-[38px] font-stix font-bold text-[40px]'>Are We There Yet?</h3>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing
              elit ut aliquam, purus sit amet luctus venenatis,
              lectus magna fringilla urna, porttitor rhoncus do&lor pur</p>
            <div className=' flex gap-2 md:justify-between items-center mt-[38px]'>
              <div className='flex items-center'>
                <Image src={head1} alt='' />
                <Image className='-ml-4' src={head2} alt='' />
                <Image className='-ml-4' src={head3} alt='' />
                <Image className='-ml-4' src={head4} alt='' />
              </div>
              <p className='text-[1rem] md:text-[24px] font-medium'>64 major creators</p>
              <span className='w-[78px] hidden h-[78px] border-[0.5px] border-[#333333] text-[#616161] rounded-full lg:flex items-center justify-center text-3xl cursor-pointer'><VscArrowRight /></span>
            </div>
          </article>
          <div className='relative w-full h-[305px]'>
            <Image className='h-full object-cover flex flex-wrap content-center' src={feat2} alt='woman' />
            <div className='absolute inset-0 z-10 bg-[#333] text-center flex flex-col items-center justify-center lg:opacity-0 hover:opacity-60 bg-opacity-40 duration-300'>
              <Link href='#' className='flex gap-4 items-center text-white text-3xl '> View product <VscArrowRight /></Link>
            </div>
          </div>
        </div>
        <hr className='bg-[#333333]' />
        <div className='flex flex-col md:flex-row mt-[61px] mb-[74px] justify-between gap-[37px]'>
          <div className='relative w-full h-[305px]'>
            <Image className='h-full object-cover flex flex-wrap content-center' src={feat3} alt='woman' />
            <div className='absolute inset-0 z-10 bg-[#333] text-center flex flex-col items-center justify-center lg:opacity-0 hover:opacity-60 bg-opacity-40 duration-300'>
              <Link href='#' className='flex gap-4 items-center text-white text-3xl '> View product <VscArrowRight /></Link>
            </div>
          </div>
          <article className='flex flex-col justify-between'>
            <h3 className='mb-[38px] font-stix font-bold text-[40px]'>Oloibiri 1997</h3>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing
              elit ut aliquam, purus sit amet luctus venenatis,
              lectus magna fringilla urna, porttitor rhoncus do&lor pur</p>
            <div className=' flex gap-2 md:justify-between items-center mt-[38px]'>
              <div className='flex items-center'>
                <Image src={head1} alt='' />
                <Image className='-ml-4' src={head2} alt='' />
                <Image className='-ml-4' src={head3} alt='' />
                <Image className='-ml-4' src={head4} alt='' />
              </div>
              <p className='text-[1rem] md:text-[24px] font-medium'>64 major creators</p>
              <span className='w-[78px] hidden h-[78px] border-[0.5px] border-[#333333] text-[#616161] rounded-full lg:flex items-center justify-center text-3xl cursor-pointer'><VscArrowRight /></span>
            </div>
          </article>
        </div>
      </section>
      <AuctionSlider />
      <div>
        <div className='mt-[190px] border-b h-[.5px] bg-[#333333] '></div>
        <span className='flex items-center justify-between pt-[59px] pb-[59px] pl-[8px] pr-[30px] md:pl-[65px] md:pr-[65px] lg:pl-[120px] lg:pr-[120px]'>
          <h1 className='font-satoshi font-medium text-[#333] text-2xl md:text-5xl'>Explore marketplace</h1>
          <Link href='#'>
            <MdArrowForward className='text-[#333] md:text-[#4693ED] w-[54px] h-[53px] md:w-[81px] md:h-[71px] cursor-pointer' />
          </Link>
        </span>
        <div className=' border-b h-[.5px] bg-[#333333]'></div>
        <span className='flex items-center justify-between pt-[59px] pb-[59px] pl-[8px] pr-[30px] md:pl-[65px] md:pr-[65px] lg:pl-[120px] lg:pr-[120px]'>
          <h1 className='font-satoshi font-medium text-[#333] text-2xl md:text-5xl'>See auctions </h1>
          <Link href='#'>
            <MdArrowForward className='text-[#333] md:text-[#4693ED] w-[54px] h-[53px] md:w-[81px] md:h-[71px] cursor-pointer' />
          </Link>
        </span>
        <div className=' border-b h-[.5px] bg-[#333333]'></div>
      </div>
      <section className=' bg-[#e2e2e2] relative mt-14 lg:mt-40 pt-6 lg:pt-[67px] pl-1 pr-1 md:pl-[35px] md:pr-[35px] lg:pl-[120px] lg:pr-[120px]'>
        <div className='flex justify-between'>
          <h2 className='font-clash font-semibold text-2xl leading-[37.32px] lg:text-[55px] lg:leading-[85.52px] max-w-[264px] md:max-w-[535px]'>TOP CREATORS OF THE WEEK</h2>
          <div className='flex gap-3 relative'>
            <Image className='hidden lg:flex' src={loader} alt='' />
            <ul className='flex lg:flex-col flex-row gap-5 absolute lg:relative list-disc lg:list-none right-0 top-[-30px] lg:top-0'>
              <li className='text-[10px] md:text-[16px] lg:text-[40px] font-clash leading-[62.2px]'>Editorials</li>
              <li className='text-[10px] md:text-[16px] lg:text-[40px] font-clash leading-[62.2px]'>Fashion</li>
              <li className='text-[10px] md:text-[16px] lg:text-[40px] font-clash leading-[62.2px]'>Lifestyle</li>
              <li className='text-[10px] md:text-[16px] lg:text-[40px] font-clash leading-[62.2px]'>Blueprint</li>
            </ul>
          </div>
        </div>
        <div className='pb-14 md:pb-[200px] mt-8'>
          <p className='font-clash text-center lg:text-left font-extralight md:font-normal text-[13px] md:text-xl lg:text-[32px] text-[#00000091]'>“Everything always looked better in black and white.
            Everything always  as if it were the first time; there’s
            always more people in a black and white photograph.
            It just makes it seem that there were more people at
            a gig, more people at a football match, than with colour
            photography. Everything looks more exciting.”– Jack Lowden
          </p>
        </div>
        <VerticalSlider />
      </section>
      <section className='mt-[66px] md:mt-[147px] flex flex-col lg:items-center lg:border border-[#333333] pl-[30px] pb-[62px] pr-[30px] md:ml-[65px] md:mr-[65px]'>
        <h2 className='font-basker text-2xl md:text-[30.21px] pt-6 leading-[39.06px]'>NewsLetter</h2>
        <p className='text-[11.64px] md:text-[32px]'>Subscribe to get daily updates on new drops & exciting deals </p>
        <form className='flex flex-col md:flex-row gap-[23px] mt-[25px] mb-[25px] md:mt-9 md:mb-9'>
          <input
            className='font-basker border border-[#333] h-[60px] text-center w-[300px] sm:w-[340px] md:w-[446px]'
            type='email'
            placeholder='Enter your Email'

          />
          <button className='font-basker uppercase border bg-[#333] text-white h-[60px] text-center w-[181.63px]'>Subscribe</button>
        </form>
      </section>
    </>
  )
}
