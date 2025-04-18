import { CustomButton } from "@/react/components/ui/customButton/CustomButton"
import { CustomInput } from "@/react/components/inputs/customInput/CustomInput"
import { usePrice } from "@/scripts/hooks/usePrice"
import { useFilters } from "@/store/filters.zustand"
import { useEffect, useState } from "react"
import { Control, FieldValues, Path } from "react-hook-form"

type Type = "min" | "max"

interface Props <T extends FieldValues> {
    control: Control<T>
    name_min: Path<T>
    name_max: Path<T>

    value_min: string
    value_max: string

    funcHandleSubmit: () => void
    cleanValue: () => void
}

export const SelectRange = <T extends FieldValues>({
    control,
    name_min,
    name_max,
    value_min,
    value_max,
    funcHandleSubmit,
    cleanValue
}: Props<T>) => {
    const {checkedFilters} = useFilters(state => state)
    const [min, setMin] = useState("")
    const [max, setMax] = useState("")
    const [cleanButton, setCleanButton] = useState(false)

    useEffect(() => {
        if(!!max || !!min) {
            setCleanButton(true)
        }
    }, [max, min])

    const funcCleanState = () => {
        cleanValue()
        setCleanButton(false)
    }
   
    return (
        <div className="flex flex-col w-full gap-2 min-w-[200px]">
            <div className="flex gap-2">
                <div className="w-full">
                    <div className="text-[14px] pb-1">От</div>
                    <CustomInput 
                        onChange={(val: string, field: any) => {
                            field.onChange(val)
                            setMin(val)
                        }} 
                        control={control} name={name_min} classNameBox="max-w-[100px]" type={"number"}  />
                </div>
                <div className="w-full">
                    <div className="text-[14px] pb-1">До</div>
                    <CustomInput 
                        onChange={(val: string, field: any) => {
                            field.onChange(val)
                            setMax(val)
                        }}
                        control={control} name={name_max} classNameBox="max-w-[100px]" type={"number"}  />
                </div>
            </div>
            <div className="flex gap-1 min-w-[200px]">
                <CustomButton title="Готово" onClick={funcHandleSubmit} fullWidth/>
                {cleanButton && <CustomButton onClick={funcCleanState} title="Сбросить" variant="outlined" fullWidth />}
            </div>
        </div>
    )
}