import { FormControl, InputLabel, MenuItem, Select } from "@mui/material"

interface IOptions {
    id: string
    title: string
}

interface Props {
    value: string
    handleChange: (value: string) => void
    options: IOptions[]
    placeholder: string
}

export const CustomSelect = ({
    value,
    handleChange,
    options,
    placeholder
}: Props) => {
    const funcHandleChange = (e: any) => {
        handleChange(e.target.value)
    }

    return (
        <div className="max-w-[200px]">
            <FormControl fullWidth size="small">
                <InputLabel id="demo-simple-select-label">{placeholder}</InputLabel>
                    <Select
                        labelId="demo-simple-select-label"
                        id="demo-simple-select"
                        value={value}
                        label="Категория"
                        onChange={funcHandleChange}
                    >
                        <MenuItem sx={{fontWeight: 700}} value="">Очистить</MenuItem>
                        {options.map(item => <MenuItem key={item.id} value={item.id}>{item.title}</MenuItem>)}
                </Select>
            </FormControl>
        </div>
    )
}