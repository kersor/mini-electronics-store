"use client"

import { CardAdminCount } from "@/react/components/cards/admin/cardAdminCount/CardAdminCount"
import { useGetAllProductsQuery } from "@/scripts/api/product/productApi"
import { ScrollAreaAutosize } from "@mantine/core"
import { useEffect, useState } from "react"
import styles from './styles.module.css'

export default function PageCount () {
    const {data} = useGetAllProductsQuery()
    const [products, setProducts] = useState<any[]>([])

    useEffect(() => {
        if (data ) {
            setProducts(data)
        }
    }, [data])

    return (
        <ScrollAreaAutosize offsetScrollbars mah="100%" maw="100%" classNames={{content: styles.content}}>
            {
                products.length > 0 && products.map((product, index: number) => (
                    <CardAdminCount key={product.id} item={product} index={index} />
                ))
            }
        </ScrollAreaAutosize>
    )
}