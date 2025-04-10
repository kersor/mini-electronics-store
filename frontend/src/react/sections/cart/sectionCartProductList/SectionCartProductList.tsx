"use client"

import { useCart } from '@/store/cart.zustand'
import { SectionCartProductItem } from '../sectionCartProductItem/SectionCartProductItem'
import styles from './styles.module.css'

export const SectionCartProductList = () => {
    const cart = useCart(state => state)
    return (
        <div className={styles.wrapper}>
            {
                !!cart.cart.length && cart.cart.map((item: any) => (
                    <SectionCartProductItem key={item.id} data={item}/>
                ))
            }
        </div>
    )
}