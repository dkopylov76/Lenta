import { comments } from "./comments.js"

const server = "https://wedev-api.sky.pro/api/v1/dkopylov"

export const fetchComments = () => {
    return fetch(server + "/comments").then((response) => {
        return response.json()
    })
    .then((responseData) => {
        const appComments = responseData.comments.map(comment => {
            return {
                name: comment.author.name,
                date: new Date(comment.date),
                text: comment.text,
                likes: comment.likes,
                isLiked: false,
            }
        })

        return appComments;
    })
}