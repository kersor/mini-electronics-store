"use client"

import { CustomFileUpload } from "@/react/components/inputs/customFileUpload/CustomFileUpload";
import { CustomInput } from "@/react/components/inputs/customInput/CustomInput";
import { CustomRadioButton } from "@/react/components/inputs/customRadioButton/CustomRadioButton";
import { CustomSelect } from "@/react/components/inputs/customSelect/customSelect";
import { CustomButton } from "@/react/components/ui/customButton/CustomButton";
import { useGetAllCategoriesQuery } from "@/scripts/api/categories/categoriesApi";
import { FileInput } from "@mantine/core";
import { useEffect, useState } from "react";
import { useForm } from "react-hook-form";

interface Form {
    name: string,
    description: string,
    price: string,
    categoryId: string,
    photos: File[]
}

export default function PageProduct ({
    categories
}: {
    categories: any[]
}) {
    const [checkboxValues, setCheckboxValues] = useState<string>("")
    const [chooseCategory, setCategory] = useState<any>({})
     

    const {
        control,
        getValues,
        watch,
        setValue
    } = useForm<Form>({
        defaultValues: {
            name: "",
            description: "",
            price: "",
            categoryId: "",
            photos: []
        }
    })

    useEffect(() => {
        console.log(getValues())
    }, [watch()])

    return (
        <div>
            <div className="flex flex-col gap-2 items-start max-w-[350px] w-full">
                <CustomInput control={control} name="name" classNameWrapper="w-full" placeholder="Название"/>
                <CustomInput control={control} name="description" classNameWrapper="w-full" placeholder="Описание"/>
                <CustomInput control={control} name="price" type="number" classNameWrapper="w-full" placeholder="Цена"/>
                <CustomSelect value={chooseCategory.title}  placeholder="Категория">
                    {
                        categories && categories.map((item: any, index: number) => (
                            <CustomRadioButton
                                active={index === 0}
                                name={"categoryId"}
                                item={item}
                                control={control}
                                vsbSircle={false}
                                checked={checkboxValues}
                                key={item.id} 
                                onChange={(val: string, field) => {
                                    setCheckboxValues(prev => val)
                                    
                                    setCategory((prev: any) => (
                                        categories.find((item: any) => +item.id === +val)
                                    ))
                                }} 
                            />
                        ))
                    }
                </CustomSelect>
                <CustomFileUpload control={control} name="photos"/>
                <CustomButton title="Создать" onClick={() => {}}/>
            </div>
        </div>
    )
}