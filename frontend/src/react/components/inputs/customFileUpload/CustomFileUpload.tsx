import { FileInput } from "@mantine/core"
import { Control, Controller, FieldValues, Path } from "react-hook-form"
import styles from './styles.module.css'

interface Props<T extends FieldValues> {
    control: Control<T>
    name: Path<T>
}  

export const CustomFileUpload = <T extends FieldValues>({
    control,
    name
}: Props<T>) => {
    return (
        <Controller 
            control={control}
            name={name}
            render={({field}) => (
                <FileInput 
                    onChange={(e) => {
                        field.onChange(e)
                    }}
                    multiple
                    accept="image/*"
                    clearable 
                    placeholder="Файлы" 
                    classNames={styles}
                />
            )}
        />

    )
}