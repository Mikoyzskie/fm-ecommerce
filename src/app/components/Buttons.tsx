"use client"

import { useGlobalContext } from "../lib/Provider"
import Image from "next/image"
import { useState } from "react"

export default function Buttons() {

    const [count, setCount] = useState(0)
    const [active, setActive] = useState(false)

    const { cartCount, setCartCount } = useGlobalContext()

    function handleMinus() {
        if (count === 0) {
            return
        } else {
            setCount(count - 1);
        }
    }

    function handleActive() {
        setActive(!active)
    }

    function handleCartAdd() {
        if (count === 0) {
            return
        } else {
            setCartCount(count)
        }
    }

    return (
        <div className='flex gap-4 flex-col lg:flex-row'>
            <div className='flex items-center justify-between lg:justify-normal bg-slate-100 rounded-md gap-11'>
                <button className='py-5 pl-10 lg:pl-3 group' onClick={handleMinus}>
                    <Image
                        src={"/icon-minus.svg"}
                        alt="minus icon"
                        width={12}
                        height={4}
                        className="group-hover:opacity-60"
                    />

                </button>
                <span className='font-bold'>
                    {count}
                </span>
                <button className='py-5 pr-10 lg:pr-3 group' onClick={() => { setCount(count + 1) }}>
                    <svg width="12" height="12" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" className="group-hover:opacity-60"><defs><path d="M12 7.023V4.977a.641.641 0 0 0-.643-.643h-3.69V.643A.641.641 0 0 0 7.022 0H4.977a.641.641 0 0 0-.643.643v3.69H.643A.641.641 0 0 0 0 4.978v2.046c0 .356.287.643.643.643h3.69v3.691c0 .356.288.643.644.643h2.046a.641.641 0 0 0 .643-.643v-3.69h3.691A.641.641 0 0 0 12 7.022Z" id="b" /></defs><use fill="#FF7E1B" fillRule="nonzero" xlinkHref="#b" /></svg>
                </button>
            </div>
            <button className='flex items-center justify-center grow bg-[#ff7d1a] rounded-md text-white font-bold shadow-2xl shadow-[#ff7d1a] gap-4 py-4 active:bg-[#ffede0] active:text-[#ff7d1a] group' onClick={handleCartAdd} >
                <svg width="22" height="20" xmlns="http://www.w3.org/2000/svg"><path d="M20.925 3.641H3.863L3.61.816A.896.896 0 0 0 2.717 0H.897a.896.896 0 1 0 0 1.792h1l1.031 11.483c.073.828.52 1.726 1.291 2.336C2.83 17.385 4.099 20 6.359 20c1.875 0 3.197-1.87 2.554-3.642h4.905c-.642 1.77.677 3.642 2.555 3.642a2.72 2.72 0 0 0 2.717-2.717 2.72 2.72 0 0 0-2.717-2.717H6.365c-.681 0-1.274-.41-1.53-1.009l14.321-.842a.896.896 0 0 0 .817-.677l1.821-7.283a.897.897 0 0 0-.87-1.114ZM6.358 18.208a.926.926 0 0 1 0-1.85.926.926 0 0 1 0 1.85Zm10.015 0a.926.926 0 0 1 0-1.85.926.926 0 0 1 0 1.85Zm2.021-7.243-13.8.81-.57-6.341h15.753l-1.383 5.53Z" className="fill-white group-active:fill-[#ff7d1a]" /></svg>
                <span>Add to cart</span>
            </button>
        </div>
    )
}