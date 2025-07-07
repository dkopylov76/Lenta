import { fetchComments } from "./api.js";
// import { initAddCommentListener } from "./initListeners.js";
import { renderComments } from "./renderComments.js";
import { updateComments } from "./comments.js";


// document.querySelector(".comments-loading").innerHTML = 
//     'Немного подождите, комментарии загружаются...'

export const fetchAndRenderComments = () => {
    fetchComments().then((data) => {
        updateComments(data)
        renderComments()
    })
}

fetchAndRenderComments()

// initAddCommentListener(renderComments);