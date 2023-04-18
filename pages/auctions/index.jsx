import React, { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { BsHeartFill, BsHeart } from "react-icons/bs";
import { bids } from "../../data/bids";
import AuctionSlider from "../../components/AuctionSlider";

const Auctions = () => {
  const [liked, setLiked] = useState(false);
  return (
    <main className="pl-[30px] mt-8 md:mt-20 pr-[30px] md:pl-[65px] md:pr-[65px] lg:pl-[120px] lg:pr-[120px] max-w-[1440px] m-auto">
      {/* <span className='flex items-center text-[#BCB7B7] font-medium text-2xl mb-8'>
                <Link href='/'>Home/</Link>
                <Link className='text-[#292929]' href='/auctions'> Auctions </Link>
            </span> */}
      <p className="text-xl lg:text-[28px] font-medium mb-6 lg:mb-24">
        Here’s an overview of products actively on auction, explore!
      </p>
      <AuctionSlider />
      <h3 className="text-xl md:text-4xl font-bold mt-[45px] font-satoshi">
        Top bids from popular creators
      </h3>
      <section className="flex flex-col md:flex-row gap-10 lg:gap-[100px] justify-between mt-7 md:mt-16 mb-40">
        {bids.map((each, index) => (
          <div className="max-w-[330px] lg:max-w-[545px] w-full" key={index}>
            <div className="bg-white shadow-[0px_0px_9px_-1px_rgba(0,0,0,0.25)] relative rounded-[15px] mb-12">
              <button
                className="p-2 border rounded-full absolute right-[30px] top-3"
                onClick={() => setLiked(!liked)}
              >
                {liked ? (
                  <BsHeartFill className="text-red-700 h-[27px] w-[33px]" />
                ) : (
                  <BsHeart className="h-[27px] w-[33px]" />
                )}
              </button>
              <Image
                className="w-full max-h-[280px] object-cover h-full pt-[93px]"
                width={300}
                height={200}
                src={each.url}
                alt="bid"
              />
              <p className="lg:text-[40px] font-bold font-satoshi p-8">
                {each.name}
              </p>
            </div>
            <div className="flex flex-col gap-7">
              <p className="md:text-xl xl:text-[1.5rem] text-[#616161] font-medium">
                Creator:{" "}
                <span className="ml-7 md:text-lg xl:text-xl font-bold text-black capitalize">
                  {each.creator}
                </span>
              </p>
              <p className="md:text-xl xl:text-[1.5rem] text-[#616161] font-medium">
                Date:{" "}
                <span className="ml-7 md:text-lg xl:text-xl font-bold text-black">
                  {each.date.day}/ {each.date.month}/{each.date.year}
                </span>
              </p>
              <p className="md:text-xl xl:text-[1.5rem] text-[#616161] font-medium">
                Highest bid :{" "}
                <span className="ml-7 md:text-lg xl:text-xl font-bold text-black">
                  {each.bid.highest.eth} ETH
                </span>
              </p>
            </div>
            <div className="flex items-center bg-[#F6F4F4] p-5 justify-between gap-4 mt-10">
              <span className="flex flex-col gap-3 font-bold text-lg md:text-[1.5rem]">
                <p className="text-[#616161]">Current bid</p>
                <p>{each.bid.current.eth}</p>
              </span>
              <button className="bg-[#3341C1] text-base md:text-2xl font-medium font-satoshi text-white h-[46.2px] md:h-[73.1px] w-[157.5px] md:w-[247.3px]">
                Place bid
              </button>
            </div>
          </div>
        ))}
      </section>
    </main>
  );
};

export default Auctions;
