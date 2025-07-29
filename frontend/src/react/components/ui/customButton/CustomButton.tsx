import styles from './styles.module.css'
import clsx from "clsx"

type TypeSize  = "biggest" | "regular" | "compact"
type TypeVariant = "primary" | "secondary" | "invisible" | "outlined"

interface Props {
    className?: string
    title: string
    onClick: () => void
    variant?: TypeVariant
    size?: TypeSize,

    disabled?: boolean
    fullWidth?: boolean
}

export const CustomButton = ({
    className,
    title,
    onClick,
    variant = "primary",
    size = "regular",

    disabled = false,
    fullWidth = false,
}: Props) => {

    const classNameSize: Record<TypeSize, any> = {
        biggest: styles.biggest,
        regular: styles.regular,
        compact: styles.compact,
    }

    const classNames: Record<TypeVariant, any> = {
        primary: styles.primary,
        secondary: styles.secondary,
        invisible: styles.invisible,
        outlined: styles.outlined,
    }

    const style = fullWidth 
    ? {
        display: "block",
        flex: "1"
    }
    : {
        display: "inline-block",
    }

    return (
        <div role='button' onClick={onClick} style={style}>
            <div className={clsx(
                classNames[variant],
                classNameSize[size],
                disabled && styles.disabled,
                fullWidth && styles.fullWidth
            )}>
                {title}
            </div>
        </div>
    )
}