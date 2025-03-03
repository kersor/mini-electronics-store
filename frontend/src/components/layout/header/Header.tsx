"use client"

import { Container } from "@/components/shared/container/Container"
import Link from "next/link"
import { useState } from "react"
import { FaRegHeart } from "react-icons/fa"
import { FaRegCircleUser } from "react-icons/fa6"
import { FiHeart, FiShoppingBag } from "react-icons/fi"
import { IoBagOutline } from "react-icons/io5"
import { LuUserRound } from "react-icons/lu"

interface Props {
    className?: string
}

export const Header = ({
    className
}: Props) => {
    const [inputValue, setInputValue] = useState("")

    return (
        <header>
            <Container className="flex items-center justify-between h-[60px]">
                <Link className="text-[30px] font-bold text-[#0e4607]" href="/">Shopcart</Link>
                <div className="flex items-center gap-10">
                    <div className="flex items-center gap-2">
                        {/* <div className="cursor-pointer relative">
                            <FaRegHeart size={20} strokeWidth={1} />
                            <div className="absolute top-0 right-0 translate-x-[6px] -translate-y-[4px]">
                                <div className="bg-[#FFF] flex items-center justify-center border border-[#242424d9] text-[12px] font-bold rounded-full w-[15px] h-[15px]">12</div>
                            </div>
                        </div> */}
                        <div className="cursor-pointer relative">
                            <IoBagOutline size={20} strokeWidth={2} />
                            <div className="absolute top-0 right-0 translate-x-[6px] -translate-y-[4px]">
                                <div className="bg-[#FFF] flex items-center justify-center border border-[#242424d9] text-[12px] font-bold rounded-full w-[15px] h-[15px]">12</div>
                            </div>
                        </div>
                        <Link href="/" className="border border-[#1f1f1f] rounded-full p-[5px] ml-[10px] cursor-pointer" >
                            <LuUserRound size={20} strokeWidth={1} />
                        </Link>
                    </div>
                </div>
            </Container>
        </header>
    )
}