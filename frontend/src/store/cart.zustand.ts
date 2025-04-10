import { IFilter } from '@/scripts/types/filters'
import { create } from 'zustand'

interface State {
    cart: any[]

    actions: {
        toggleCart: (payload: any) => void
        addAllCart: (payload: any[]) => void
    }
}

export const useCart = create<State>((set, get) => ({
    cart: [],
    
    actions: {
        toggleCart: (payload: any) => {
            set((set) => {
                const cart = get().cart

                if (!cart.length) {
                    return {
                        cart: payload
                    }
                } else {
                    const favorite = cart.filter((item: any) => item.id !== payload.id)
                    return {
                        cart: favorite
                    }
                }

            })
        },

        addAllCart: (payload: any[]) => {
            set((set) => {
                return {
                    cart: payload
                }
            })
        }
    }
}))
