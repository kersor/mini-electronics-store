import clsx from "clsx"
import { PropsWithChildren } from "react"

interface Props {
    className?: string
}

export const Container = ({
    className,
    children
}: PropsWithChildren<Props>) => {
    return (
        <div className={clsx("max-w-[1300px] px-[20px] mx-auto", className)}>{children}</div>
    )
}