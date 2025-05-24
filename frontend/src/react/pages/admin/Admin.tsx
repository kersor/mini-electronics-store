"use client"

import { useUser } from '@/store/user.zustand'
import styles from './styles.module.css'
import { useRouter } from 'next/navigation'
import { SectionAdmin } from '@/react/sections/admin/sectionAdmin/SectionAdmin'

export default function PageAdmin () {
    const router = useRouter()
    const {user} = useUser(state => state)

    const isAdmin = user.isAdmin

    console.log(isAdmin)

    if (isAdmin === true) return <SectionAdmin />
    else if (isAdmin === false) router.push('/404') 
}