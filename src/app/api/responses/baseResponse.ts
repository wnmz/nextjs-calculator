export default interface BaseResponse<T = any> {
    success: boolean,
    data?: T,
    error?: string
}

export function successResponse<T>(data: T): BaseResponse<T> {
    return {
        success: true,
        data: data
    }
}

export function errorRespose(error: string) {
    return {
        success: false,
        error: error
    }
}