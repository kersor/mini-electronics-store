import { CustomButton } from "@/react/components/ui/customButton/CustomButton"
import { CustomCheckbox } from "@/react/components/inputs/customCheckbox/CustomCheckbox"
import { IFilter, IFormFilters } from "@/scripts/types/filters"
import { PropsWithChildren, useEffect, useState } from "react"
import { Control, FieldValues, Path, UseFormSetValue } from "react-hook-form"

interface Props <T extends FieldValues> {
    control: Control<T>
    name: Path<T>
    rules?: object;

    className?: string
    data: any[]
    funcHandleSubmit: () => void
    getValues: any[]
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
                <CustomButton title="Готово" onClick={funcHandleSubmit} fullWidth />
                {cleanButton && <CustomButton onClick={funcCleanState} title="Сбросить" variant="outlined" fullWidth />}
            </div>
        </>
    )
}