import Link from "next/link"
import Image from "next/image"
import styles from "@/app/styles/header.module.css"
import { useState } from "react"

const links = ["Collections", "Men", "Women", "About", "Contact"]

export default function Header() {

    return (
        <header className={`${styles.headerMain} flex items-center justify-between max-w-6xl mx-auto border-b px-5`}>
            <div className="flex items-center gap-14">
                <Link href={"/"} className="text-4xl font-bold py-6">
                    <Image
                        alt="Sneakers logo"
                        src={"/logo.svg"}
                        height={20}
                        width={138}
                    />
                </Link>
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
            <div className="flex items-center gap-11">
                <div className="relative after:content-['3'] after:bg-[#ff7d1a] after:text-white after:-top-2 after:left-2 after:absolute after:text-xs after:px-2 after:rounded-full">
                    <Image
                        src={"/icon-cart.svg"}
                        alt="Cart Icon"
                        width={20}
                        height={20}
                        className={`text-slate-500 text-xl hover:cursor-pointer hover:font-bold hover:text-black transition-all duration-75`}
                    />
                </div>
                <Image
                    src={"/image-avatar.png"}
                    alt="User Avatar"
                    width={50}
                    height={50}
                    className={`${styles.avatar} object-cover object-center h-12 w-12 rounded-full`}
                />
            </div>
        </header>
    )
}