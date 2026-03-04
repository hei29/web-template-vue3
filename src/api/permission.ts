import { request } from "@/utils/request/interceptors";

// 用户登录
export const login = (username: string, password: string) => {
    return request.post("/api/login", { username, password });
}

// 注册用户
export const register = (username: string, password: string) => {
    return request.request({
        method: "post",
        url: "/api/register",
        data: { username, password },
    });
}

// 获取用户权限
export const getPermissions = () => {
    return request.get("/api/permissions");
};