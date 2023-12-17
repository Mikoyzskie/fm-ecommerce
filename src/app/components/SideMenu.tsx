"use client"

import clsx from "clsx"
import { useGlobalContext } from "../lib/Provider"
import Link from "next/link"
import styles from "@/app/styles/side.module.css"

export default function SideMenu() {

    const { sideMenu, setSideMenu } = useGlobalContext()

    return (
        <div className={clsx("fixed block lg:hidden inset-y-0 bg-black bg-opacity-50 z-20 transition-all ease-in-out",
            sideMenu ? "left-0 right-0" : "-left-96"
        )}>
            <div className="w-2/3 bg-white h-full p-6">
                <button className="hover:cursor-pointer mb-14" onClick={() => { setSideMenu(false) }}>
                    <svg width="14" height="15" xmlns="http://www.w3.org/2000/svg"><path d="m11.596.782 2.122 2.122L9.12 7.499l4.597 4.597-2.122 2.122L7 9.62l-4.595 4.597-2.122-2.122L4.878 7.5.282 2.904 2.404.782l4.595 4.596L11.596.782Z" fill="#69707D" fillRule="evenodd" /></svg>
                </button>
                <div className="flex flex-col gap-8">
                    <Link href={"/"} className={`${styles.sidelink} font-bold text-lg`}>Collections</Link>
                    <Link href={"/"} className={`${styles.sidelink} font-bold text-lg`}>Men</Link>
                    <Link href={"/"} className={`${styles.sidelink} font-bold text-lg`}>Women</Link>
                    <Link href={"/"} className={`${styles.sidelink} font-bold text-lg`}>About</Link>
                    <Link href={"/"} className={`${styles.sidelink} font-bold text-lg`}>Contact</Link>
                </div>
            </div>
        </div>
    )
}