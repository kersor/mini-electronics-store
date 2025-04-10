import { IFilter } from '@/scripts/types/filters'
import { create } from 'zustand'

interface State {
    favorites: any[]

    actions: {
        toggleFavorites: (payload: any) => void
        addAllFavorites: (payload: any[]) => void
    }
}

export const useFavorites = create<State>((set, get) => ({
    favorites: [],
    
    actions: {
        toggleFavorites: (payload: any) => {
            set((set) => {
                const favorites = get().favorites

                if (!favorites.length) {
                    return {
                        favorites: payload
                    }
                } else {
                    const favorite = favorites.filter((item: any) => item.id !== payload.id)
                    return {
                        favorites: favorite
                    }
                }

            })
        },

        addAllFavorites: (payload: any[]) => {
            set((set) => {
                return {
                    favorites: payload
                }
            })
        }
    }
}))
