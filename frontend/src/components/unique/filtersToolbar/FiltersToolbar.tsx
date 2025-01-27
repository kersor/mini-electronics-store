"use client"

import { CustomSelect } from "@/components/ui/customSelect/CustomSelect"
import { IFilters } from "@/types/filters"
import { ISelect } from "@/types/select"

interface Props {
    testSelect: any[]
    filters: IFilters
    setFilters: (data: ISelect) => void
}

export const FiltersToolbar = ({
    testSelect,
    filters,
    setFilters,
}: Props) => {
    return (
        <div className="mt-5">
            <CustomSelect
                placeholder="Выберите тип"
                name="type"
                data={testSelect}
                onChangeHandler={(data: ISelect) => setFilters(data)}
            />
        </div>
    )
}