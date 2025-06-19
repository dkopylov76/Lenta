import { fetchComments } from "./api.js";
import { initAddCommentListener } from "./initListeners.js";
import { renderComments } from "./renderComments.js";

fetchComments();

renderComments();

initAddCommentListener(renderComments);