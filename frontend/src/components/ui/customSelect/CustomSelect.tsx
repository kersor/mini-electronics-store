import { FormControl, InputBase, InputLabel, MenuItem, OutlinedInput, Select } from "@mui/material"
import { useEffect, useState } from "react"

type TypeSelect = "default" | "outlined"

interface Props {
    value: string
    handleChange: (value: string) => void
    options: any[]
    placeholder: string
    type?: TypeSelect
    minWidth: number
}

export const CustomSelect = ({
    value,
    handleChange,
    options,
    placeholder,
    type = 'default',
    minWidth
}: Props) => {
    let stylesOutlinedInput = {}
    let stylesSelectedItemPlaceholder = {
        fontWeight: 700,
        fontSize: "14px"
    }

    const funcHandleChange = (e: any) => {
        handleChange(e.target.value)
    }

    switch (type) {
        case "default":
            stylesOutlinedInput = {
                background: "#eee",
                borderRadius: "50px"
            }
            break;
        case "outlined":
            stylesOutlinedInput = {
                background: "#none",
                borderRadius: "50px"
            }
            break;
        default:
            break;
    }

    return (
        <FormControl sx={{ m: 1, minWidth: minWidth }} size="small" >
            <InputLabel id="demo-simple-select-label">{placeholder}</InputLabel>
            <Select
                labelId="demo-simple-select-label"
                id="demo-simple-select"
                value={value}
                onChange={funcHandleChange}
                autoWidth
                label="Категория"

                sx={stylesOutlinedInput}
                MenuProps={{
                    PaperProps: {
                        sx: {
                            top: "475px !important",
                            borderRadius: "12px", // Закругляем углы выпадающего списка
                        }
                    }
                }}
            >
                <MenuItem sx={stylesSelectedItemPlaceholder} value="">Очистить</MenuItem>
                {options.map(item => (
                    <MenuItem sx={{fontSize: "14px", display: 'flex', alignItems: "center", gap: "5px"}} key={item.id} value={item.id}>
                        {item.hex && <div style={{background: item.hex}} className={`w-[15px] h-[15px] rounded-sm`}></div>}
                        {item.title}
                    </MenuItem>
                ))}
            </Select>
        </FormControl>
    )
}