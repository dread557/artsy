import Link from "next/link"
import Image from "next/image"
import { drops } from "../data/drop"
import Footer from "../components/Footer"
import NewsLetter from "../components/NewsLetter"

const drop = () => {
    return (
        <>
            <main className="pl-[30px] mt-8 md:mt-20 pr-[30px] md:pl-[65px] md:pr-[65px] lg:pl-[120px] lg:pr-[120px] max-w-[1440px] m-auto">
                <span className='hidden lg:flex items-center text-[#BCB7B7] font-medium text-2xl mb-8'>
                    <Link href='/'>Home/</Link>
                    <Link className='text-[#292929]' href='/drop'> drop </Link>
                </span>
                <div className="flex flex-col justify-center items-center text-center">
                    <h3 className="text-3xl md:text-5xl font-bold md:font-medium">Upcoming drops</h3>
                    <p className="text-lg md:text-[2rem] mt-7  mb-10">Turn on notifications so that no drops will miss you.</p>
                    <button className=" h-[52.4px] rounded-md md:h-[86px] w-[262px] md:w-[420px] border border-black text-[22.46px] md:text-4xl">Notify me</button>
                </div>
                <div className="mt-[80px]">
                    {drops.map((each, index) => (
                        <div key={index} className="flex flex-col md:flex-row justify-between gap-8 mb-20">
                            <div style={{ backgroundImage: `url(${each.image.src})` }} className="relative max-w-[683px] rounded-[10px] bg-no-repeat w-full h-[224px] md:h-96">
                                <span style={{ background: each.status === 'upcoming' ? '#4693ED' : each.status === 'live now' ? '#3EA03B' : '#999EA5' }} className=" text-white md:hidden w-[103px] text-center p-1 h-[23px] uppercase text-xs absolute top-3 right-[25px] rounded-[10px]">{each.status}</span>
                                <div className="flex flex-col md:flex-row items-start absolute bottom-4 rounded-lg p-4 translate-x-[25px] md:translate-x-[65px] justify-between gap-2 md:items-end bg-[#F5F4F43D] w-[80%] ">

                                    <span className="flex flex-col">
                                        <p className="text-white md:text-xl xl:text-[1.75rem]">Time remaining</p>
                                        <p className='text-white font-stix md:text-[1.75rem] xl:text-[2.5rem] '>  {each.timeRemaining} </p>
                                    </span>
                                    <button className="hidden md:block text-2xl w-[107px] bg-[#4693ED] rounded-[15px] text-white">Join</button>
                                </div>

                            </div>
                            <div className="flex flex-col gap-4 justify-between">
                                <span style={{ background: each.status === 'upcoming' ? '#4693ED' : each.status === 'live now' ? '#3EA03B' : '#999EA5' }} className="hidden md:block text-white w-[189px] text-center p-2 h-[43px] uppercase text-lg rounded-[10px]">{each.status}</span>
                                <p className="text-xl">{each.date}</p>
                                <p className="text-4xl font-medium capitalize">{each.title}</p>
                                <p className="text-xl max-w-[433px]">Lorem ipsum dolor sit amet consectetur. Amet odio
                                    a aenean quis vitae tempus. Sed nunc tempus
                                    aliquet lectus ut vulputate.</p>
                                <span className=" flex gap-2 font-medium font-satoshi">Creator : <p className="text-[#006CA2] capitalize">{each.creator}</p></span>
                                <div className="block md:hidden">
                                    {each.status === 'upcoming' ? <Link href='#' className="text-[#006CA2] underline font-satoshi">Get notified</Link> : each.status === 'live now' ? <Link href='#' className="text-[#006CA2] underline font-satoshi">Join now</Link> : <Link href='#' className="text-[#006CA2] underline font-satoshi">View</Link>}
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </main>
            <div className="hidden md:block">
                <NewsLetter />
            </div>
            <Footer />
        </>

    )
}

export default drop