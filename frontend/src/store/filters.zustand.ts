import { IFilter } from '@/scripts/types/filters'
import { create } from 'zustand'

interface State {
    filters: {
        category: IFilter[],
        color: IFilter[],
        material: IFilter[],
        sort: IFilter[],
        price_min: string,
        price_max: string,
    },
    checkedFilters: {
        category: string[],
        color: IFilter[],
        material: IFilter[],
        sort: IFilter,
        price_min: string,
        price_max: string,
    }

    actions: {
        addFilters: (paylaod: any) => void
        addFilter: (payload: AddFilter) => void
        addFilterS: (payload: any) => void
    }
}

interface AddFilter {
    type: string
    data: IFilter[] | string | any
}

export const useFilters = create<State>((set, get) => ({
    filters: {
        category: [],
        color: [],
        material: [],
        sort: [],
        price_min: "",
        price_max: "",
    },
    checkedFilters: {
        category: [],
        color: [],
        material: [],
        sort: {
            id: "",
            title: ""
        },
        price_min: "",
        price_max: "",
    },
    
    actions: {
        addFilters: (paylaod: any) => {
            set((set) => {
                return {
                    filters: {
                        ...set.filters,
                        ...paylaod
                    }
                }
            })
        },
        addFilter: (payload: AddFilter) => {
            const {type, data} = payload

            set((set) => {
                return {
                    checkedFilters: {
                        ...set.checkedFilters,
                        [type]: data
                    }
                }
            })
        },
        addFilterS: (payload: any) => {

            set((set) => {
                return {
                    checkedFilters: {
                        ...set.checkedFilters,
                        ...payload
                    }
                }
            })
        },
    }
}))
