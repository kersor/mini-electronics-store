import { isNumberObject } from "util/types";
import { rootApi } from "../rootApi";

export const userApi = rootApi.injectEndpoints({
    endpoints: (build) => ({
        self: build.query<any, void>({
            query: (body: any) => ({
                url: '/user/self',
            }),
        }),
    })
})

export const {
    useSelfQuery
} = userApi

