"use client"

import { Container } from "@/components/shared/container/Container";
import { IFilters } from "@/types/filters";
import { ISelect } from "@/types/select";
import Image from "next/image";
import { useState } from "react";
import { GroupBase } from "react-select";

const testSelect = [
  {
    id: "123",
    name: "Смартфоны"
  }, 
  {
    id: "124",
    name: "Фотооаппараты"
  },
  {
    id: "125",
    name: "Фотооаппараты"
  },
  {
    id: "126",
    name: "Фотооаппараты"
  },
  {
    id: "127",
    name: "Фотооаппараты"
  }
]



export default function Home() {
  const [filters, setFilters] = useState<IFilters>({
    type: {
      value: "",
      label: ""
    }
  })

  const funcHanlderSetFilters = (data: ISelect) => {
    setFilters(prev => ({...prev, type: data}))
  }

  return (
    <Container>
      <div className="w-full h-[300px] bg-[#9bb8a1] rounded-[5px] mt-5 relative">
        <div className="absolute text-[20px] top-[50%] left-[50%] -translate-y-[50%] -translate-x-[50%] font-bold uppercase text-[#FFF] tracking-widest">Контент</div>
      </div>
    </Container>
  );
}