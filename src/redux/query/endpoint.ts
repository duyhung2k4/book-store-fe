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
            Authorization: `Bearer ${token}`,
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
        loginGoogle: () => ({
            url: "public/login",
            method: "POST",
            headers: HEADER.defaultHeader(),
        }),
        refreshToken: () => ({
            url: "protected/refresh-token",
            method: "POST",
            headers: HEADER.refreshTokenHeader(),
        }),
        register: () => ({
            url: "auth/register",
            method: "POST",
            headers: HEADER.defaultHeader(),
        }),
        sendFileAuth: () => ({
            url: "auth/send-file-auth",
            method: "POST",
            headers: HEADER.authHeader(),
        }),
        createSocketAuthFace: () => ({
            url: "auth/create-socket-auth-face",
            method: "POST",
            headers: HEADER.authHeader(),
        }),
        faceLogin: () => ({
            url: "auth/auth-face",
            method: "POST",
            headers: HEADER.createSocket(),
        }),
        acceptCode: () => ({
            url: "auth/accept-code",
            method: "POST",
            headers: HEADER.authHeader(),
        }),
        saveProcess: () => ({
            url: "auth/save-process",
            method: "POST",
            headers: HEADER.authHeader(),
        }),
    },
    query: {
        query: (model: string) => ({
            url: `protected/query/${model}`,
            method: "POST",
            headers: HEADER.protectedHeader(),
        }),
    },
    schedule: {
        callMedicalFile: () => ({
            url: "protected/schedule/call-medical-file",
            method: "GET",
            headers: HEADER.protectedHeader(),
        }),
        pullMedicalFile: () => ({
            url: "protected/schedule/pull-medical-file",
            method: "POST",
            headers: HEADER.protectedHeader(),
        }),
        transit: () => ({
            url: "protected/schedule/transit",
            method: "POST",
            headers: HEADER.protectedHeader(),
        })
    },
    room: {
        addAccount: () => ({
            url: "protected/room/add-account",
            method: "POST",
            headers: HEADER.protectedHeader(),
        }),
        callStep: () => ({
            url: "protected/room/call-step",
            method: "GET",
            headers: HEADER.protectedHeader(),
        }),
        pullStep: () => ({
            url: "protected/room/pull-step",
            method: "POST",
            headers: HEADER.protectedHeader(),
        }),
        saveStep: () => ({
            url: "protected/room/save-step",
            method: "POST",
            headers: HEADER.protectedHeader(),
        }),
    }
}