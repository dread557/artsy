import { useState, useContext } from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { products } from '../../data/products'

import dia from '/public/dia.svg'
import { BsArrowRight, BsHeartFill, BsHeart } from 'react-icons/bs'
import { RiArrowDropUpLine } from 'react-icons/ri'
import { MdKeyboardArrowRight, MdKeyboardArrowLeft } from 'react-icons/md'
import { ProductContext } from '../../contexts/productContext'
import ExtraCollectionSlide from '../../components/ExtraCollectionSlide'


export const getStaticPaths = () => {
    const paths = products.map((product) => (
        {
            params: { product: product.name }
        }
    ))

    return {
        paths,
        fallback: false
    }
}

export const getStaticProps = ({ params }) => {
    const product = products.find((p) => p.name === params.product)

    return {
        props: { product }
    }
}

const Product = ({ product }) => {
    const [quantity, setQuantity] = useState(1)
    const [liked, setLiked] = useState(false)
    const [desc, setDesc] = useState(false)
    const [listing, setListing] = useState(false)
    const [status, setStatus] = useState(false)
    const { setCart } = useContext(ProductContext)
    const reduceQty = () => {
        if (quantity === 1) return
        setQuantity(prev => prev - 1)
        product.quantity = quantity
    }
    const increaseQty = () => {
        setQuantity(prev => prev + 1)
        product.quantity = quantity
    }

    const addToCart = (product) => {
        console.log(product)
    }

    return (
        <div className="pl-[30px] mt-8 md:mt-20 pr-[30px] md:pl-[65px] md:pr-[65px] xl:pl-[120px] xl:pr-[120px]">
            <span className='flex items-center  text-[#BCB7B7] font-medium md:text-2xl mb-4'>
                <Link href='/'>Home/</Link>
                <Link href='/marketplace'> Marketplace/ </Link>
                <Link href='#'>Editorials/</Link>
                <Link className='text-[#292929]' href='#'>{product.name}</Link>
            </span>
            <div className='flex flex-col lg:flex-row border-t lg:border border-[#333333] lg:pl-6 lg:mt-12'>
                <Image className='w-full lg:w-[50%] object-cover lg:border-r border-[#333333] pt-[45px] lg:pb-[45px] lg:pr-6' src={product.image} alt={product.name} />
                <div className='lg:w-[50%]'>
                    <span className='flex lg:pl-[30px] items-center mt-4 lg:mt-0 lg:pt-[58px] lg:pb-[58px] gap-[42px] justify-between lg:border-b border-[#333]  lg:pr-6'>
                        <h3 className='md:text-[25px] whitespace-nowrap xl:text-[46px] font-bold'>{product.name}</h3>
                        <span className='flex space-x-5 items-center'>
                            <Image className='hidden md:block' src={dia} alt='diamond' />
                            <p className='md:text-[25px] xl:text-[40px] font-medium font-stix'><span className='md:hidden'>$</span> {product.price}</p>
                        </span>
                    </span>
                    <div className='lg:pl-[30px] mt-[50px] flex flex-col gap-y-5 lg:gap-y-8'>
                        <p className='md:text-[30px] font-medium leading-[29.28px] text-[#616161]'>Creator : <span className='font-medium text-[#4693ED]'>{product.creator}</span></p>
                        <p className='md:text-2xl'>Made in Italy</p>
                        <p className='font-medium md:text-[28px]'>Total views: {product.views} views</p>
                        <div className='flex md:text-4xl gap-5 font-medium leading-[35.14px]'>
                            <button className='' onClick={reduceQty}>-</button>
                            <p className=''>{quantity}</p>
                            <button className='' onClick={increaseQty}>+</button>
                        </div>
                        <div className='flex gap-5 md:gap-12'>
                            <button onClick={() => addToCart(product)} className='flex items-center justify-center md:text-[26px] gap-3 h-[57.5px] md:h-[79.01px] w-[50%] bg-[#3341C1] text-white'>Add to cart <BsArrowRight /> </button>
                            <button onClick={() => { setLiked(!liked); AddToFav(product) }} className='border flex items-center justify-center w-[80px] border-[#292929]'>
                                {liked ? (
                                    <BsHeart className='h-[47.29px] w-[32.36px]' />
                                ) : (
                                    <BsHeartFill className='text-red-700 h-[47.29px] w-[32.36px]' />
                                )}
                            </button>
                        </div>

                    </div>
                    <span
                        className='flex items-center justify-between border-t p-5 md:p-10 pr-5 border-[#333] pl-5 calc mt-14'
                        onClick={() => setDesc(!desc)}
                    >
                        <h3 className='text-lg md:text-3xl font-medium'>Description</h3>
                        <RiArrowDropUpLine className={desc ? 'w-[36px] h-[29px] mt-2 ease-out duration-300 ' : 'transform rotate-180 ease-out duration-300 w-[36px] h-[29px] mt-2'} />
                    </span>
                    {desc && (<div>
                        <p className='lg:pl-5 lg:pb-5'>Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                            Enim, iste at dignissimos commodi deserunt accusamus
                            similique accusantium voluptates pariatur? Dolorum odit
                            suscipit cupiditate maxime quos odio ipsum dolores porro cumque?</p>
                    </div>)}
                    <span
                        className='flex items-center justify-between border-t p-5 md:p-10 pr-5 border-[#333] pl-5 calc '
                        onClick={() => setListing(!listing)}
                    >
                        <h3 className='text-lg md:text-3xl font-medium'>Listing</h3>
                        <RiArrowDropUpLine className={listing ? 'w-[36px] h-[29px] mt-2 ease-out duration-300 ' : 'transform rotate-180 ease-out duration-300 w-[36px] h-[29px] mt-2'} />
                    </span>
                    {listing && (<div>
                        <p className='lg:pl-5 lg:pb-5'>Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                            Enim, iste at dignissimos commodi deserunt accusamus
                        </p>
                    </div>)}
                    <span
                        className='flex items-center justify-between border-t p-5 md:p-10 pr-5 border-[#333] pl-5 calc '
                        onClick={() => setStatus(!status)}
                    >
                        <h3 className='text-lg md:text-3xl font-medium'>Status</h3>
                        <RiArrowDropUpLine className={status ? 'w-[36px] h-[29px] mt-2 ease-out duration-300 ' : 'transform rotate-180 ease-out duration-300 w-[36px] h-[29px] mt-2'} />
                    </span>
                    {status && (<div>
                        <p className='lg:pl-5 lg:pb-5'>Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                            Enim, iste at dignissimos commodi deserunt accusamus
                        </p>
                    </div>)}
                    <div className='w-full border-t border-[#333] calc block lg:hidden'></div>
                </div>
            </div>
            <div className='mt-[75px] mb-14'>
                <div className='flex items-center justify-between md:p-6 rounded-2xl md:shadow-[4px_4px_64px_rgba(0,0,0,0.08)]'>
                    <p className='text-2xl md:text-[32px] font-medium'>Explore more from this collection</p>
                    <div className='hidden md:flex items-center gap-[19px] mt-[21px]'>
                        <div className='w-[59px] cursor-pointer h-[59px] rounded-full bg-transparent relative border border-[#616161]'>
                            <MdKeyboardArrowLeft className='absolute  top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%] w-[45.42px] h-[34.34px]' />
                        </div>
                        <div className='w-[59px] cursor-pointer h-[59px] rounded-full bg-transparent relative border border-[#616161]'>
                            <MdKeyboardArrowRight className='absolute top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%] w-[45.42px] h-[34.34px]' />
                        </div>
                    </div>
                </div>
                <ExtraCollectionSlide />
                <Link href={'/marketplace'} class="hidden md:flex mt-[30px] md:mt-[100px]  justify-center">
                    <div class="rounded-xl bg-gradient-to-r from-[#78A3AD] to-[#C056097D] p-1">
                        <div class="flex h-full w-full items-center justify-center bg-white back">
                            <button className='rounded-2xl w-[313px] h-[91px] text-[36px]'>Explore all</button>
                        </div>
                    </div>
                </Link>
            </div>
        </div>
    )
}

export default Product