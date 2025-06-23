export let comments = []

export const appComments = comments.map(comment => {
    return {
        name: comment.author.name,
        date: comment.date,
        text: comment.text,
        likes: comment.likes,
        isLiked: false,
    }
})

export const updateComments = newComments => {
    comments = newComments;
    console.log(comments);
}