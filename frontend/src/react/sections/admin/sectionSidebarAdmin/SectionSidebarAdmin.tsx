import { Container } from '@/react/components/containers/container/Container'
import styles from './styles.module.css'

export const SectionSidebarAdmin = () => {
    return (
        <div className={styles.wrapper}>
            <div className={styles.admin_list}>
                <div className={styles.admin_body}>
                    <div className={styles.admin_body__title}>Продукт</div>
                    <div className='flex flex-col gap-1.5'>
                        <div className={styles.admin_item}>Товары</div>
                        <div className={styles.admin_item}>Категории</div>
                        <div className={styles.admin_item}>Характеристики</div>
                        <div className={styles.admin_item}>Количество товаров</div>
                    </div>
                </div>

                <div className={styles.admin_body}>
                    <div className={styles.admin_body__title}>Пользователь</div>
                    <div className='flex flex-col gap-1.5'>
                        <div className={styles.admin_item}>Пользователи</div>
                        <div className={styles.admin_item}>Заказы</div>
                    </div>
                </div>
            </div>
        </div>
    )
}