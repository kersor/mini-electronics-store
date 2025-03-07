import clsx from 'clsx'
import styles from './../styles.module.css'
import { CustomInput } from '@/components/ui/customInput/CustomInput'
import { useForm } from 'react-hook-form'
import { TypeStateAuth } from '@/types/stateAuth'
import { Dispatch, SetStateAction, useEffect } from 'react'
import usePhoneNumber from '@/hooks/usePhoneNumber'
import { object, string } from 'yup'
import { yupResolver } from '@hookform/resolvers/yup';

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

const schema = object({
    email: 
        string()
        .required('Введите Email'),
    password: 
        string().min(8, "Минимальное количество символов 8")
        .required('Введите пароль'),
    phone: 
        string()
        .required('Введите телефон'),
    name: 
        string()
        .required('Введите свое ФИО'),
})

export const Register = ({
    state,
    setState,
}: Props) => {
    const { 
        control,
        setValue,
        handleSubmit,
        watch,
        clearErrors,
        formState: {errors}
     } = useForm<Form>({
        defaultValues: {
            email: "",
            password: "",
            phone: "",
            name: ""
        },
        resolver: yupResolver(schema)
    })

    const onSubmit = async (data: any) => {
        console.log(data)
    }

    useEffect(() => {
        clearErrors();
    }, [watch('email'), watch('password'), watch('phone'), watch('name')]); 

    const funcOnClickState = () => {
        setState('login')
        clearErrors()
    }
    

    return (
        <div className={clsx(
            styles.auth_container,
            state === 'register' ? styles.auth_container__active : ""
        )}>
            <div className={styles.auth_component}>
                <div>
                    <div className='text-[25px] font-black'>Регистрация</div>
                    <div onClick={funcOnClickState} className='text-[14px] mt-2.5'>Есть аккаунт? <span className="cursor-pointer border-b border-[#000] font-medium">Войти в аккаунт</span></div>
                </div>
                <div className='flex flex-col gap-3 mt-10'>
                    <CustomInput<Form> 
                        control={control} 
                        name="email" 
                        type='email'
                        classNameBox='py-3'
                        classNameInput='text-[14px]'
                        label='Email'
                        error={errors.email?.message}
                    />
                    <CustomInput<Form> 
                        control={control} 
                        name="name" 
                        type='text'
                        classNameBox='py-3'
                        classNameInput='text-[14px]'
                        label='ФИО'
                        error={errors.name?.message}
                    />
                    <CustomInput<Form> 
                        control={control} 
                        name="phone" 
                        type='number'
                        classNameBox='py-3'
                        classNameInput='text-[14px]'
                        label='Телефон'
                        error={errors.phone?.message}
                    />
                    <CustomInput<Form> 
                        control={control} 
                        name="password" 
                        type='password'
                        classNameBox='py-3'
                        classNameInput='text-[14px]'
                        label='Пароль'
                        error={errors.password?.message}
                    />
                    <div onClick={handleSubmit(onSubmit)} className={clsx(styles.auth_btn, "mt-2")}>Зарегестрироваться</div>
                </div>
            </div>
        </div>
    )
}