import { CustomInput } from "@/react/components/inputs/customInput/CustomInput"
import { CustomButton } from "@/react/components/ui/customButton/CustomButton"
import { SectionAdminButtonsCRUD } from "@/react/sections/common/sectionAdminButtonsCRUD/SectionAdminButtonsCRUD"
import { useDeleteCategoriesMutation, useUpdateCategoriesMutation } from "@/scripts/api/categories/categoriesApi"
import { BACKEND_DOMAIN } from "@/scripts/constants/back"
import { Modal } from "@mantine/core"
import { useDisclosure } from "@mantine/hooks"
import { Controller, useForm } from "react-hook-form"
import { slugify } from "transliteration"
import { CloseButton, FileInput, Image, Input, Select, SimpleGrid, Text, } from "@mantine/core";
import styles from './styles.module.css' 
import { Dropzone, FileWithPath, IMAGE_MIME_TYPE } from "@mantine/dropzone"
import { useEffect, useMemo, useState } from "react"
import { useCreateProductMutation, useDeleteProductMutation, useUpdateCountMutation, useUpdateProductMutation } from "@/scripts/api/product/productApi"
import { useUploadPhotoMutation } from "@/scripts/api/upload/uploadApi"

interface Props {
    index: number
    item: any
}

interface Form {
    name: string
    description: string
    price: string
    categoryId: string
    photos: string[]
    count: number
}

export const CardAdminCount = ({
    index,
    item,
}: Props) => {
    const [disabled, setDisabled] = useState(true)

    const count = useMemo(() => {
        return item.count.count
    }, [item])



    const {
        control,
        getValues,
        watch,
        setValue,
        handleSubmit,
        register
    } = useForm<Form>({
        defaultValues: {
            name: item.title || "",
            description: item.description || "",
            price: item.price || "",
            categoryId: item.categoryId || "",
            count: item.count.count || 0
        }
    })

    useEffect(() => {
        if (+count === +watch('count')) setDisabled(prev => true)
        else setDisabled(prev => false)
    }, [watch('count'), item])



    const [updateCountProduct] = useUpdateCountMutation()

    const onSubmit = async (data: any) => {
        if (+data.count === +count) return
        const {photos, ...rest} = data
        const payload = {
            count: +data.count,
        }
        await updateCountProduct({id: item.id, payload})
    }

    return (
        <div className="flex items-center justify-between w-full p-3 border border-[#648660] rounded-md font-bold" key={item.id}>
            <div className="flex items-center gap-5">
                {++index}. 
                   <div className="relative w-[90px] h-[90px] bg-slate-200 rounded-lg">
                     <img className="absolute top-[50%] left-[50%] -translate-x-[50%] -translate-y-[50%] w-[90%] h-[90%] object-cover" src={`${BACKEND_DOMAIN}/uploads/${item.photos[0].photo}`} alt="" />
                   </div>
                {item.title}
            </div>
            
            <div className="flex gap-2 items-center">
                <Input 
                    {...register("count")}
                    placeholder="Количество" 
                    classNames={{ input: styles.input, wrapper: styles.wrapper }}
                    type="number"
                />
                <CustomButton disabled={disabled} title="Обновить" onClick={handleSubmit(onSubmit)} />
            </div>
        </div>
    )
}