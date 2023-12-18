"use client"

import clsx from "clsx"
import Image from "next/image"
import { useState } from "react"

const thumbs = [1, 2, 3, 4]

export default function Images() {

    const [mainImage, setMainImage] = useState(1)

    function handleImageNext() {
        if (mainImage > 3) {
            setMainImage(4)
        } else {
            setMainImage(mainImage + 1)
        }
    }

    function handleImagePrev() {
        if (mainImage < 2) {
            setMainImage(1)
        } else {
            setMainImage(mainImage - 1)
        }
    }

    return (
        <div>
            <Image
                src={`/image-product-${mainImage}.jpg`}
                alt="Product 1"
                height={445}
                width={445}
                className='hidden md:block md:rounded-2xl md:mt-5 lg:mt-0 max-w-screen-2xl md:max-w-md lg:max-h-[448px] h-full w-screen md:w-full mb-0 lg:mb-8'
            />
            <div className="block md:hidden relative">
                <button className="flex items-center justify-center h-10 w-10 absolute top-1/2 -translate-y-1/2 left-3 bg-white rounded-full group" onClick={handleImagePrev}>
                    <svg width="12" height="18" xmlns="http://www.w3.org/2000/svg"><path d="M11 1 3 9l8 8" stroke="#1D2026" strokeWidth="3" fill="none" className="fill-white group-active:stroke-[#ff7d1a]" /></svg>
                </button>
                <Image
                    src={`/image-product-${mainImage}.jpg`}
                    alt="Product 1"
                    height={445}
                    width={445}
                    className=' md:rounded-2xl md:mt-5 lg:mt-0 max-w-screen-2xl md:max-w-md lg:max-h-[448px] h-full w-screen md:w-full mb-0 lg:mb-8'
                />
                <button className="flex items-center justify-center h-10 w-10 absolute top-1/2 -translate-y-1/2 right-3 bg-white rounded-full group" onClick={handleImageNext}>
                    <svg width="13" height="18" xmlns="http://www.w3.org/2000/svg"><path d="m2 1 8 8-8 8" stroke="#1D2026" strokeWidth="3" fill="none" className="fill-white group-active:stroke-[#ff7d1a]" /></svg>
                </button>
            </div>
            <div className='hidden md:flex justify-between md:mt-5 lg:mt-0'>
                {
                    thumbs.map((thumb) => (
                        <Image
                            key={thumb}
                            src={`/image-product-${thumb}-thumbnail.jpg`}
                            alt="Product 1"
                            height={99}
                            width={100}
                            className={clsx("rounded-xl max-w-[89px] max-h-[89px] h-full w-full hover:cursor-pointer hover:opacity-60",
                                thumb === mainImage ? "opacity-50 border-2 border-[#ff7d1a]" : ""
                            )}
                            onClick={() => { setMainImage(thumb) }}
                        />
                    ))
                }
            </div>
        </div>
    )
}