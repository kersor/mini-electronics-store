import { createListenerMiddleware } from "@reduxjs/toolkit";
import { authApi } from "../auth/authApi";
import { setCookie } from "cookies-next/client"

export const middlewareAuth = createListenerMiddleware()

middlewareAuth.startListening({
    matcher: authApi.endpoints.login.matchFulfilled,
    effect: async (action, listenerApi) => {
        listenerApi.cancelActiveListeners()
        setCookie("access_token", action.payload.access_token)
    }
})