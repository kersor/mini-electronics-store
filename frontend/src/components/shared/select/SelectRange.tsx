import { CustomButton } from "@/components/ui/customButton/CustomButton"
import { CustomInput } from "@/components/ui/customInput/CustomInput"
import { usePrice } from "@/hooks/usePrice"
import { useState } from "react"
import { Control, FieldValues, Path } from "react-hook-form"

interface Props <T extends FieldValues> {
    control: Control<T>
    name_1: Path<T>
    name_2: Path<T>
}

export const SelectRange = <T extends FieldValues>({
    control,
    name_1,
    name_2
}: Props<T>) => {
    const [inputRange, setInputRange] = useState<string[]>(["", ""])
    
    const funcOnChange = (index: number, value: string) => {
        const price = usePrice(value)
        const newInputRange = [...inputRange]
        newInputRange[index] = price

        setInputRange(prev => newInputRange)
    }

    return (
        <div className="flex flex-col w-full gap-2 min-w-[200px]">
            <div className="flex gap-2">
                <div className="w-full">
                    <div className="text-[14px] pb-1">От</div>
                    <CustomInput control={control} name={name_1} classNameBox="max-w-[100px]" type={"number"}  />
                </div>
                <div className="w-full">
                    <div className="text-[14px] pb-1">До</div>
                    <CustomInput control={control} name={name_2} classNameBox="max-w-[100px]" type={"number"}  />
                </div>
            </div>
            <CustomButton className="mt-3 min-w-[200px]" title="Готово" onClick={() => console.log()} />
        </div>
    )
}