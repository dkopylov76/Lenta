import { responseData } from "./utils.js";

const server = "https://wedev-api.sky.pro/api/v1/dkopylov"

export const fetchComments = () => {
    return fetch(server + "/comments").then((response) => {
        return response.json();
    })
    .then((responseData) => {
    //     // const appComments = responseData.comments.map(comment => {
    //     //     return {
    //     //         name: comment.author.name,
    //     //         date: comment.date,
    //     //         text: comment.text,
    //     //         likes: comment.likes,
    //     //         isLiked: false,
    //     //     }
    //     // })
        console.log(responseData);
        // return responseData();
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