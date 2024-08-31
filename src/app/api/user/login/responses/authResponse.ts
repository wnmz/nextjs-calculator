import BaseResponse from "@/app/api/responses/baseResponse";

export interface AuthData {
    accessToken: string,
}

export default interface AuthResponse extends BaseResponse<AuthData> {};