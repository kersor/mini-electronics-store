import { ISelect } from "./select";

export interface IFormFilters {
    category: any[]
    price_min: string
    price_max: string
    color: any[]
    material: any[]
    sort: string
}

export interface IFilter {
    id: string,
    title: string
    hex?: string
}