import { CustomButton } from "@/components/ui/customButton/CustomButton"
import { CustomCheckbox } from "@/components/ui/customCheckbox/CustomCheckbox"
import { IFormFilters } from "@/types/filters"
import { PropsWithChildren, useEffect, useState } from "react"
import { Control, FieldValues, Path, UseFormSetValue } from "react-hook-form"

interface IData {
    id: string
    title: string
}

interface Props <T extends FieldValues> {
    control: Control<T>
    name: Path<T>
    rules?: object;

    className?: string
    data: IData[]
    funcHandleSubmit: () => void
    getValues: string[]
    cleanValue: () => void
}

export const SelectListCheckbox = <T extends FieldValues>({
    data,
    className,
    funcHandleSubmit,

    control,
    name,
    rules,
    cleanValue
}: Props<T>) => {
    const [checkboxValues, setCheckboxValues] = useState<string[]>([])
    const [cleanButton, setCleanButton] = useState(false)

    useEffect(() => {
        if (!!checkboxValues.length) {
            setCleanButton(true)
        }
    }, [checkboxValues])

    const funcCleanState = () => {
        cleanValue()
        setCheckboxValues(prev => [])
        setCleanButton(false)
    }
    
    return (
        <>
            {data.map(item => (
                <CustomCheckbox 
                    control={control}
                    name={name}
                    rules={rules}
                    data={item}
                    key={item.id}
                    value={item.id}
                    label={item.title}
                    checkboxValues={checkboxValues}
                    setCheckboxValues={setCheckboxValues}
                />
            ))}
            <div className="flex gap-1 min-w-[200px]">
                <CustomButton title="Готово" onClick={funcHandleSubmit} />
                {cleanButton && <CustomButton onClick={funcCleanState} className="!bg-[#d4d4d4] !border-[#d4d4d4]" title="Сбросить" />}
            </div>
        </>
    )
}