"use client"

import { CardAdminCount } from "@/react/components/cards/admin/cardAdminCount/CardAdminCount"
import { useGetAllProductsQuery } from "@/scripts/api/product/productApi"
import { useEffect, useState } from "react"

export default function PageCount () {
    const {data} = useGetAllProductsQuery()
    const [products, setProducts] = useState<any[]>([])

    useEffect(() => {
        if (data ) {
            setProducts(data)
        }
    }, [data])

    return (
        <div className="flex flex-col gap-5">
            {
                products.length > 0 && products.map((product, index: number) => (
                    <CardAdminCount key={product.id} item={product} index={index} />
                ))
            }
        </div>
    )
}