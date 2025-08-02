"use client"
import { CustomButton } from '@/react/components/ui/customButton/CustomButton'
import styles from './styles.module.css'
import { usePrice } from '@/scripts/hooks/usePrice'

export const SectionTotalCart = () => {
    return (
        <div className={styles.wrapper}>
            <CustomButton size="biggest" fullWidth title='Перейти к оформлентю' onClick={() => {}} />
            <div className={styles.list}>
                <div className={styles.title}>Ваша корзина</div>
                <div className={styles.cart_list}>
                    <div className={styles.cart_item}>
                        <div className={styles.cart_item__name}>Телефон</div>
                        <div className={styles.cart_item__price}>{usePrice("1333")} ₽</div>
                    </div>
                </div>
            </div>
            <div className={styles.list}>
                <div className='flex justify-between items-center'>
                    <div className={styles.title}>Итого</div>
                    <div className={styles.cart_item__price}>{usePrice("1333")} ₽</div>
                </div>
            </div>
        </div>
    )
}