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
    categories: any[]
}

export const CardAdminProduct = ({
    index,
    item,
    categories
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

    const category = useMemo(() => {
        return categories.find((cat) => {
            if (cat.id === item.categoryId) {
                return cat
            }
        })
    }, [item, categories])

    console.log(category)

    const onSubmit = async (data: any) => {
        const {photos: phts, ...dta} = data
        const payload: any = {
            ...dta,
            photos: []
        }


        if (!!phts.length) {
            let reqPhotos = phts.map(async (photo: File) => {
                const formData = new FormData()
                formData.append("photo", photo)

                return await sendPhoto(formData)
            })

            const req = await Promise.all(reqPhotos)
                .then(res => {
                    const urls: string[] = []
                    res.map((img) => urls.push(img.data.url))
                    
                    return urls
                })
                .catch((err) => console.log(err))
            const res = await req
            payload.photos = res

            await updateProduct({id: item.id, payload})
            close()
            return
        }

        await updateProduct({id: item.id, payload})
        close()
    }

    const funcDeleteProduct = async () => {
        await deleteProduct(item.id)
    }
    

    return (
        <div className="flex items-center justify-between w-full p-3 border border-[#648660] rounded-md font-bold" key={item.id}>
            <div className="flex items-center gap-5">
                {++index}. 
                   <div className="relative w-[90px] h-[90px] bg-slate-200 rounded-lg">
                     <img className="absolute top-[50%] left-[50%] -translate-x-[50%] -translate-y-[50%] w-[90%] h-[90%] object-cover" src={`${BACKEND_DOMAIN}/uploads/${item.photos[0].photo}`} alt="" />
                   </div>
                {category.title}
                {item.title}
            </div>
            <SectionAdminButtonsCRUD data={item} funcOnDelete={funcDeleteProduct} funcOnEdit={() => open()}/>

            <Modal opened={opened} onClose={close} title="Редактировать" size="400px">
                <div className='flex flex-col gap-2'>
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
                                data={categories.map(role => ({
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
                                    <SimpleGrid cols={3}>
                                        {files && files.length > 0 && previews}
                                    </SimpleGrid>
                                </div>
                            </div>
                        )}
                    />
                    <CustomButton title="Обновить" onClick={handleSubmit(onSubmit)}/>
                </div>
            </Modal>
        </div>
    )
}