import styles from './styles.module.css'
import { PropsWithChildren } from 'react'
import clsx from 'clsx'
import { FaChevronDown } from 'react-icons/fa'
import { useFilters } from '@/store/filters.zustand'

type TypeSelectPlaceholder = "normal" | "outline"

interface Props {
    placeholder: string,
    value: string
    type?: TypeSelectPlaceholder
}

export const CustomSelect = ({
    placeholder,
    children,
    value,
    type = "normal"
}: PropsWithChildren<Props>) => {
    const selectStyle: Record<TypeSelectPlaceholder, string> = {
        normal: styles.select_placeholder__normal,
        outline: styles.select_placeholder__outline
    }

    return (
        <div className={styles.select}>
            {
                value !== "" ? (
                    <HasData 
                        value={value}
                        placeholder={placeholder}
                        type={type}
                    />
                ) : (
                    <NoHasData 
                        placeholder={placeholder}
                        type={type}
                    />
                )
            }
            <div className={styles.select_menu}>
                <div className={styles.select_list}>
                    {children}
                </div>
            </div>
        </div>
    )
}

const HasData = ({
    placeholder,
    type = "normal",
    value
}: {
    value: string
    placeholder: string
    type?: TypeSelectPlaceholder 
}) => {
    const selectStyle: Record<TypeSelectPlaceholder, string> = {
        normal: styles.select_placeholder__normal,
        outline: styles.select_placeholder__outline
    }

    return (
        <div className={clsx(
            styles.select_placeholder,
            selectStyle[type]
        )}>
            <div>{placeholder}: {value}</div>
            <div className={styles.select_placeholder_arrow}>
                <FaChevronDown />
            </div>
        </div>
    )
}

const NoHasData = ({
    placeholder,
    type = "normal"
}: {
    placeholder: string
    type?: TypeSelectPlaceholder
}) => {
    const selectStyle: Record<TypeSelectPlaceholder, string> = {
        normal: styles.select_placeholder__normal,
        outline: styles.select_placeholder__outline
    }

    return (
        <div className={clsx(
            styles.select_placeholder,
            selectStyle[type]
        )}>
            <div>{placeholder}</div>
            <div className={styles.select_placeholder_arrow}>
                <FaChevronDown />
            </div>
        </div>
    )
}