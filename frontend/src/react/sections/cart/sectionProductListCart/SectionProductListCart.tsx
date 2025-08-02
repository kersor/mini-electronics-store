"use client"

import { Flex } from '@mantine/core'
import styles from './styles.module.css'
import { Minus, Plus } from 'lucide-react'
import { CustomInput } from '@/react/components/inputs/customInput/CustomInput'
import { useForm } from 'react-hook-form'
import { usePrice } from '@/scripts/hooks/usePrice'

export const SectionProductListCart = () => {
    const {
        control,
        setValue,
        getValues
    } = useForm({
        defaultValues: {
            count: 1
        }
    })

    const funcPlus = () => {
        const count = getValues("count")
        setValue("count", count + 1)
    }

    const funcMinus = () => {
        const count = getValues("count")
        if(count === 1) return 
        setValue("count", count - 1)
    }

    return (
        <div className={styles.wrapper}>
            <div className={styles.product_list}>
                <div className={styles.product}>
                    <Flex gap="20px">
                        <img className={styles.product_photo} src="https://i.ytimg.com/vi/vPPx29Co0vk/maxresdefault.jpg" alt="" />
                        <div className='max-w-[300px]'>
                            <div className={styles.product_name}>
                                Lorem ipsum, dolor sit amet consectetur adipisicing elit. Aliquam ab distinctio, maiores iure nihil numquam. Accusantium harum ducimus sed quidem unde porro similique quis odit voluptatibus. Voluptas maiores consequuntur officiis.
                            </div>
                        </div>
                    </Flex>
                    <Flex gap="40px">
                        <div className={styles.product_price}>{usePrice("1333")} ₽</div>
                        <div className={styles.product_count}>
                            <div onClick={funcMinus} className={styles.count_btn}><Minus color='#575558' /> </div>
                            <CustomInput classNameWrapper='w-[40px]' control={control} name='count' />
                            <div onClick={funcPlus} className={styles.count_btn}><Plus color='#575558' /> </div>
                        </div>
                    </Flex>
                </div>

            </div>
        </div>
    )
}