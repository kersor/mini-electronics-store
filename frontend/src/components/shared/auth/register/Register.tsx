import clsx from 'clsx'
import styles from './../styles.module.css'
import { CustomInput } from '@/components/ui/customInput/CustomInput'
import { useForm } from 'react-hook-form'
import { TypeStateAuth } from '@/types/stateAuth'
import { Dispatch, SetStateAction } from 'react'
import usePhoneNumber from '@/hooks/usePhoneNumber'

interface Form {
    email: string
    password: string
    phone: string
    name: string
}

interface Props {
    state: TypeStateAuth
    setState: Dispatch<SetStateAction<TypeStateAuth>>
}

export const Register = ({
    state,
    setState
}: Props) => {
    const { 
        control,
        setValue
     } = useForm<Form>({
        defaultValues: {
            email: "",
            password: "",
            phone: "",
            name: ""
        }
    })

    return (
        <div className={clsx(
            styles.auth_container,
            state === 'register' ? styles.auth_container__active : ""
        )}>
            <div className={styles.auth_component}>
                <div>
                    <div className='text-[25px] font-black'>Зарегестрироваться</div>
                    <div onClick={() => setState('login')} className='text-[14px] mt-2.5'>Есть аккаунт? <span className="cursor-pointer border-b border-[#000] font-medium">Войти в аккаунт</span></div>
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
                        name="name" 
                        type='text'
                        classNameBox='py-3'
                        classNameInput='text-[14px]'
                        label='ФИО'
                    />
                    <CustomInput<Form> 
                        control={control} 
                        name="phone" 
                        type='number'
                        classNameBox='py-3'
                        classNameInput='text-[14px]'
                        label='Телефон'
                    />
                    <CustomInput<Form> 
                        control={control} 
                        name="password" 
                        type='password'
                        classNameBox='py-3'
                        classNameInput='text-[14px]'
                        label='Пароль'
                    />
                    <div className={clsx(styles.auth_btn, "mt-2")}>Регистрация</div>
                </div>
            </div>
        </div>
    )
}