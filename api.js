import { modifyComments } from "./utils.js";

const server = "https://wedev-api.sky.pro/api/v2/dkopylov"
const authHost = "https://wedev-api.sky.pro/api/user"

export let token = ""

export const setToken = (newToken) => {
    token = newToken
}

export const fetchComments = () => {
    return fetch(server + "/comments")
    .then(response => {
        if (!response.ok) {
            throw new Error('Сетевой ответ не успешный');
        }
        return response.json();
    })
    .then(data => {
        return modifyComments(data);
    })
}

export const postComment = (text, name) => {
    return fetch(server + "/comments", {
        method: "POST",
        headers: {
            Authorization: `Bearer ${token}`,
        },
        body: JSON.stringify({
            text,
            name,
        })
    })
}

export const login = (login, password) => {
    return fetch(authHost + "/login", {
        method: "POST",
        body: JSON.stringify({
            login: login,
            password: password,
        })
    })
}

export const registration = (name, login, password) => {
    return fetch(authHost, {
        method: "POST",
        body: JSON.stringify({
            name: name,
            login: login,
            password: password,
        })
    })
}