"use client"

import { CardCatalogProduct } from "@/react/components/cards/catalog/cardCatalogProduct/CardCatalogProduct";
import { Container } from "@/react/components/containers/container/Container";
import { SectionFilters } from "@/react/sections/catalog/sectionFilters/SectionFilters";
import { useGetAllProductsQuery } from "@/scripts/api/product/productApi";
import { useFavorites } from "@/store/favorites.zustand";
import { useFilters } from "@/store/filters.zustand";
import { useEffect, useState } from "react";

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



const items = [
  {
    id: "1",
    title: "Игровые наушники 1",
    price: '239.00',
    favorite: false
  },
  {
    id: "2",
    title: "Игровые наушники 2",
    price: '239.00',
    favorite: false
  },
  {
    id: "3",
    title: "Игровые наушники 3",
    price: '239.00',
    favorite: false
  },
  {
    id: "4",
    title: "Игровые наушники 4",
    price: '239.00',
    favorite: true
  },
  {
    id: "5",
    title: "Игровые наушники 5",
    price: '239.00',
    favorite: true
  },
  {
    id: "6",
    title: "Игровые наушники 6",
    price: '239.00',
    favorite: false
  },
  {
    id: "7",
    title: "Игровые наушники 7",
    price: '239.00',
    favorite: true
  },
  {
    id: "8",
    title: "Игровые наушники 8",
    price: '239.00',
    favorite: false
  },
  {
    id: "9",
    title: "Игровые наушники 9",
    price: '239.00',
    favorite: false
  },
]

export default function PageCatalog() {
  const favorites = useFavorites(state => state)
  const { filters, actions, checkedFilters } = useFilters(state => state)
  const { addFilters, addFilter } = actions
  const [products, setProducts] = useState<any[]>([])

  const {data: DataProducts} = useGetAllProductsQuery()

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

  useEffect(() => {
    if (DataProducts && !!DataProducts.length) {
      const favorite = DataProducts.filter((item: any) => item.favorite === true)
      setProducts(DataProducts)
      favorites.actions.addAllFavorites(favorite)
    }
  }, [DataProducts])



  return (
    <Container>
      <div className="w-full h-[300px] bg-[#9bb8a1] rounded-[5px] mt-5 relative">
        <div className="absolute text-[20px] top-[50%] left-[50%] -translate-y-[50%] -translate-x-[50%] font-bold uppercase text-[#FFF] tracking-widest">Контент</div>
      </div>
      <div className="mt-10" />
      <SectionFilters />

      <div className="text-[21px] font-bold mt-8 mb-4">Наушники для вас!</div>
      <div className="grid grid-cols-4 gap-5">
        {
          products.map((item: any, idx: number) => (
            <CardCatalogProduct key={item.id} data={item} />
          ))
        }
      </div>
    </Container>
  );
}