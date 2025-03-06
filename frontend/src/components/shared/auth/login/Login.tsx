import clsx from 'clsx'
import styles from './../styles.module.css'
import { CustomInput } from '@/components/ui/customInput/CustomInput'
import { useForm } from 'react-hook-form'
import { TypeStateAuth } from '@/types/stateAuth'
import { Dispatch, SetStateAction } from 'react'

interface Form {
    email: string
    password: string
}

interface Props {
    state: TypeStateAuth
    setState: Dispatch<SetStateAction<TypeStateAuth>>
}

export const Login = ({
    state,
    setState
}: Props) => {
    const { control } = useForm<Form>({
        defaultValues: {
            email: "",
            password: ""
        }
    })

    return (
        <div className={clsx(
            styles.auth_container,
            state === 'login' ? styles.auth_container__active : ""
        )}>
            <div className={styles.auth_component}>
                <div>
                    <div className='text-[25px] font-black'>Войти</div>
                    <div onClick={() => setState('register')} className='text-[14px] mt-2.5'>Нет аккаунта? <span className="cursor-pointer border-b border-[#000] font-medium">Создать аккаунт</span></div>
                </div>
                <div className='flex flex-col gap-3 mt-10'>
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
    )
}