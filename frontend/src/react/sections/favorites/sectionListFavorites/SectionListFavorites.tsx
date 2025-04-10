"use client"

import { CardCatalogProduct } from '@/react/components/cards/catalog/cardCatalogProduct/CardCatalogProduct'
import styles from './styles.module.css'

export const SectionListFavorites = () => {
    return (
        <div className={styles.favorites_wrapper}>
            {[...Array(10)].map((item: any, index: number) => <CardCatalogProduct key={index} index={index} />)}
        </div>
    )
}