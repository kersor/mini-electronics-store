"use client"

import { ISelect } from '@/types/select'
import React, { ChangeEvent, useEffect, useState } from 'react'
import Select, { GroupBase } from 'react-select'

interface IDataSelect {
    id: string,
    name: string
}

interface Props {
    className?: string
    placeholder: string
    name: string
    data: IDataSelect[]
    onChangeHandler: (data: ISelect) => void 
}

const CustomStyles = {
    control: (styles: any, state: any) => ({
        ...styles,
        borderRadius: '50px',
        color: "#262626",
        fontWeight: 600,
        paddingLeft: '10px',

        background: "#ebedec",
        boxShadow: 'none',
        border: 'none',
        cursor: 'pointer',
        "&:hover": {
            border: 'none'
        },
    }),
    option: (styles: any, state: any) => ({
        ...styles,
        fontSize: "14px",
        color: "#262626",
        fontWeight: 600,
        cursor: 'pointer',
        "&:hover": {
            background: "#ebedec"
        },
        background: state.isSelected ? "#c8c8c8" : "#f9f9f9"
    }),
    menu: (styles: any, state: any) => ({
        ...styles,
    }),
    indicatorSeparator: () => ({
        display: 'none', // убирает разделитель между стрелкой и полем
    }),
}


export const CustomSelect = ({
    className,
    placeholder,
    name,
    data,
    onChangeHandler
}: Props) => {
    const [isClient, setIsClient] = useState(false)
 
    useEffect(() => {
        setIsClient(true)
    }, [])

    const options = data.map((item: IDataSelect) => ({ value: item.id, label: item.name }))

    const funcOnChangeHandler = (selectedOption: ISelect | null) => {
        if (selectedOption) {
            onChangeHandler(selectedOption); // Передаем выбранное значение
        }
    }


    return (
        <>
            {
                isClient &&
                <Select 
                    // menuIsOpen
                    options={options} 
                    placeholder={placeholder} 
                    onChange={funcOnChangeHandler}
                    styles={CustomStyles}
                />
            }
        </>
    )
}

