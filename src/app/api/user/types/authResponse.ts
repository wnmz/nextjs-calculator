import BaseResponse from "@/app/api/responses/baseResponse";
import JwtPayload from "./jwtPayload";

export interface AuthData {
    accessToken: string,
    payload: JwtPayload
}

export default interface AuthResponse extends BaseResponse<AuthData> {};