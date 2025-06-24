import { comments } from "./comments.js";

export const responseData = () => {
    const appComments = comments.map(comment => {
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
}
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