import { modifyComments } from "./utils.js";

const server = "https://wedev-api.sky.pro/api/v1/dkopylov"

export const fetchComments = () => {
    return fetch(server + "/comments").then(response => {
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
        body: JSON.stringify({
            text,
            name,
        })
    })
}