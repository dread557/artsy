import Link from 'next/link'
import Image from 'next/image'
import { products } from "../../data/products"

import dia from '/public/dia.svg'

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
    return (
        <div className="pl-[30px] mt-8 md:mt-20 pr-[30px] md:pl-[65px] md:pr-[65px] lg:pl-[120px] lg:pr-[120px]">
            <span className='flex items-center  text-[#BCB7B7] font-medium text-2xl mb-4'>
                <Link href='/'>Home/</Link>
                <Link href='/marketplace'> Marketplace/ </Link>
                <Link href='/editorials'>Editorials/</Link>
                <Link className='text-[#292929]' href='/editorials'>{product.name}</Link>
            </span>
            <div className='flex border-2 border-[#333333] pl-6 mt-12'>
                <Image className='h-[962px] w-[50%] object-cover border-r-2 border-[#333333] pt-[45px] pb-[45px] pr-6' src={product.image} alt={product.name} />
                <div className='w-[50%]'>
                    <span className='flex pl-[30px] pt-[58px] pb-[58px] gap-[42px] justify-between border-b-2 border-[#333]  pr-6'>
                        <h3 className='text-[46px] font-bold'>{product.name}</h3>
                        <span className='flex space-x-5 items-center'>
                            <Image src={dia} alt='diamond' />
                            <p className='text-[40px] font-medium font-stix'>{product.price}</p>
                        </span>
                    </span>
                </div>
            </div>
        </div>
    )
}

export default Product