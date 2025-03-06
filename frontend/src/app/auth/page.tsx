"use client"

import { CustomInput } from '@/components/ui/customInput/CustomInput'
import styles from './styles.module.css'
import { useForm } from 'react-hook-form'
import clsx from 'clsx'
import { useState } from 'react'
import { TypeStateAuth } from '@/types/stateAuth'
import { Register } from '@/components/shared/auth/register/Register'
import { Login } from '@/components/shared/auth/login/Login'

export default function Auth () {
    const [state, setState] = useState<TypeStateAuth>('login')

    return (
        <div className={styles.auth}>
            <div className={styles.auth_body}>
                <div className={styles.auth_media}></div>
                <Login state={state} setState={setState} />
                <Register state={state} setState={setState} />
            </div>
        </div>
    )
}