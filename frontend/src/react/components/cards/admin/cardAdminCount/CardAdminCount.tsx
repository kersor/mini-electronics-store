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
import { useMemo, useState } from "react"
import { useCreateProductMutation, useDeleteProductMutation, useUpdateProductMutation } from "@/scripts/api/product/productApi"
import { useUploadPhotoMutation } from "@/scripts/api/upload/uploadApi"

interface Props {
    index: number
    item: any
}

export const CardAdminCount = ({
    index,
    item,
}: Props) => {
    const {
        control,
        getValues,
        watch,
        setValue,
        handleSubmit,
        register
    } = useForm({
        defaultValues: {
            name: item.title || "",
            description: item.description || "",
            price: item.price || "",
            categoryId: item.categoryId || "",
            photos: []
        }
    })


    const [updateProduct] = useUpdateProductMutation()
    const [sendPhoto] = useUploadPhotoMutation()   
    const [deleteProduct] = useDeleteProductMutation() 
    
    const [opened, { open, close }] = useDisclosure(false);

    return (
        <div className="flex items-center justify-between w-full p-3 border border-[#648660] rounded-md font-bold" key={item.id}>
            <div className="flex items-center gap-5">
                {++index}. 
                   <div className="relative w-[90px] h-[90px] bg-slate-200 rounded-lg">
                     <img className="absolute top-[50%] left-[50%] -translate-x-[50%] -translate-y-[50%] w-[90%] h-[90%] object-cover" src={`${BACKEND_DOMAIN}/uploads/${item.photos[0].photo}`} alt="" />
                   </div>
                {item.title}
            </div>
            
            <div>
                <Input 
                    {...register("name")}
                    placeholder="Название" 
                    classNames={{ input: styles.input, wrapper: styles.wrapper }}
                />
            </div>

            <Modal opened={opened} onClose={close} title="Редактировать" size="400px">

            </Modal>
        </div>
    )
}