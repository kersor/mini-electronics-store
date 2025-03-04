"use client"

import { CustomInput } from '@/components/ui/customInput/CustomInput'
import styles from './styles.module.css'
import { useForm } from 'react-hook-form'
import clsx from 'clsx'

interface Form {
    email: string
    password: string
}

export default function Auth () {
    const { control } = useForm<Form>({
        defaultValues: {
            email: "",
            password: ""
        }
    })
    return (
        <div className={styles.auth}>
            <div className={styles.auth_body}>
                <div className={styles.auth_media}></div>
                <div className={styles.auth_component}>
                    <div>
                        <div className='text-[28px] font-semibold'>Добро пожаловать в Shopcart</div>
                        <div className='text-[14px] mt-2.5'>Нет аккаунта? <span className="cursor-pointer border-b border-[#000] font-medium">Создать аккаунт</span></div>
                    </div>
                    <div className='flex flex-col gap-3 mt-16'>
                        <CustomInput<Form> 
                            control={control} 
                            name="email" 
                            type='email'
                            classNameBox='py-3'
                            classNameInput='text-[14px]'
                            label='Email'
                        />
                        <CustomInput<Form> 
                            control={control} 
                            name="password" 
                            type='password'
                            classNameBox='py-3'
                            classNameInput='text-[14px]'
                            label='Пароль'
                        />
                        <div className={clsx(styles.auth_btn, "mt-2")}>Войти</div>
                    </div>
                </div>
            </div>
        </div>
    )
}