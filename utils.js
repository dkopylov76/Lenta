import { comments } from "./comments.js";

export const appComments = comments.map(comment => {
            return {
                name: comment.author.name,
                date: comment.date,
                text: comment.text,
                likes: comment.likes,
                isLiked: false,
            }
        })   
    // return appComments;