import { modifyComments } from "./utils.js";

const server = "https://wedev-api.sky.pro/api/v1/dkopylov"

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
        body: JSON.stringify({
            text,
            name,
        })
        // .then((response) => {
        //     if (response.status === 201) {
        //         return response.json()
        //     } else {
        //         if (response.status === 500) {
        //             throw new Error("Ошибка сервера")
        //         }

        //         if (response.status === 400) {
        //             throw new Error("Неверный запрос")
        //         }
        //     }
        // })
    })
}