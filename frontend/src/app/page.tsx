"use client"

import { Container } from "@/components/shared/container/Container";
import { Product } from "@/components/shared/product/Product";
import { IFilters } from "@/types/filters";
import { ISelect } from "@/types/select";
import Image from "next/image";
import { useState } from "react";

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
  return (
    <Container>
      <div className="w-full h-[300px] bg-[#9bb8a1] rounded-[5px] mt-5 relative">
        <div className="absolute text-[20px] top-[50%] left-[50%] -translate-y-[50%] -translate-x-[50%] font-bold uppercase text-[#FFF] tracking-widest">Контент</div>
      </div>
      <div className="mt-10" />
      <div className="flex justify-between"></div>
      <div className="grid grid-cols-4 gap-5">
        <Product />
        <Product />
        <Product />
        <Product />
        <Product />
        <Product />
        <Product />
      </div>
    </Container>
  );
}