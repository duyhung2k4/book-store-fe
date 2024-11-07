import { createApi } from "@reduxjs/toolkit/query/react";
import { axiosBaseQuery } from "../query/baseQuery";
import { endPoint } from "../query/endpoint";
import { CreateOrderReq } from "@/dto/request/order";

export const orderApi = createApi({
    reducerPath: "orderApi",
    baseQuery: axiosBaseQuery(),
    endpoints: (builder) => ({
        createOrder: builder.mutation<any, CreateOrderReq>({
            query: (payload) => ({
                ...endPoint.order.createOrder(),
                data: payload,
            }),
        }),
    })
});

export const {
    useCreateOrderMutation
} = orderApi;