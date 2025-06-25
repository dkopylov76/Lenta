export const modifyComments = (data) => {
    const appComments = data.comments.map(comment => {
        return {
            name: comment.author.name,
            date: comment.date,
            text: comment.text,
            likes: comment.likes,
            isLiked: false,
        }
    })
    return appComments;
}