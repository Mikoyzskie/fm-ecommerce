"use client"

import Image from "next/image"
import { useState } from "react"

const thumbs = ["1", "2", "3", "4"]

export default function Images() {

    const [mainImage, setMainImage] = useState("1")

    return (
        <div>
            <Image
                src={`/image-product-${mainImage}.jpg`}
                alt="Product 1"
                height={445}
                width={445}
                className='rounded-2xl max-w-md max-h-[448px] h-full w-full mb-8'
            />
            <div className='hidden lg:flex justify-between'>
                {
                    thumbs.map((thumb) => (
                        <Image
                            key={thumb}
                            src={`/image-product-${thumb}-thumbnail.jpg`}
                            alt="Product 1"
                            height={89}
                            width={90}
                            className='rounded-xl max-w-[89px] max-h-[89px] h-full w-full hover:cursor-pointer'
                            onClick={() => { setMainImage(thumb) }}
                        />
                    ))
                }
            </div>
        </div>
    )
}