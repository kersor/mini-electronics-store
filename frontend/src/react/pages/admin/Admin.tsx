"use client"

import { useUser } from '@/store/user.zustand'
import styles from './styles.module.css'
import { useRouter } from 'next/navigation'

export default function PageAdmin () {
    const router = useRouter()
    const {user} = useUser(state => state)

    const isAdmin = user.isAdmin

    if (isAdmin) {
        return (
            <div className={styles.admin}>

            </div>
        )
    } else {
        router.push('/404') 
    }



}