"use client"

import { CustomFileUpload } from "@/react/components/inputs/customFileUpload/CustomFileUpload";
import { CustomInput } from "@/react/components/inputs/customInput/CustomInput";
import { CustomRadioButton } from "@/react/components/inputs/customRadioButton/CustomRadioButton";
import { CustomSelect } from "@/react/components/inputs/customSelect/customSelect";
import { CustomButton } from "@/react/components/ui/customButton/CustomButton";
import { useGetAllCategoriesQuery } from "@/scripts/api/categories/categoriesApi";
import { useCreateProductMutation } from "@/scripts/api/product/productApi";
import { CloseButton, FileInput, Image, Input, Select, SimpleGrid, Text, } from "@mantine/core";
import { Dropzone, DropzoneProps, FileWithPath, IMAGE_MIME_TYPE } from '@mantine/dropzone';
import { useEffect, useState } from "react";
import { Controller, useForm } from "react-hook-form";

import styles from './styles.module.css'


interface Form {
    name: string,
    description: string,
    price: string,
    categoryId: string,
    photos: File[]
}

export default function PageProduct ({
    DataCategories,
}: {
    DataCategories: any[]
}) {
    const [files, setFiles] = useState<FileWithPath[]>([]);

    const previews = files.map((file, index) => {
        const imageUrl = URL.createObjectURL(file);
        return (
            <div key={imageUrl} className="relative w-[110px] h-[110px]">
                <CloseButton 
                onClick={() => {
                    setFiles(prev => prev.filter((fl, idx: number) => idx !== index))

                    const newFiles = files.filter((_, idx) => idx !== index);
                    setValue("photos", newFiles as any, { shouldValidate: true });
                }}  
                style={{position: "absolute", top: "5px", right: "5px", background: "#FFF"}} />
                <img className="object-cover w-[110px] h-[110px] rounded-[8px]" src={imageUrl} alt={imageUrl} />
            </div>
        );
    });
    const [createProduct] = useCreateProductMutation()     
    console.log(files)
    const {
        control,
        getValues,
        watch,
        setValue,
        handleSubmit,
        register
    } = useForm<Form>({
        defaultValues: {
            name: "",
            description: "",
            price: "",
            categoryId: "",
            photos: []
        }
    })


    const onSubmit = async (data: Form) => {
        const {photos, ...dta} = data
        // const res = await createProduct(dta)
        console.log(data)
    }
    

    return (
        <div>
            <div className="flex flex-col gap-2 items-start max-w-[500px] w-full">
                <Input 
                    {...register("name")}
                    placeholder="Название" 
                    classNames={{ input: styles.input, wrapper: styles.wrapper }}
                 />
                <Input 
                    {...register("description")}
                    placeholder="Описание" 
                    classNames={{ input: styles.input, wrapper: styles.wrapper }}
                />
                <Input 
                    {...register("price")}
                    placeholder="Цена" 
                    classNames={{ input: styles.input, wrapper: styles.wrapper }}
                />
    
                <Controller 
                    control={control}
                    name="categoryId"
                    render={({field}) => (
                        <Select
                            placeholder="Выберите категорию"
                            label="Категория"
                            data={DataCategories.map(role => ({
                                value: String(role.id), // или просто role.id, если value должен быть числом
                                label: role.title
                            }))}
                            value={field.value}
                            onChange={(val: any) => field.onChange(val)}
                        />
                    )}
                />
                
                <Controller
                    control={control}
                    name="photos"
                    render={({ field }) => (
                        <div className="w-full">
                            <Dropzone
                                accept={IMAGE_MIME_TYPE}
                                onDrop={(acceptedFiles) => {
                                    // Можно добавить к уже выбранным или заменить, зависит от желаемого поведения
                                    setFiles(prev => acceptedFiles)
                                    field.onChange(acceptedFiles);
                                }}
                            >
                                <div className="text-center">Вставьте изображение</div>
                            </Dropzone>
                            <div className="pt-5">
                                <SimpleGrid cols={4}>
                                    {files && files.length > 0 && previews}
                                </SimpleGrid>
                            </div>
                        </div>
                    )}
                />
            <CustomButton title="Создать" onClick={handleSubmit(onSubmit)}/>
            </div>
        </div>
    )
}