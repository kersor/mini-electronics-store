import clsx from "clsx"
import { LucideIcon } from "lucide-react"


interface Props {
    placeholder: string
    value: string
    onChangeValue: (value: string) => void,
    
    typeInput?: string
    classNameBox?: string
    classNameInput?: string

    RightIcon?: LucideIcon
    RightIconStyle?: string
    onClickRightIcon?: () => void
}

export const CustomInput = ({
    placeholder,
    typeInput = 'text',
    classNameBox,
    classNameInput,
    RightIcon,
    value,
    onChangeValue,
    RightIconStyle,
    onClickRightIcon
}: Props) => {

    const funcOnClickRightIcon = () => {
        if (onClickRightIcon) {
            onClickRightIcon()
        }
    }

    return (
        <div className={clsx("flex items-center", classNameBox)}>
            <input 
                className={clsx("outline-0 placeholder:text-[#565656] w-full", classNameInput)} 
                placeholder={placeholder} 
                type={typeInput} 
                value={value}
                onChange={(e) => onChangeValue(e.target.value)}
            />
            {
                RightIcon && 
                <div onClick={funcOnClickRightIcon} className={clsx(RightIconStyle)}>
                    <RightIcon size={20} strokeWidth={1} />
                </div>
            }
        </div>
    )
}