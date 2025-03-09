import { ISelect } from "./select";

export interface IFormFilters {
    category: IFilter[] | any[]
    price_min: string
    price_max: string
    color: IFilter[] | []
    material: IFilter[] | []
    sort: string
}

export interface IFilter {
    id: string,
    title: string
    hex?: string
}