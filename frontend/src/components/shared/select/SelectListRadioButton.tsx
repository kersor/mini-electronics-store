import { CustomButton } from "@/components/ui/customButton/CustomButton"
import { CustomRadioButton } from "@/components/ui/customRadioButton/CustomRadioButton"
import { useState } from "react"
import { Control, FieldValues, Path } from "react-hook-form"

interface IData {
    id: string
    title: string
}

interface Props<T extends FieldValues> {
    name: Path<T>
    control: Control<T>; 
    funcHandleSubmit: () => void

    className?: string
    data: IData[]
}

export const SelectListRadioButton = <T extends FieldValues>({
    className,
    data,
    name,
    control,
    funcHandleSubmit
}: Props<T>) => {
    const [checkboxValues, setCheckboxValues] = useState<string>("")
    
    const funcOnChangeCheckbox = (value: string) => {
        setCheckboxValues(prev => value)
        funcHandleSubmit()
    }

    return (
        <>
            {data.map((item, index) => (
                <CustomRadioButton
                    active={index === 0}
                    name={name}
                    item={item}
                    control={control}
                    vsbSircle={false}
                    checked={checkboxValues}
                    key={item.id} 
                    onChange={funcOnChangeCheckbox} 
                />
            ))}
        </>
    )
}