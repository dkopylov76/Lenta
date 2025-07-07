import { fetchComments } from "./api.js";
import { renderComments } from "./renderComments.js";
import { updateComments } from "./comments.js";

export const fetchAndRenderComments = (isFirstLoading) => {

    if (isFirstLoading) {
        document.querySelector(".container").innerHTML = 
        `<p>Немного подождите, комментарии загружаются...</p>`
    }

    fetchComments().then((data) => {
        updateComments(data)
        renderComments()
    })
}

fetchAndRenderComments(true)