"use client"

import { Container } from "@/components/shared/container/Container";
import { CustomSelect } from "@/components/ui/customSelect/CustomSelect";
import { IFilters } from "@/types/filters";
import { ISelect } from "@/types/select";
import { FormControl, InputLabel, MenuItem, Select, SelectChangeEvent } from "@mui/material";
import Image from "next/image";
import { useState } from "react";
import { GroupBase } from "react-select";

const testSelect = [
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
      <CustomSelect 
        placeholder={"Категория"}
        options={testSelect} 
        value={category} 
        handleChange={(value: string) => setCategory(value)}
      />
    </Container>
  );
}