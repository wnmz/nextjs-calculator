import AuthResponse from "@/app/api/user/types/authResponse";
import { User } from "@prisma/client";
import axios, { AxiosError, AxiosInstance, AxiosResponse } from "axios";
import Cookies from "js-cookie";

function getAuthorizationHeader() {
    const currentUser = Cookies.get("currentUser");

    return {
        Authorization: `Bearer ${JSON.parse(currentUser || "")?.accessToken || ""}`,
    };
}

export class AuthService {
    private static readonly instance: AxiosInstance = axios.create({
        baseURL: '/',
        timeout: 30000,
        timeoutErrorMessage: "Time out!",
    });

    public static login = async (email: string, password: string) => {
        let resp = await this.instance.post("/api/user/login", {
            email,
            password,
        });

        return resp.data;
    };

    public static register = async (email: string, password: string) => {
        let resp = await this.instance.post("/api/user/register", {
            email,
            password,
        });

        return resp.data;
    };

    public static getMe = () => {
        return this.instance
            .get(`/api/user/me`, {
                //headers: getAuthorizationHeader(),
            })
            .then((res) => {
                return res.data;
            });
    };

    public static logout = () => {
        Cookies.remove("token");
    }
}