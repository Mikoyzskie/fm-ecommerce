import Image from 'next/image'
import Images from "@/app/components/Images"
import Buttons from './components/Buttons'

export default function Home() {
  return (
    <div className='flex justify-between items-center flex-col lg:flex-row lg:gap-11'>
      <Images />
      <div className='max-w-md flex flex-col p-5 lg:p-0'>
        <span className='text-sm font-bold text-[#ff7d1a] mb-5 lg:mb-[30px]'>SNEAKER COMPANY</span>
        <h1 className='text-3xl lg:text-5xl max-w-prose font-bold mb-5 lg:mb-[48px]'>Fall Limited Edition Sneakers</h1>
        <p className='max-w-prose mb-5 lg:mb-[36px] text-gray-500'>{`These low-profile sneakers are your perfect casual wear companion. Featuring a
          durable rubber outer sole, they’ll withstand everything the weather can offer.`}</p>
        <div className='flex flex-row lg:flex-col justify-between items-center lg:items-start lg:gap-4 mb-5 lg:mb-10 '>
          <div className='flex items-center gap-4'>
            <h2 className='text-2xl lg:text-3xl font-bold'>$125.00</h2>
            <span className='font-bold text-[#ff7d1a] bg-[#ffede0] px-2 rounded-md'>50%</span>
          </div>
          <h3 className='font-bold text-gray-400 line-through'>$250.00</h3>
        </div>
        <Buttons />
      </div>
    </div>
  )
}
