import { request } from "@/utils/request/interceptors";

// 用户登录
export const login = (data: object) => {
    // return request.post("/api/login", { username, password });
    return request.request({
        method: "post",
        url: "/api/login",
        data,
    });
}

// 注册用户
export const register = (data: object) => {
    return request.request({
        method: "post",
        url: "/api/register",
        data,
    });
}

// 获取用户权限
export const getPermissions = () => {
    return request.get("/api/permissions");
};