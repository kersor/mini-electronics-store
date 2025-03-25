"use client"

import { Container } from "@/components/shared/container/Container"
import { Heart, ShoppingBag, User, UserRound } from "lucide-react"
import Link from "next/link"
import { useRouter } from "next/navigation"
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
    const router = useRouter()
    const [inputValue, setInputValue] = useState("")

    return (
        <header>
            <Container className="flex items-center justify-between h-[60px]">
                <Link className="text-[30px] font-black text-[#648660] uppercase" href="/">LOGO</Link>
                <div className="flex items-center gap-10">
                    <div className="flex items-center gap-2">
                        <div onClick={() => router.push('/favorite')} className="cursor-pointer relative">
                            <Heart size={20} strokeWidth={1} />
                            <div className="absolute top-0 right-0 translate-x-[6px] -translate-y-[4px]">
                                <div className="bg-[#FFF] flex items-center justify-center border border-[#242424d9] text-[12px] font-medium rounded-full min-w-[15px] h-[15px]">1</div>
                            </div>
                        </div>
                        <div onClick={() => router.push('/cart')} className="cursor-pointer relative">
                            <ShoppingBag size={20} strokeWidth={1} />
                            <div className="absolute top-0 right-0 translate-x-[6px] -translate-y-[4px]">
                                <div className="bg-[#FFF] flex items-center justify-center border border-[#242424d9] text-[12px] font-medium rounded-full min-w-[15px] h-[15px] p-0.5">12</div>
                            </div>
                        </div>
                        <Link href="/auth" className="ml-5 cursor-pointer" >
                            <UserRound size={20} strokeWidth={1} />
                        </Link>
                    </div>
                </div>
            </Container>
        </header>
    )
}