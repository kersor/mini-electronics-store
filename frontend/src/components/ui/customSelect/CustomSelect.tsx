import { FormControl, InputBase, InputLabel, MenuItem, OutlinedInput, Select } from "@mui/material"
import { useEffect, useState } from "react"

type TypeSelect = "default" | "outlined"

interface IOptions {
    id: string
    title: string
}

interface Props {
    value: string
    handleChange: (value: string) => void
    options: IOptions[]
    placeholder: string
    type?: TypeSelect
}

export const CustomSelect = ({
    value,
    handleChange,
    options,
    placeholder,
    type = 'default'
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
        <FormControl fullWidth size="small">
            <InputLabel id="demo-simple-select-label">{placeholder}</InputLabel>
            <Select
                labelId="demo-simple-select-label"
                id="demo-simple-select"
                value={value}
                label="Категория"
                onChange={funcHandleChange}
                sx={stylesOutlinedInput}
                MenuProps={{
                    PaperProps: {
                        sx: {
                            top: "465px !important",
                            borderRadius: "12px", // Закругляем углы выпадающего списка
                        }
                    }
                }}
            >
                <MenuItem sx={stylesSelectedItemPlaceholder} value="">Очистить</MenuItem>
                {options.map(item => <MenuItem sx={{fontSize: "14px"}} key={item.id} value={item.id}>{item.title}</MenuItem>)}
            </Select>
        </FormControl>
    )
}