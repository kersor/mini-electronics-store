import clsx from 'clsx'
import styles from './../styles.module.css'
import { CustomInput } from '@/react/components/inputs/customInput/CustomInput'
import { useForm } from 'react-hook-form'
import { TypeStateAuth } from '@/scripts/types/stateAuth'
import { Dispatch, SetStateAction, useEffect } from 'react'
import { object, string } from 'yup'
import { yupResolver } from '@hookform/resolvers/yup';
import { usePhoneNumber } from '@/scripts/hooks/usePhoneNumber'
import { ArrowLeft } from 'lucide-react'
import { useRouter } from 'next/navigation'
import { ToastContainer, toast } from 'react-toastify';
import { useRegisterMutation } from '@/scripts/api/auth/authApi'

interface Form {
    email: string
    password: string
    // phone: string
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
        string()
        .required('Введите пароль'),
    
    // phone: 
    //     string()
    //     .min(18, "Введите корректный номер")
    //     .required('Введите телефон'),
    name: 
        string()
        .required('Введите свое ФИО'),
})

export const SectionRegister = ({
    state,
    setState,
}: Props) => {
    const [register] = useRegisterMutation()
    const router = useRouter()
    
    const { 
        control,
        setValue,
        handleSubmit,
        watch,
        clearErrors,
        getValues,
        reset,
        formState: {errors}
     } = useForm<Form>({ 
        defaultValues: {
            email: "",
            password: "",
            // phone: "",
            name: ""
        },
        resolver: yupResolver(schema)
    })

    const onSubmit = async (form: any) => {
        const {data, error} = await register(form)

        if (data) {
            toast('Вы прошли регистрацию !!!', {
                position: 'top-right',
                type: "success"
            })
        }
        else {
            toast('Пользователь с таким email есть', {
                position: 'top-right',
                type: "error",
                
            })
        }

        reset()
    }


    useEffect(() => {
        clearErrors();
    }, [
        watch('email'), 
        watch('password'),
        // watch('phone'), 
        watch('name')
    ]); 

    const funcOnClickState = () => {
        setState('login')
        clearErrors()
    }
       

    return (
        <div className={clsx(
            styles.auth_container,
            state === 'register' ? styles.auth_container__active : ""
        )}>
            <ToastContainer />
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
                    {/* <CustomInput<Form> 
                        control={control} 
                        name="phone" 
                        type='text'
                        classNameBox='py-3'
                        classNameInput='text-[14px]'
                        label='Телефон'
                        onChange={(e) => {
                            const phone = usePhoneNumber(e)
                            setValue('phone', phone)
                            console.log(phone)
                        }}
                        error={errors.phone?.message}
                    /> */}
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
                <div onClick={() => router.push('/')} className="flex justify-center items-center gap-1 mt-5 text-[14px] text-[#69836f] font-bold cursor-pointer">
                    <ArrowLeft size={17} strokeWidth={3} /> Вернуться назад
                </div>
            </div>
        </div>
    )
}