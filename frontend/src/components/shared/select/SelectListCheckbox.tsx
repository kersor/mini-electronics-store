import { CustomButton } from "@/components/ui/customButton/CustomButton"
import { CustomCheckbox } from "@/components/ui/customCheckbox/CustomCheckbox"
import { PropsWithChildren, useState } from "react"

interface IData {
    id: string
    title: string
}

interface Props {
    className?: string
    data: IData[]
}

export const SelectListCheckbox = ({
    data,
    className
}: Props) => {
    const [checkboxValues, setCheckboxValues] = useState<string[]>([])
    
    const funcOnChangeCheckbox = (value: string) => {
        setCheckboxValues(prev => [...prev, value])
    }

    return (
        <>
            {data.map(item => (
                <CustomCheckbox key={item.id} value={item.id} label={item.title} onChange={funcOnChangeCheckbox} />
            ))}
            <CustomButton className="mt-4" title="Готово" onClick={() => console.log(checkboxValues)} />
        </>
    )
}