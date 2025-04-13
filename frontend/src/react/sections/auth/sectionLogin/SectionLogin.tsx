import clsx from 'clsx'
import styles from './../styles.module.css'
import { CustomInput } from '@/react/components/inputs/customInput/CustomInput'
import { useForm } from 'react-hook-form'
import { TypeStateAuth } from '@/scripts/types/stateAuth'
import { Dispatch, SetStateAction, useEffect } from 'react'
import { object, string } from 'yup'
import { yupResolver } from '@hookform/resolvers/yup'
import { ArrowBigLeft, ArrowLeft } from 'lucide-react'
import { useRouter } from 'next/navigation'
import { useLoginMutation } from '@/scripts/api/api'

interface Form {
    email: string
    password: string
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
        string()
        .required('Введите пароль'),
})

export const SectionLogin = ({
    state,
    setState
}: Props) => {
    const [login] = useLoginMutation()
    const router = useRouter()

    const { 
        control,
        handleSubmit,
        watch,
        clearErrors,
        formState: {errors}
     } = useForm<Form>({
        defaultValues: {
            email: "",
            password: ""
        },
        resolver: yupResolver(schema)
    })

    const onSubmit = async (form: any) => {
        const {data} = await login(form)
        console.log(data)
    }

    useEffect(() => {
        clearErrors();
    }, [watch('email'), watch('password')]); 

    const funcOnClickState = () => {
        setState('register')
        clearErrors()
    }

    return (
        <div className={clsx(
            styles.auth_container,
            state === 'login' ? styles.auth_container__active : ""
        )}>
            <div className={styles.auth_component}>
                <div>
                    <div className='text-[25px] font-black'>Войти</div>
                    <div onClick={funcOnClickState} className='text-[14px] mt-2.5'>Нет аккаунта? <span className="cursor-pointer border-b border-[#000] font-medium">Создать аккаунт</span></div>
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
                        name="password" 
                        type='password'
                        classNameBox='py-3'
                        classNameInput='text-[14px]'
                        label='Пароль'
                        error={errors.password?.message}
                    />
                    <div onClick={handleSubmit(onSubmit)} className={clsx(styles.auth_btn, "mt-2")}>Войти</div>
                </div>
                <div onClick={() => router.push('/')} className="flex justify-center items-center gap-1 mt-5 text-[14px] text-[#69836f] font-bold cursor-pointer">
                    <ArrowLeft size={17} strokeWidth={3} /> Вернуться назад
                </div>
            </div>
        </div>
    )
}