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

export default function PageCategoryAdmin () {
    const {data} = useGetAllCategoriesQuery()
    const [createCategories] = useCreateCategoriesMutation()


    const {
        control,
        getValues
    } = useForm({
        defaultValues: {
            title: ""
        }
    })

    const funcCreateCategory = async () => {
        const title = getValues('title')
        const slug = slugify('Пример категории')

        const payload = {
            title: title,
            fullTitle: slug
        }

        await createCategories(payload)
    }


    return (
        <div className=''>

            <div className='flex gap-2 items-center max-w-[450px]'>
                <CustomInput control={control} name="title" placeholder='Название категории' />
                <CustomButton title='Создать' onClick={funcCreateCategory} />
            </div>
            <div className='flex flex-col gap-2 mt-5 text-[#648660]'>
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