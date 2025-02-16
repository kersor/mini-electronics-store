import styles from './styles.module.css'
import clsx from "clsx"

type TypeButton = "normal" | "outline"

interface Props {
    className?: string
    title: string
    onClick: () => void
    type?: TypeButton
}

export const CustomButton = ({
    className,
    title,
    onClick,
    type = 'normal'
}: Props) => {

    const buttonStyle: Record<TypeButton, string> = {
        normal: styles.button_normal,
        outline: styles.button_outline,
    }

    return (
        <div className={clsx(
            "w-full py-1", 
            styles.button,
            buttonStyle[type],
            className, 
        )} onClick={onClick}>{title}</div>
    )
}