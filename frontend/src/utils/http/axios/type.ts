export interface RequestOptions {
    // Whether to process the request result
    isTransformResponse?: boolean;
}

// 返回res.data的interface
export interface Response<T = any> {
    code: number | string;
    result: T;
    data: T;
    message: string;
    status: string | number;
}