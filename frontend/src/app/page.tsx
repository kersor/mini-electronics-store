"use client"

import { Container } from "@/components/shared/container/Container";
import { CustomSelect } from "@/components/ui/customSelect/CustomSelect";
import { IFilters } from "@/types/filters";
import { ISelect } from "@/types/select";
import { FormControl, InputLabel, MenuItem, Select, SelectChangeEvent } from "@mui/material";
import Image from "next/image";
import { useState } from "react";
import { GroupBase } from "react-select";

const list_category = [
  {
    id: "123",
    title: "Смартфоны"
  }, 
  {
    id: "124",
    title: "Фотооаппараты"
  },
  {
    id: "125",
    title: "Фотооаппараты"
  },
  {
    id: "126",
    title: "Фотооаппараты"
  },
  {
    id: "127",
    title: "Фотооаппараты"
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




export default function Home() {
  const [category, setCategory] = useState("")

  const handleChange = (event: SelectChangeEvent) => {
    setCategory(event.target.value as string);
  };

  return (
    <Container>
      <div className="w-full h-[300px] bg-[#9bb8a1] rounded-[5px] mt-5 relative">
        <div className="absolute text-[20px] top-[50%] left-[50%] -translate-y-[50%] -translate-x-[50%] font-bold uppercase text-[#FFF] tracking-widest">Контент</div>
      </div>
      <div className="mt-10" />
      <div className="flex justify-between">
        <div>
          <CustomSelect 
            placeholder={"Категория"}
            options={list_category} 
            value={category} 
            handleChange={(value: string) => setCategory(value)}
            minWidth={130}
          />
          <CustomSelect 
            placeholder={"Цвет"}
            options={list_color} 
            value={category} 
            handleChange={(value: string) => setCategory(value)}
            minWidth={90}
          />
          <CustomSelect 
            placeholder={"Материал"}
            options={list_material} 
            value={category} 
            handleChange={(value: string) => setCategory(value)}
            minWidth={125}
          />
        </div>
          <CustomSelect 
              type={"outlined"}
              placeholder={"Категория"}
              options={list_category} 
              value={category} 
              handleChange={(value: string) => setCategory(value)}
              minWidth={130}
          />
      </div>
    </Container>
  );
}