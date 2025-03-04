import { CustomButton } from "@/components/ui/customButton/CustomButton"
import { CustomInput } from "@/components/ui/customInput/CustomInput"
import { usePrice } from "@/hooks/usePrice"
import { useState } from "react"

export const SelectRange = () => {
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
                    <CustomInput classNameBox="max-w-[100px]" type={"number"} value={inputRange[0]} onChange={(value: string) => funcOnChange(0, value)} />
                </div>
                <div className="w-full">
                    <div className="text-[14px] pb-1">До</div>
                    <CustomInput classNameBox="max-w-[100px]" type={"number"} value={inputRange[1]} onChange={(value: string) => funcOnChange(1, value)} />
                </div>
            </div>
            <CustomButton className="mt-3 min-w-[200px]" title="Готово" onClick={() => console.log()} />
        </div>
    )
}