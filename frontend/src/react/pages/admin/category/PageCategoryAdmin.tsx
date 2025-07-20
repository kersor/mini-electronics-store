"use client"

import { CustomInput } from '@/react/components/inputs/customInput/CustomInput'
import styles from './styles.module.css'
import { slugify } from 'transliteration'
import { useForm } from 'react-hook-form'
import { CustomButton } from '@/react/components/ui/customButton/CustomButton'
import { useCreateCategoriesMutation, useDeleteCategoriesMutation, useGetAllCategoriesQuery, useUpdateCategoriesMutation } from '@/scripts/api/categories/categoriesApi'
import { SectionAdminButtonsCRUD } from '@/react/sections/common/sectionAdminButtonsCRUD/SectionAdminButtonsCRUD'
import { Modal } from '@mantine/core'
import { useDisclosure } from '@mantine/hooks'
import { CardAdminCategory } from '@/react/components/cards/admin/cardAdminCategory/CardAdminCategory'
import * as yup from 'yup'
import { yupResolver } from '@hookform/resolvers/yup'

const schema = yup.object({
    title: yup
        .string()
        .required("Поле название обязателен")
})

interface Form {
    title: string
}

export default function PageCategoryAdmin () {
    const {data} = useGetAllCategoriesQuery()
    const [createCategories] = useCreateCategoriesMutation()


    const {
        control,
        getValues,
        handleSubmit,
        reset,
        formState: {errors}
    } = useForm<Form>({
        defaultValues: {
            title: ""
        },
        resolver: yupResolver(schema)
    })

    const onSubmit = async (data: any) => {
        const title = getValues('title')
        const slug = slugify('Пример категории')

        const payload = {
            title: title,
            fullTitle: slug
        }

        await createCategories(payload)
        reset()
    }
    return (
        <div className='h-[calc(100%-60px)]'>
            <div className='flex gap-2 items-center max-w-[450px]'>
                <CustomInput control={control} name="title" placeholder='Название категории' error={errors.title?.message} />
                <CustomButton title='Создать' onClick={handleSubmit(onSubmit)} />
            </div>
            <div className='flex flex-col gap-2 mt-5 text-[#648660] h-full overflow-auto'>
                {
                    data && data.map((item: any, index: number) => (
                        <CardAdminCategory 
                            key={index}
                            index={index}
                            item={item}
                        />
                    ))
                }
            </div>
        </div>
    )
}