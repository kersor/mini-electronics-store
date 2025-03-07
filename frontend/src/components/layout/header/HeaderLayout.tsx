"use client"

import { usePathname } from "next/navigation"
import { Header } from "./Header"

const PageIsNotVisible = [
    '/auth'
]

export const HeaderLayout = () => {
    const pathName = usePathname()
    return (
        <>
            {PageIsNotVisible.map((item: string) => item === pathName ? null : <Header key={item} />)}
        </>
    )
}