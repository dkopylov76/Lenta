import { comments } from "./comments.js";
import { fetchComments } from "./api.js";

export const appComments = comments.map(comment => {
        return {
            name: comment.author.name,
            date: comment.date,
            text: comment.text,
            likes: comment.likes,
            isLiked: false,
        }
    })
    console.log(appComments);
    // return appComments;

    // console.log(appComments);




// .then((responseData) => {
//       const appComments = responseData.comments.map((comment) => {
//         return {
//           name: comment.author.name,
//           date: comment.date,
//           text: comment.text,
//           likes: comment.likes,
//           isLiked: false,
//         };
//       });

//       return appComments;
//     });