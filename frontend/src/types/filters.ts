import { ISelect } from "./select";

export interface IFormFilters {
    category: string[]
    price_min: string
    price_max: string
    color: string[]
    material: string[]
    sort: string
}