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
import loader from '/public/Loader.png'
import VerticalSlider from '../components/VerticalSlider'
import FeaturedProducts from '../components/FeaturedProducts'
import NewsLetter from '../components/NewsLetter'


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
      <Image className='flex md:hidden object-contain px-[30px] pt-[30px]' src={heroMob} alt='hero' />
      <section className='pl-[30px] pr-[30px] md:pl-[65px] md:pr-[65px] lg:pl-[120px] lg:pr-[120px]'>
        <h3 className='text-[28px] pb-[30px] md:text-[48px] font-satoshi font-bold mt-[100px] md:mt-[160px] md:font-medium'>Featured products</h3>
        <hr className='bg-[#333333]' />
        <section className='[&>*:nth-child(even)]:md:flex-row-reverse'>
          <FeaturedProducts img={feat} title={'The Boolean Egyptian'} text={`Lorem ipsum dolor sit amet, consectetur adipiscing
                elit ut aliquam, purus sit amet luctus venenatis,
          lectus magna fringilla urna, porttitor rhoncus do&lor pur`} />
          <FeaturedProducts img={feat2} title={'Are We There Yet?'} text={`Lorem ipsum dolor sit amet, consectetur adipiscing
                elit ut aliquam, purus sit amet luctus venenatis,
          lectus magna fringilla urna, porttitor rhoncus do&lor pur`} />
          <FeaturedProducts img={feat3} title={'Oloibiri 1997'} text={`Lorem ipsum dolor sit amet, consectetur adipiscing
                elit ut aliquam, purus sit amet luctus venenatis,
          lectus magna fringilla urna, porttitor rhoncus do&lor pur`} />
        </section>
        <hr className='bg-[#333333]' />
      </section>
      <AuctionSlider />
      <div>
        <div className='mt-[100px] md:mt-[190px] border-b h-[.5px] bg-[#333333] '></div>
        <span className='flex items-center justify-between pt-[59px] pb-[59px] pl-[8px] pr-[30px] md:pl-[65px] md:pr-[65px] lg:pl-[120px] lg:pr-[120px]'>
          <h1 className='font-satoshi font-medium text-[#333] text-2xl md:text-5xl'>Explore marketplace</h1>
          <Link href='/marketplace'>
            <MdArrowForward className='text-[#333] md:text-[#4693ED] w-[54px] h-[53px] md:w-[81px] md:h-[71px] cursor-pointer' />
          </Link>
        </span>
        <div className=' border-b h-[.5px] bg-[#333333]'></div>
        <span className='flex items-center justify-between pt-[59px] pb-[59px] pl-[8px] pr-[30px] md:pl-[65px] md:pr-[65px] lg:pl-[120px] lg:pr-[120px]'>
          <h1 className='font-satoshi font-medium text-[#333] text-2xl md:text-5xl'>See auctions </h1>
          <Link href='/auctions'>
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
        <span className='absolute z-20 right-[4%] top-[48%] flex flex-col items-end'>
          <p className='text-[32px] lg:text-[85px] font-bold font-clash'>Circa</p>
          <p className='text-[64px] lg:text-[170px] lg:leading-[264.35px] font-bold font-clash line-through'>1985</p>
        </span>
      </section>
      <NewsLetter />
    </>
  )
}
