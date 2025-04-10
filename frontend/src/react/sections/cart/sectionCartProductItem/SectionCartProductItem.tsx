import { MouseEvent, useState } from 'react'
import styles from './styles.module.css'
import { FaHeart, FaRegHeart } from 'react-icons/fa'
import { useFavorites } from '@/store/favorites.zustand'
import { Trash, Trash2 } from 'lucide-react'

interface Props {
    data: any
}

export const SectionCartProductItem = ({
    data
}: Props) => {
    const favorite = useFavorites(state => state)
    const [isFavorite, setIsFavorite] = useState(false)

    const funcOnClickToggleFavorite = (e: MouseEvent<HTMLDivElement>) => {
        e.stopPropagation()
        setIsFavorite(prev => !prev)
        // favorite.actions.toggleFavorites(data)
    }

    return (
        <div className={styles.wrapper}>
            <div className={styles.product_sectionLeft}>
                <div className={styles.product_photo}>
                    <img src="/product/1.png" alt="" />
                </div>
                <div className={styles.product_description}>
                    <div className={styles.product_title}>{data.title}</div>
                    <div className={styles.product_description__btns}>
                        <div onClick={(e: MouseEvent<HTMLDivElement>) => funcOnClickToggleFavorite(e)} className={styles.product_description__btn}> 
                            {isFavorite ? <FaHeart color="#ec7063" size={16} /> : <FaRegHeart size={16} />}
                        </div>
                        <div className={styles.product_description__btn}> 
                            <Trash2 size={16} />
                        </div>
                    </div>
                </div>
            </div>
            <div className={styles.product_sectionRight}>
                <div className={styles.product_price}>
                    $ {data.price}
                </div>
            </div>
        </div>
    )
}