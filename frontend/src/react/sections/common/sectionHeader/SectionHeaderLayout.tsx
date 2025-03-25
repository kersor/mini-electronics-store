"use client"

import { usePathname } from "next/navigation"
import { SectionHeader } from "./SectionHeader"

const PageIsNotVisible = [
    '/auth'
]

export const SectionHeaderLayout = () => {
    const pathName = usePathname()
    return (
        <>
            {PageIsNotVisible.map((item: string) => item === pathName ? null : <SectionHeader key={item} />)}
        </>
    )
}