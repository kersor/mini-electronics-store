"use client"

import { SectionHeaderLayout } from "@/react/sections/common/sectionHeader/SectionHeaderLayout";
import React, { PropsWithChildren, useEffect } from "react";
import { useSelfQuery } from "./user/userApi";
import { useUser } from "@/store/user.zustand";

export const ClientLayout = ({
    children
}: PropsWithChildren) => {
    const {setUser} = useUser(state => state)

    const {data: dataSelf} = useSelfQuery()

    useEffect(() => {
        if (dataSelf) {
            setUser(dataSelf)
        }
    }, [dataSelf])

    return (
        <React.Fragment>
            <SectionHeaderLayout />
            {children}
        </React.Fragment>
    );
}
