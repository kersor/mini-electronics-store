import { IFilter } from '@/scripts/types/filters'
import { create } from 'zustand'

interface State {
    user: any
    setUser: (payload: any) => void
}

export const useUser = create<State>((set, get) => ({
    user: {},
    setUser: (payload: any) => {
        set((set) => {
            return {
                user: payload
            }
        })
    }
}))
