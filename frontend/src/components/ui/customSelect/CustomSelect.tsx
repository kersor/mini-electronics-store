"use client"

import { ISelect } from '@/types/select'
import React, { ChangeEvent } from 'react'
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


export const CustomSelect = ({
    className,
    placeholder,
    name,
    data,
    onChangeHandler
}: Props) => {
    const options = data.map((item: IDataSelect) => ({ value: item.id, label: item.name }))

    const funcOnChangeHandler = (selectedOption: ISelect | null) => {
        if (selectedOption) {
            onChangeHandler(selectedOption); // Передаем выбранное значение
        }
    }


    return (
        <Select 
            options={options} 
            placeholder={placeholder} 
            onChange={funcOnChangeHandler}
            styles={{
                option: (provided: any, state: any) => ({
                    ...provided,
                    backgroundColor: state.isSelected ? '#b0b0b0' : 'transparent',  // Изменение фона
                    color: state.isSelected ? 'white' : 'black',  // Цвет текста при выборе
                    fontWeight: state.isSelected ? "700" : "400",
                    padding: '5px',  // Отступы
                    cursor: 'pointer',  // Курсор в виде руки
                    fontSize: '14px',
                    '&:hover': {
                      backgroundColor: '#efefef',  // Цвет фона при наведении
                      color: 'black',  // Цвет текста при наведении
                    },
                }),
                menu: (provided: any, state: any) => ({
                    ...provided,
                    border: '1px solid #b0b0b0',
                    borderRadius: '5px',
                    padding: '0'
                }),
                control: (provided: any, state: any) => ({
                    ...provided,
                    borderRadius: '8px',  // Радиус границ
                    borderColor: state.isFocused ? '#ccc' : '#ccc', // Цвет границы при фокусе и без фокуса
                    borderWidth: state.isFocused ? '1px' : state.isSelected ? '1px' : '1px',  // Толщина границы
                    boxShadow: state.isFocused ? '0 0 0 1px #ccc' : 'none',  // Тень при фокусе
                    '&:hover': {
                        borderColor: '#ccc',  // Цвет границы при наведении
                    },
                }),
                indicatorSeparator: () => ({
                    display: 'none', // убирает разделитель между стрелкой и полем
                }),
            }}
        />
    )
}

