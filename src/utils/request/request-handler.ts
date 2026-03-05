import axios from 'axios';

// const host = `//${window.location.host}`;

const request = axios.create({
    baseURL: import.meta.env.VITE_API_BASE_URL || "/api",
    timeout: 30 * 1000,
});

export const createRequestInstance = (options?: { preHook?: (target, thisArg, argumentsList) => any }, axiosInstance?: any) => {
    const instance = axiosInstance ?? request;
    const handler = {
        apply: async function (target, thisArg, argumentsList) {
            const [argument] = argumentsList;
            const { url } = argument;
            options?.preHook && options.preHook(target, thisArg, argumentsList)
            let response = await target.apply(instance, argumentsList);
            if (['put'].includes(target.name)) {
                response = response.data;
            }
            const { code, ret, data, msg, message, detail, solution } = response;
            if (code === undefined && ret === undefined) {
                throw new Error(`接口${url}异常, 请联系管理员`);
            }
            if (code !== 0 && ret !== 0) {
                throw new Error(`Error: ${msg || detail || message } ${solution ? `Solution: ${solution}` : ''}`);
            }
            return data;
        },
    };

    const get: <T>(...args: any) => Promise<T> = new Proxy(instance.get, handler);
    const post: <T>(...args: any) => Promise<T> = new Proxy(instance.post, handler);
    const put: <T>(...args: any) => Promise<T> = new Proxy(instance.put, handler);
    const deleteRequest: <T>(...args: any) => Promise<T> = new Proxy(instance.delete, handler);
    return {
        get,
        post,
        put,
        deleteRequest,
    }
}
