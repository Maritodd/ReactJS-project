import * as axios from "axios";

const instance = axios.create({
    withCredentials: true,
    baseURL: `https://social-network.samuraijs.com/api/1.0/`,
    headers: {
        "API-KEY": "1ace4ec1-ca77-490a-9606-37ff1731a37c"
    }
});

export const usersAPI = {
    getUser(currentPage, pageSize) {
        return instance.get(`users?page=${currentPage}&count=${pageSize}`).then(response => response.data);
    },

    getFollow(userId) {
        return instance.post(`follow/${userId}`, {}).then(response => response.data);
    },

    getUnFollow(userId) {
        return instance.delete(`follow/${userId}`).then(response => response.data);
    },
};

export const profileAPI = {
    getProfiles(userId) {
        return instance.get(`profile/` + userId);
    },

    setStatus(usersId) {
        return instance.get(`profile/status/` + usersId);
    },
    updateStatus(status) {
        return instance.put(`profile/status`, { status: status });
    },
};

export const loginAPI = {
    getLogin() {
        return instance.get(`auth/me`).then(response => response.data);
    },
};
