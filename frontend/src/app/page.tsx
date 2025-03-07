"use client"

import { Container } from "@/components/shared/container/Container";

import { SelectListCheckbox } from "@/components/shared/select/SelectListCheckbox";
import { SelectListRadioButton } from "@/components/shared/select/SelectListRadioButton";
import { SelectRange } from "@/components/shared/select/SelectRange";
import { CustomCheckbox } from "@/components/ui/customCheckbox/CustomCheckbox";
import { CustomRadioButton } from "@/components/ui/customRadioButton/CustomRadioButton";
import { CustomSelect } from "@/components/ui/customSelect/customSelect";
import { Product } from "@/components/shared/product/Product";

import { IFilters } from "@/types/filters";
import { ISelect } from "@/types/select";
import Image from "next/image";
import { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { array, object, string } from "yup";

interface Form {
  category: string[]
  price_min: string
  price_max: string
  color: string[]
  material: string[]
  sort: string
}

const list_category = [
  {
    id: "1",
    title: "Смартфоны"
  }, 
  {
    id: "2",
    title: "Фотооаппараты"
  },
  {
    id: "3",
    title: "Фотооаппараты"
  },
  {
    id: "4",
    title: "Фотооаппараты"
  },
  {
    id: "5",
    title: "Фотооаппараты"
  }
]

const sort = [
  {
    id: "123",
    title: "По популярности",
  },
  {
    id: "124",
    title: "По рейтингу",
  },
  {
    id: "125",
    title: "Сначала дешевле",
  },
  {
    id: "126",
    title: "Сначала дороже",
  }
]

const list_color = [
  {
    id: "123",
    title: "Зеленый",
    hex: "#75ba75"
  }, 
  {
    id: "124",
    title: "Красный",
    hex: "#e6363a"
  },
  {
    id: "125",
    title: "Бежевый",
    hex: "#dfc0ab"
  },
]

const list_material = [
  {
    id: "123",
    title: "Металл",
  }, 
  {
    id: "124",
    title: "Пластмасса",
  },
  {
    id: "125",
    title: "Дерево",
  },
]

const schema = object({
  category: array().required(),
  price_min: string().required("Введите минимальную цену"),
  price_max: string().required("Введите максимальную цену"),
  color: array().of(string().required("Выберите цвет")).required(),
  material: array().of(string().required("Выберите материал")).required(),
  sort: string().required("Выберите сортировку")
});


export default function Home() {
  const {
    control,
    getValues,
    watch,
    setValue,
    handleSubmit,
    formState: {errors}
  } = useForm<Form>({
    defaultValues: {
      category: [],
      price_min: "",
      price_max: "",
      color: [],
      material: [],
      sort: sort[0].id
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
    
    console.log(data)
  }



  const funcHandleSubmit = handleSubmit(onSubmit);



  return (
    <Container>
      <div className="w-full h-[300px] bg-[#9bb8a1] rounded-[5px] mt-5 relative">
        <div className="absolute text-[20px] top-[50%] left-[50%] -translate-y-[50%] -translate-x-[50%] font-bold uppercase text-[#FFF] tracking-widest">Контент</div>
      </div>
      <div className="mt-10" />

      <div className="flex justify-between">
        <div className="flex gap-5">
          <CustomSelect placeholder="Категория" >
            <SelectListCheckbox control={control} name="category" funcHandleSubmit={funcHandleSubmit} data={list_category}/>
          </CustomSelect>
          <CustomSelect placeholder="Цена">
            <SelectRange control={control} name_min="price_min" name_max="price_max" funcHandleSubmit={funcHandleSubmit} value_min={getValues("price_min")} value_max={getValues("price_max")} />
          </CustomSelect>
          <CustomSelect placeholder="Цвет" >
            <SelectListCheckbox control={control} name="color" funcHandleSubmit={funcHandleSubmit} data={list_color}/>
          </CustomSelect>
          <CustomSelect placeholder="Материал" >
            <SelectListCheckbox control={control} name="material" funcHandleSubmit={funcHandleSubmit} data={list_material}/>
          </CustomSelect>
        </div>
        <CustomSelect type={"outline"} placeholder="Сортировать">
            <SelectListRadioButton control={control} name="sort" data={sort} funcHandleSubmit={funcHandleSubmit}/>
        </CustomSelect>
      </div>
      <div className="text-[21px] font-bold mt-8 mb-4">Наушники для вас!</div>
      <div className="grid grid-cols-4 gap-5">
        <Product favorite />
        <Product  />
        <Product  />
        <Product  />
        <Product  />
        <Product  />
        <Product  />
      </div>
    </Container>
  );
}