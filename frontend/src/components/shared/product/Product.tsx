import { useState } from "react"
import { AiFillStar } from "react-icons/ai"
import { Rating } from 'react-simple-star-rating'
import { StarRatingGet } from "../starRating/StarRatingGet"
import styles from './styles.module.css'
import clsx from "clsx"
import { FaHeart, FaRegHeart } from "react-icons/fa"


interface Props {
    className?: string,
    favorite?: boolean 
}

export const Product = ({
    className,
    favorite = false
}: Props) => {


    return (
        <div>
            <div className="bg-[#F6F6F6] py-5 relative rounded-[10px]">
                <img className="max-w-[300px] h-auto object-cover" src="/product/1.png" alt="" />
                <div className={clsx(styles.add_favorite)}> 
                    {favorite ? <FaHeart color="#ec7063" size={16} /> : <FaRegHeart size={16} />}
                </div>
            </div>
            <div className="flex flex-col gap-1 pt-6">
                <div className="flex justify-between items-center font-bold px-0.5">
                    <div className="">Игровые наушники</div>
                    <div className="">$ 239.00</div>
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