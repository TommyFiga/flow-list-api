export interface TaskHttpResponse<T> {
    code: number;
    description: string;
    data: T;
}
