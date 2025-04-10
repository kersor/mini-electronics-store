"use client"

import { CustomInput } from '@/react/components/inputs/customInput/CustomInput'
import styles from './styles.module.css'
import { useForm } from 'react-hook-form'
import clsx from 'clsx'
import { useState } from 'react'
import { TypeStateAuth } from '@/scripts/types/stateAuth'
import { SectionLogin } from '@/react/sections/auth/sectionLogin/SectionLogin'
import { SectionRegister } from '@/react/sections/auth/sectionRegister/SectionRegister'

export default function PageAuth () {
    const [state, setState] = useState<TypeStateAuth>('login')

    return (
        <div className={styles.auth}>
            <div className={styles.auth_body}>
                <div className={styles.auth_media}></div>
                <SectionLogin state={state} setState={setState} />
                <SectionRegister state={state} setState={setState} />
            </div>
        </div>
    )
}