import { CustomButton } from "@/components/ui/customButton/CustomButton"
import { CustomRadioButton } from "@/components/ui/customRadioButton/CustomRadioButton"
import { useState } from "react"

interface IData {
    id: string
    title: string
}

interface Props {
    className?: string
    data: IData[]
}

export const SelectListRadioButton = ({
    className,
    data
}: Props) => {
    const [checkboxValues, setCheckboxValues] = useState<string>("")
    
    const funcOnChangeCheckbox = (value: string) => {
        setCheckboxValues(prev => value)
    }

    return (
        <>
            {data.map(item => (
                <CustomRadioButton vsbSircle={false} checked={checkboxValues} key={item.id} value={item.id} label={item.title} onChange={funcOnChangeCheckbox} />
            ))}
        </>
    )
}