"use client"

import { CardCatalogProduct } from "@/react/components/cards/catalog/cardCatalogProduct/CardCatalogProduct";
import { Container } from "@/react/components/containers/container/Container";
import { SectionFilters } from "@/react/sections/catalog/sectionFilters/SectionFilters";
import { useFilters } from "@/store/filters.zustand";
import { useEffect } from "react";

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

export default function PageCatalog() {
  const { filters, actions, checkedFilters } = useFilters(state => state)
  const { addFilters, addFilter } = actions

  useEffect(() => {
    const paylaod = {
      category: list_category,
      color: list_color,
      material: list_material,
      sort: sort,
      price_min: "",
      price_max: ""
    }

    addFilters(paylaod)
    if (!checkedFilters.sort.id) {
      addFilter({type: "sort", data: {id: sort[0].id, title: sort[0].title}})
    }
  }, []) 



  return (
    <Container>
      <div className="w-full h-[300px] bg-[#9bb8a1] rounded-[5px] mt-5 relative">
        <div className="absolute text-[20px] top-[50%] left-[50%] -translate-y-[50%] -translate-x-[50%] font-bold uppercase text-[#FFF] tracking-widest">Контент</div>
      </div>
      <div className="mt-10" />
      <SectionFilters />

      <div className="text-[21px] font-bold mt-8 mb-4">Наушники для вас!</div>
      <div className="grid grid-cols-4 gap-5">
        <CardCatalogProduct favorite />
        <CardCatalogProduct  />
        <CardCatalogProduct  />
        <CardCatalogProduct  />
        <CardCatalogProduct  />
        <CardCatalogProduct  />
        <CardCatalogProduct  />
      </div>
    </Container>
  );
}