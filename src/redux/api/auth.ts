import { createApi } from "@reduxjs/toolkit/query/react";
import { axiosBaseQuery } from "../query/baseQuery";
import { endPoint } from "../query/endpoint";
import { ROLE_APP } from "@/model/variable";
import { QueryReturnType } from "@/dto/base";
import { AuthResponse, RegisterResponse } from "@/dto/response/auth";
import { LoginRequest, RegisterRequest } from "@/dto/request/auth";

export const authApi = createApi({
    reducerPath: "authApi",
    baseQuery: axiosBaseQuery(),
    endpoints: (builder) => ({
        login: builder.mutation<QueryReturnType<AuthResponse>, LoginRequest>({
            query: (payload) => ({
                ...endPoint.auth.loginGoogle(),
                data: {
                    ...payload,
                    role: ROLE_APP,
                },
            }),
        }),
        refreshToken: builder.mutation<QueryReturnType<AuthResponse>, null>({
            query: (payload) => ({
                ...endPoint.auth.refreshToken(),
                data: payload,
            }),
        }),

        register: builder.mutation<QueryReturnType<RegisterResponse>, RegisterRequest>({
            query: (payload) => ({
                ...endPoint.auth.register(),
                data: payload,
            }),
        }),
    })
});

export const {
    useLoginMutation,
    useRefreshTokenMutation,
    useRegisterMutation,
} = authApi;