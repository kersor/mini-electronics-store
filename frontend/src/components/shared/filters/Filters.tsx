import { SelectListCheckbox } from "@/components/shared/select/SelectListCheckbox";
import { SelectListRadioButton } from "@/components/shared/select/SelectListRadioButton";
import { SelectRange } from "@/components/shared/select/SelectRange";
import { CustomCheckbox } from "@/components/ui/customCheckbox/CustomCheckbox";
import { CustomRadioButton } from "@/components/ui/customRadioButton/CustomRadioButton";
import { CustomSelect } from "@/components/ui/customSelect/customSelect";
import { ISelect } from "@/types/select";
import Image from "next/image";
import { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { array, object, string } from "yup";
import { IFormFilters } from "@/types/filters";
import { useFilters } from "@/zustand/filters.zustand";

const schema = object({
    category: array().required(),
    price_min: string().required("Введите минимальную цену"),
    price_max: string().required("Введите максимальную цену"),
    color: array().of(string().required("Выберите цвет")).required(),
    material: array().of(string().required("Выберите материал")).required(),
    sort: string().required("Выберите сортировку")
  });
  

export const Filters = () => {
    const {checkedFilters, filters, actions} = useFilters(state => state)
    const {addFilter} = actions
    const {
        control,
        getValues,
        watch,
        setValue,
        handleSubmit,
        formState: {errors}
      } = useForm<IFormFilters>({
        defaultValues: {
          category: checkedFilters.category ?? [],
          price_min: checkedFilters.price_min ?? "",
          price_max: checkedFilters.price_max ?? "",
          color: checkedFilters.color ?? [],
          material: checkedFilters.material ?? [],
          sort: checkedFilters.sort.id ?? ""
        },
        // resolver: yupResolver(schema)
      }) 

    const onSubmit = async (data: any) => {
        if (+getValues('price_min') > +getValues('price_max')) {
            const min = getValues('price_min')
            const max = getValues('price_max')
        
            setValue("price_min", max)
            setValue("price_max", min)
        }
        
        console.log(getValues('sort'))
        console.log(data)
        console.log(getValues('sort'))
    }
    
    
    
    const funcHandleSubmit = handleSubmit(onSubmit);

    useEffect(() => {
        setValue("sort", checkedFilters.sort.id)
    }, [checkedFilters])


    useEffect(() => {
        const sortTitle = filters.sort.find(sort => +sort.id === +getValues('sort'))
        addFilter({type: "sort", data: {id: getValues('sort'), title: sortTitle?.title}})

        // console.log(getValues('sort'))
    }, [watch('sort'), filters, addFilter])



    return (
        <div className="flex justify-between">
            <div className="flex gap-5">
                <CustomSelect 
                    placeholder="Категория" 
                    value={!!checkedFilters.category.length ? `${checkedFilters.category.length}` : ""}
                >
                    <SelectListCheckbox 
                        getValues={getValues('category')} 
                        cleanValue={() => {
                            setValue('category', [])
                            addFilter({type: "category", data: []})
                        }} 
                        control={control} 
                        name="category" 
                        funcHandleSubmit={() => {
                            addFilter({type: "category", data: getValues('category')})
                            funcHandleSubmit()
                        }} 
                        data={filters.category}
                    />
                </CustomSelect>
                <CustomSelect 
                    placeholder="Цена"
                    value={!!checkedFilters.price_min.length || !!checkedFilters.price_max.length ? `от ${checkedFilters.price_min} до ${checkedFilters.price_max}` : ""}
                >
                    <SelectRange
                        control={control}
                        name_min="price_min"
                        name_max="price_max"
                        cleanValue={() => {
                            setValue("price_max", "")
                            setValue("price_min", "")
                            addFilter({type: "price_max", data: ''})
                            addFilter({type: "price_min", data: ''})
                        }} 
                        funcHandleSubmit={() => {
                            addFilter({type: "price_max", data: getValues('price_max')})
                            addFilter({type: "price_min", data: getValues('price_min')})
                            funcHandleSubmit()
                        }}
                        value_min={getValues("price_min")}
                        value_max={getValues("price_max")}
                    />
                </CustomSelect>
                <CustomSelect 
                    value={!!checkedFilters.color.length ? `${checkedFilters.color.length}` : ""}
                    placeholder="Цвет" 
                >
                    <SelectListCheckbox
                        getValues={getValues('color')} 
                        cleanValue={() => {
                            setValue('color', [])
                            addFilter({type: "color", data: []})
                        }} 
                        control={control}
                        name="color"
                        funcHandleSubmit={() => {
                            addFilter({type: "color", data: getValues('color')})
                            funcHandleSubmit()
                        }} 
                        data={filters.color}
                    />
                </CustomSelect>

                <CustomSelect 
                    value={!!checkedFilters.material.length ? `${checkedFilters.material.length}` : ""}
                    placeholder="Материал" 
                >
                    <SelectListCheckbox
                        getValues={getValues('material')} 
                        cleanValue={() => {
                            setValue('material', [])
                            addFilter({type: "material", data: []})
                        }} 
                        control={control}
                        name="material"
                        funcHandleSubmit={() => {
                            addFilter({type: "material", data: getValues('material')})
                            funcHandleSubmit()
                        }} 
                        data={filters.material}
                    />
                </CustomSelect>

            </div>
            <CustomSelect 
                value={!!checkedFilters.sort ? `${checkedFilters.sort.title}` : ""}
                type={"outline"} 
                placeholder="Сортировать"
            >
                <SelectListRadioButton
                    getValues={getValues('sort')} 
                    control={control}
                    name="sort"
                    data={filters.sort}
                    funcHandleSubmit={() => {
                        funcHandleSubmit()
                    }} 
                />
            </CustomSelect>
        </div>
    )
}