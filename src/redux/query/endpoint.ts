import Cookies from "js-cookie";
import { TOKEN_TYPE } from "@/model/variable";



export const HEADER = {
    defaultHeader: () => ({
        accept: 'application/json',
    }),
    refreshTokenHeader: () => {
        const token = Cookies.get(TOKEN_TYPE.REFRESH_TOKEN);
        return {
            accept: 'application/json',
            Authorization: `Bearer ${token}`,
        }
    },
    protectedHeader: () => {
        const token = Cookies.get(TOKEN_TYPE.ACCESS_TOKEN);
        return {
            accept: 'application/json',
            Authorization: `Bearer ${token}`,
        }
    },
    authHeader: () => {
        const token = Cookies.get(TOKEN_TYPE.PROFILE_UUID_PENDING);
        return {
            accept: 'application/json',
            Authorization: `${token}`,
        }
    },
    createSocket: () => {
        const token = Cookies.get(TOKEN_TYPE.SOCKET_AUTH);
        return {
            accept: 'application/json',
            Authorization: `Bearer ${token}`,
        }
    }
}

export const endPoint = {
    auth: {
        login: () => ({
            url: "auth/login",
            method: "POST",
            headers: HEADER.defaultHeader(),
        }),
        register: () => ({
            url: "auth/register",
            method: "POST",
            headers: HEADER.defaultHeader(),
        }),
        getUserById: () => ({
            url: "auth/get_user_by_id",
            method: "GET",
            headers: HEADER.defaultHeader(),
        })
    },
    query: {
        query: (model: string) => ({
            url: `protected/query/${model}`,
            method: "POST",
            headers: HEADER.protectedHeader(),
        }),
    },
    category: {
        getAll: () => ({
            url: "book/category",
            method: "GET",
            headers: HEADER.defaultHeader(),
        })
    },
    book: {
        getByCategory: () => ({
            url: "book/get_books_by_category_id",
            method: "GET",
            headers: HEADER.defaultHeader(),
        }),
        getById: () => ({
            url: "book/get_book_by_id",
            method: "GET",
            headers: HEADER.defaultHeader(),
        })
    },
    review: {
        getReview: () => ({
            url: "review/get_reviews_by_books",
            method: "GET",
            headers: HEADER.defaultHeader(),
        }),
        createReview: () => ({
            url: "review/create_review",
            method: "POST",
            headers: HEADER.protectedHeader(),
        }),
        delete: () => ({
            url: "review/delete_review",
            method: "DELETE",
            headers: HEADER.protectedHeader(),
        }),
    },
    order: {
        createOrder: () => ({
            url: "order/create_orders",
            method: "POST",
            headers: HEADER.protectedHeader(),
        })
    }
}