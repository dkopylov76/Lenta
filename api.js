import { comments } from "./comments.js"

const server = "https://wedev-api.sky.pro/api/v1/dkopylov"

export const fetchComments = () => {
    return fetch(server + "/comments").then((response) => {
        return response.json()
    })
    .then((responseData) => {
        const appComments = responseData.comments.map(comment => {
            let currentDate = new Date();
            const options = {
                day: 'numeric', month: 'numeric', year: '2-digit', hour: 'numeric', minute: 'numeric'
            }
            return {
                name: comment.author.name,
                date: currentDate.toLocaleDateString('ru-RU', options),
                text: comment.text,
                likes: comment.likes,
                isLiked: false,
            }
        })

        return appComments;
    })
}

export const postComment = (text, name) => {
    return fetch(server + "/comments", {
        method: "POST",
        body: JSON.stringify({
            text,
            name,
        }),
    })
    .then(() => {
        return fetchComments();
    })
}