import { MouseEvent, useState } from "react"
import { AiFillStar } from "react-icons/ai"
import { Rating } from 'react-simple-star-rating'
import styles from './styles.module.css'
import clsx from "clsx"
import { FaHeart, FaRegHeart } from "react-icons/fa"
import { StarRatingGet } from "@/react/components/ui/starRating/StarRatingGet"
import { useRouter } from "next/navigation"
import { useFavorites } from "@/store/favorites.zustand"


interface Props {
    className?: string,
    data: any
}

export const CardCatalogProduct = ({
    className,
    data
}: Props) => {
    const [isFavorite, setIsFavorite] = useState<boolean>(data.favorite)
    const favorite = useFavorites(state => state)
    const router = useRouter()

    const funcOnClick = () => {
        router.push(`/product/${data.id}`)
    }

    const funcOnClickToggleFavorite = (e: MouseEvent<HTMLDivElement>) => {
        e.stopPropagation()
        setIsFavorite(prev => !prev)
        favorite.actions.toggleFavorites(data)
    }

    return (
        <div className={styles.card} onClick={funcOnClick}>
            <div className="bg-[#F6F6F6] py-5 relative rounded-[10px]">
                <img className="max-w-[300px] h-auto object-cover" src="/product/1.png" alt="" />
                <div onClick={(e: MouseEvent<HTMLDivElement>) => funcOnClickToggleFavorite(e)} className={clsx(styles.add_favorite)}> 
                    {isFavorite ? <FaHeart color="#ec7063" size={16} /> : <FaRegHeart size={16} />}
                </div>
            </div>
            <div className="flex flex-col gap-1 pt-6">
                <div className="flex justify-between items-center font-bold px-0.5">
                    <div className="">{data.title}</div>
                    <div className="">$ {data.price}</div>
                </div>
                <div className="truncate text-[13px]">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Placeat, tempora magni? Vitae distinctio voluptatem ea reiciendis ex animi, unde excepturi quod earum enim, aliquam libero dolores, repudiandae fuga nisi officiis.</div>
                <div className="flex items-center gap-2 w-full">
                    <StarRatingGet count={3} />
                    <div className="mt-1.5 text-[#636363] text-[13px]">(121)</div>
                </div>
                <div className="w-full">
                    <div className={styles.add_card}>В корзину</div>
                </div>
            </div>
        </div>
    )
}