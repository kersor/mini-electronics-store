"use client"

import { Container } from '@/react/components/containers/container/Container'
import styles from './styles.module.css'
import { useRouter } from 'next/navigation'

export const SectionSidebarAdmin = () => {
    const router = useRouter()

    return (
        <div className={styles.wrapper}>
            <div className={styles.admin_list}>
                <div className={styles.admin_body}>
                    <div className={styles.admin_body__title}>Продукт</div>
                    <div className='flex flex-col gap-1.5'>
                        <div onClick={() => router.push('/admin/product')} className={styles.admin_item}>Товары</div>
                        <div onClick={() => router.push('/admin/category')} className={styles.admin_item}>Категории</div>
                        <div onClick={() => router.push('/admin/count')} className={styles.admin_item}>Количество товаров</div>
                    </div>
                </div>

                <div className={styles.admin_body}>
                    <div className={styles.admin_body__title}>Пользователь</div>
                    <div className='flex flex-col gap-1.5'>
                        <div onClick={() => router.push('/admin/users')} className={styles.admin_item}>Пользователи</div>
                        <div onClick={() => router.push('/admin/orders')} className={styles.admin_item}>Заказы</div>
                    </div>
                </div>
            </div>
        </div>
    )
}