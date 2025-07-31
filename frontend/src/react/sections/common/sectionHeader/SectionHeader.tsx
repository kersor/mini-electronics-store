"use client"

import { Container } from "@/react/components/containers/container/Container"
import { CustomButton } from "@/react/components/ui/customButton/CustomButton"
import { useGetCountFavoritesQuery } from "@/scripts/api/favorites/favoritesApi"
import { useUser } from "@/store/user.zustand"
import { deleteCookie } from "cookies-next/client"
import { Heart, ShoppingBag, User, UserRound } from "lucide-react"
import Link from "next/link"
import { useRouter } from "next/navigation"
import { skip } from "node:test"
import React, { useEffect, useMemo, useState } from "react"
import { FaRegHeart } from "react-icons/fa"
import { FaRegCircleUser } from "react-icons/fa6"
import { FiHeart, FiShoppingBag } from "react-icons/fi"
import { IoBagOutline } from "react-icons/io5"
import { LuUserRound } from "react-icons/lu"

interface Props {
    className?: string
}

export const SectionHeader = ({
    className
}: Props) => {
    const [count, setCount] = useState(0)
    const {user, setUser} = useUser(state => state)

    const {data: CountFavorites} = useGetCountFavoritesQuery({}, {
        skip: !user.id
    })

    const router = useRouter()
    const [inputValue, setInputValue] = useState("")

    const name = useMemo(() => {
        if (user.name) {
            const name = user.name.slice(0, 1)
            return name
        } else {
            return null
        }
    }, [user])

    const funcLogout = () => {
        deleteCookie('access_token')
        setUser({})
        router.push('/')
    }

    const isAdmin = user.isAdmin

    useEffect(() => {
        if (CountFavorites === undefined || CountFavorites === null) return
        setCount(prev => CountFavorites)
    }, [CountFavorites])
    return (
        <header>
            <Container className="flex items-center justify-between h-[60px]">
                <Link className="text-[30px] font-black text-[#648660] uppercase" href="/">LOGO</Link>
                <div className="flex items-center gap-10">
                    <div className="flex items-center gap-2">
                        <div onClick={() => router.push('/favorites')} className="cursor-pointer relative">
                            <Heart size={20} strokeWidth={1} />
                            {(count !== 0) && (
                                <div className="absolute top-0 right-0 translate-x-[6px] -translate-y-[4px]">
                                    <div className="bg-[#FFF] flex items-center justify-center border border-[#242424d9] text-[12px] font-medium rounded-full min-w-[15px] h-[15px]">
                                        {count}
                                    </div>
                                </div>
                            )}

                        </div>
                        <div onClick={() => router.push('/cart')} className="cursor-pointer relative">
                            <ShoppingBag size={20} strokeWidth={1} />
                            <div className="absolute top-0 right-0 translate-x-[6px] -translate-y-[4px]">
                                <div className="bg-[#FFF] flex items-center justify-center border border-[#242424d9] text-[12px] font-medium rounded-full min-w-[15px] h-[15px] p-0.5">12</div>
                            </div>
                        </div>
                        {
                            !!user.id ? (
                                <React.Fragment>
                                    <div className="border border-black px-2 rounded-full ml-5 relative group">
                                        {name}
                                        <div className="absolute top-0 left-[-100%] translate-x-[-10%] pt-[150%] z-10 hidden group-hover:block">
                                            <div className="flex flex-col gap-2 bg-[#FFF] p-2 shadow-lg rounded-md">
                                                {isAdmin && <CustomButton title="Админ панель" variant="outlined" onClick={() => router.push('/admin')} />}
                                                <CustomButton title="Выйти" variant="outlined" onClick={funcLogout} />
                                            </div>
                                        </div>

                                    </div>

                                </React.Fragment>
                            ) : (
                                <Link href="/auth" className="ml-5 cursor-pointer" >
                                    <UserRound size={20} strokeWidth={1} />
                                </Link>
                            )
                        }

                    </div>
                </div>
            </Container>
        </header>
    )
}