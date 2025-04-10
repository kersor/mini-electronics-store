"use client"

import { CardCatalogProduct } from '@/react/components/cards/catalog/cardCatalogProduct/CardCatalogProduct'
import styles from './styles.module.css'
import { useFavorites } from '@/store/favorites.zustand'

export const SectionListFavorites = () => {
    const favorites = useFavorites(state => state)

    return (
        <div className={styles.favorites_wrapper}>
            {favorites.favorites.map((item: any, index: number) => <CardCatalogProduct key={item.id} data={item}  />)}
        </div>
    )
}