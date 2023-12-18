"use client"

import Link from "next/link"
import Image from "next/image"
import styles from "@/app/styles/header.module.css"
import { useState } from "react"
import { useGlobalContext } from "../lib/Provider"
import Cart from "./Cart"
import clsx from "clsx"


const links = ["Collections", "Men", "Women", "About", "Contact"]

export default function Header() {

    const [cart, showCart] = useState(true)
    const { setSideMenu, cartCount } = useGlobalContext()

    function handleCart() {
        showCart(!cart)
    }

    return (
        <header className={`${styles.headerMain} flex items-center justify-between max-w-6xl mx-auto border-b px-5 relative`}>
            <div className="flex items-center gap-14">
                <div className="flex items-center gap-4">
                    <button className="block lg:hidden" onClick={() => { setSideMenu(true) }}>
                        <svg width="16" height="15" xmlns="http://www.w3.org/2000/svg"><path d="M16 12v3H0v-3h16Zm0-6v3H0V6h16Zm0-6v3H0V0h16Z" fill="#69707D" fillRule="evenodd" /></svg>
                    </button>
                    <Link href={"/"} className="text-4xl font-bold py-6">
                        <Image
                            alt="Sneakers logo"
                            src={"/logo.svg"}
                            height={20}
                            width={138}
                        />
                    </Link>
                </div>
                <div className="hidden items-center gap-8 text-sm text-slate-500 lg:flex">
                    {
                        links.map((link) => (
                            <Link href={"/"}
                                key={link}
                                className={`${styles.headerLink} py-9`} >
                                {link}
                            </Link>
                        ))
                    }
                </div>
            </div>
            <div className="flex items-center gap-5 lg:gap-11">
                <div className="relative">
                    <span className={clsx("absolute bg-[#ff7d1a] rounded-full text-xs -top-2 left-2 text-white px-2",
                        cartCount < 1 ? "hidden" : ""
                    )}>
                        {cartCount}
                    </span>
                    <Image
                        src={"/icon-cart.svg"}
                        alt="Cart Icon"
                        width={20}
                        height={20}
                        className={`text-slate-500 text-xl hover:cursor-pointer hover:font-bold hover:text-black transition-all duration-75`}
                        onClick={handleCart}
                    />
                </div>
                <Image
                    src={"/image-avatar.png"}
                    alt="User Avatar"
                    width={50}
                    height={50}
                    className={`${styles.avatar} object-cover object-center w-9 h-9 lg:h-12 lg:w-12 rounded-full`}
                />
            </div>
            <Cart isHidden={cart} />
        </header>
    )
}