import { createApi } from "@reduxjs/toolkit/query/react";
import { axiosBaseQuery } from "../query/baseQuery";
import { endPoint } from "../query/endpoint";
import { BookResponse } from "@/dto/response/book";
import { BookModelAllV2 } from "@/model_v2/book";

export const bookApi = createApi({
    reducerPath: "bookApi",
    baseQuery: axiosBaseQuery(),
    endpoints: (builder) => ({
        getBookByCategory: builder.query<BookResponse, number>({
            query: (payload) => ({
                ...endPoint.book.getByCategory(),
                params: {
                    category_id: payload,
                }
            }),
        }),
        getBookById: builder.query<BookModelAllV2, number>({
            query: (payload) => ({
                ...endPoint.book.getById(),
                params: {
                    id: payload,
                }
            }),
        }),
        
    })
});

export const {
    useGetBookByCategoryQuery,
    useGetBookByIdQuery,
} = bookApi;