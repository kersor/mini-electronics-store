import { SelectListCheckbox } from "@/react/components/containers/select/SelectListCheckbox";
import { SelectListRadioButton } from "@/react/components/containers/select/SelectListRadioButton";
import { SelectRange } from "@/react/components/containers/select/SelectRange";
import { CustomCheckbox } from "@/react/components/inputs/customCheckbox/CustomCheckbox";
import { CustomRadioButton } from "@/react/components/inputs/customRadioButton/CustomRadioButton";
import { CustomSelect } from "@/react/components/inputs/customSelect/customSelect";
import { ISelect } from "@/scripts/types/select";
import Image from "next/image";
import { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { array, object, string } from "yup";
import { IFormFilters } from "@/scripts/types/filters";
import { useFilters } from "@/store/filters.zustand";


export const SectionFilters = () => {
    const {checkedFilters, filters, actions} = useFilters(state => state)
    const {addFilter, addFilterS} = actions
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
      }) 

    const onSubmit = async (data: any) => {
        console.log(data)
    }
    
    
    
    const funcHandleSubmit = () => {
        const sortTitle = filters.sort.find(sort => +sort.id === +getValues('sort'))

        if (+getValues('price_min') > +getValues('price_max')) {
            addFilterS({
                sort: {id: getValues('sort'), title: sortTitle?.title},
                category: getValues('category'),
                material: getValues('material'),
                color: getValues('color'),
                price_max: getValues('price_min'),
                price_min: getValues('price_max')
            })


            const min = getValues('price_min')
            const max = getValues('price_max')
        
            setValue("price_min", max)
            setValue("price_max", min)

            
        } else {
            addFilterS({
                sort: {id: getValues('sort'), title: sortTitle?.title},
                category: getValues('category'),
                material: getValues('material'),
                color: getValues('color'),
                price_max: getValues('price_max'),
                price_min: getValues('price_min')
            })
        }

        handleSubmit(onSubmit)()
    };


    // Как только установили Дефолтное значение сорировки в Zusatnd, сразу в hook-form
    useEffect(() => {
        if (!getValues('sort')) setValue("sort", checkedFilters.sort.id)
    }, [checkedFilters.sort])


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