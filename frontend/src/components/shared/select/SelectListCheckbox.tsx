import { CustomButton } from "@/components/ui/customButton/CustomButton"
import { CustomCheckbox } from "@/components/ui/customCheckbox/CustomCheckbox"
import { PropsWithChildren, useState } from "react"
import { Control, FieldValues, Path } from "react-hook-form"

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
}

export const SelectListCheckbox = <T extends FieldValues>({
    data,
    className,
    funcHandleSubmit,

    control,
    name,
    rules
}: Props<T>) => {
    const [checkboxValues, setCheckboxValues] = useState<string[]>([])
    


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
            <CustomButton className="mt-5 min-w-[200px]" title="Готово" onClick={funcHandleSubmit} />
        </>
    )
}