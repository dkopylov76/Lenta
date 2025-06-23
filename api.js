import { comments } from "./comments.js";

const server = "https://wedev-api.sky.pro/api/v1/dkopylov"

export const fetchComments = () => {
    return fetch(server + "/comments").then((response) => {
        return response.json();
        // console.log(response);
    })
    .then((responseData) => {
        const appComments = responseData.comments.map(comment => {
            return {
                name: comment.author.name,
                date: comment.date,
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