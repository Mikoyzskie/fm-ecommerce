import Image from 'next/image'
import Images from "@/app/components/Images"

export default function Home() {
  return (
    <div className='flex justify-between items-center flex-col lg:flex-row gap-11'>
      <Images />
      <div className='max-w-md flex flex-col'>
        <span className='text-sm font-bold text-[#ff7d1a] mb-[30px]'>SNEAKER COMPANY</span>
        <h1 className='text-3xl lg:text-5xl max-w-prose font-bold mb-[48px]'>Fall Limited Edition Sneakers</h1>
        <p className='max-w-prose mb-[36px] text-gray-500'>{`These low-profile sneakers are your perfect casual wear companion. Featuring a
          durable rubber outer sole, they’ll withstand everything the weather can offer.`}</p>
        <div className='flex flex-row lg:flex-col justify-between items-center lg:items-start lg:gap-4 mb-10 '>
          <div className='flex items-center gap-4'>
            <h2 className='text-2xl lg:text-3xl font-bold'>$125.00</h2>
            <span className='font-bold text-[#ff7d1a] bg-[#ffede0] px-2 rounded-md'>50%</span>
          </div>
          <h3 className='font-bold text-gray-400 line-through'>$250.00</h3>
        </div>
        <div className='flex gap-4 flex-col lg:flex-row'>
          <div className='flex items-center bg-slate-100 rounded-md gap-11'>
            <button className='py-5 pl-3'>
              <Image
                src={"/icon-minus.svg"}
                alt='minus icon'
                height={12}
                width={12}
              />
            </button>
            <span className='font-bold'>0</span>
            <button className='py-5 pr-3'>
              <Image
                src={"/icon-plus.svg"}
                alt='plus icon'
                height={12}
                width={12}
              />
            </button>
          </div>
          <button className='flex items-center justify-center grow bg-[#ff7d1a] rounded-md text-white font-bold shadow-2xl shadow-[#ff7d1a] gap-4 py-4'>
            <Image
              src={"/icon-cart.svg"}
              alt="Cart Icon"
              width={16}
              height={16}
              className={`text-white`}
            />
            <span>Add to cart</span>
          </button>
        </div>
      </div>
    </div>
  )
}
