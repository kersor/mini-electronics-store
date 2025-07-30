"use client"

import { SectionHeaderLayout } from "@/react/sections/common/sectionHeader/SectionHeaderLayout";
import React, { PropsWithChildren, useEffect } from "react";
import { useSelfQuery } from "./user/userApi";
import { useUser } from "@/store/user.zustand";
import { useGetAllFavoritesQuery } from "./favorites/favoritesApi";
import { useFavorites } from "@/store/favorites.zustand";

export const ClientLayout = ({
    children
}: PropsWithChildren) => {
    const {setUser} = useUser(state => state)
    const {actions, favorites} = useFavorites(state => state)
    const {addAllFavorites} = actions

    const {data: DataFavorites} = useGetAllFavoritesQuery()
    const {data: dataSelf} = useSelfQuery()


    useEffect(() => {
        if (dataSelf) {
            let isAdmin = false

            dataSelf.roles.map((role: any) => {
                if (role.role.title === "ADMIN") isAdmin = true
            })

            setUser({
                ...dataSelf,
                isAdmin: isAdmin
            })
        }
    }, [dataSelf])

    useEffect(() => {
        if (DataFavorites) {
            addAllFavorites(DataFavorites)
        }
    }, [DataFavorites])


    return (
        <React.Fragment>
            <SectionHeaderLayout />
            {children}
        </React.Fragment>
    );
}
