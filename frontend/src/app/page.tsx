"use client"

import { Container } from "@/components/shared/container/Container";
import { SelectListCheckbox } from "@/components/shared/select/SelectListCheckbox";
import { SelectListRadioButton } from "@/components/shared/select/SelectListRadioButton";
import { SelectRange } from "@/components/shared/select/SelectRange";
import { CustomCheckbox } from "@/components/ui/customCheckbox/CustomCheckbox";
import { CustomRadioButton } from "@/components/ui/customRadioButton/CustomRadioButton";
import { CustomSelect } from "@/components/ui/customSelect/customSelect";
import { IFilters } from "@/types/filters";
import { ISelect } from "@/types/select";
import Image from "next/image";
import { useState } from "react";

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

const price = [
]

// const list_color = [
//   {
//     id: "123",
//     title: "Зеленый",
//     hex: "#75ba75"
//   }, 
//   {
//     id: "124",
//     title: "Красный",
//     hex: "#e6363a"
//   },
//   {
//     id: "125",
//     title: "Бежевый",
//     hex: "#dfc0ab"
//   },
// ]

// const list_material = [
//   {
//     id: "123",
//     title: "Металл",
//   }, 
//   {
//     id: "124",
//     title: "Пластмасса",
//   },
//   {
//     id: "125",
//     title: "Дерево",
//   },
// ]




export default function Home() {
  return (
    <Container>
      <div className="w-full h-[300px] bg-[#9bb8a1] rounded-[5px] mt-5 relative">
        <div className="absolute text-[20px] top-[50%] left-[50%] -translate-y-[50%] -translate-x-[50%] font-bold uppercase text-[#FFF] tracking-widest">Контент</div>
      </div>
      <div className="mt-10" />
      <div className="flex justify-between">
        <div className="flex gap-5">
          <CustomSelect placeholder="Категория" >
            <SelectListCheckbox data={list_category}/>
          </CustomSelect>


          <CustomSelect placeholder="Цена">
            <SelectRange />
          </CustomSelect>
        </div>
        <CustomSelect type={"outline"} placeholder="Категория">
            <SelectListCheckbox data={list_category}/>
        </CustomSelect>
      </div>
    </Container>
  );
}