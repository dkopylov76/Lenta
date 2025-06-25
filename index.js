import { fetchComments } from "./api.js";
import { initAddCommentListener } from "./initListeners.js";
import { renderComments } from "./renderComments.js";
import { updateComments } from "./comments.js";

fetchComments().then((data) => {
    updateComments(data);
    renderComments();
});

initAddCommentListener(renderComments);