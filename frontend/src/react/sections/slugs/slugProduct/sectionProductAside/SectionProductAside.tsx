import { StarRatingGet } from '@/react/components/ui/starRating/StarRatingGet'
import styles from './styles.module.css'
import { usePrice } from '@/scripts/hooks/usePrice'
import { PropsWithChildren, useState } from 'react'
import clsx from 'clsx'

const colors = [
    {
        hex: "#e6b0aa"
    }, 
    {
        hex: "#d7bde2"
    },
    {
        hex: "#a9cce3"
    }
]

interface IChoose {
    title: string
}

export const SectionProductAside = () => {
    return (
        <div className={styles.wrapper}>
            <div className={styles.product_title}>
                <div className={styles.product_name}>Airpods-Max</div>
                <div className={styles.product_description}>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quae architecto pariatur aut possimus eius ducimus quia harum cupiditate perferendis quasi? Veritatis expedita officiis consectetur ipsa ut ipsam laboriosam adipisci iste.</div>
                <div className={styles.product_rating}>
                    <StarRatingGet count={5}/>
                    <div className={styles.product_count}>(123)</div>
                </div>
            </div>

            <div className={styles.product_price}>
                ₽ {usePrice("54365.00")}
            </div>
            <div className={styles.choose_list}>
                <SectionChoose title='Выберите цвет'>
                    <SectionChooseColor colors={colors}/>
                </SectionChoose>
            </div>
        </div>
    )
}

const SectionChoose = ({
    title,
    children
}: PropsWithChildren<IChoose>) => {
    return (
        <div className={styles.choose_item}>
            <div className={styles.choose_item__title}>{title}</div>
            {children}
        </div>
    )
}

const SectionChooseColor = ({
    colors
}: {
    colors: any[]
}) => {
    const [active, setActive] = useState(0)

    return (
        <div className={styles.choose_list__color}>
            {
                colors.map((item, index: number) => (
                    <div onClick={() => setActive(index)} key={index} className={clsx(
                        styles.choose_item__color,
                        active === index && styles.choose_item__color__active
                    )} style={{background: item.hex}} />
                ))
            }
        </div>
    )
}