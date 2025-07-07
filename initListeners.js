import { fetchComments, postComment } from "./api.js";
import { comments, updateComments } from "./comments.js";
import { sanitizeHtml } from "./sanitizeHtml.js";

export const initLikeListeners = (renderComments) => {
    const likeButtons = document.querySelectorAll(".like-button");

    for (const likeButton of likeButtons) {
        likeButton.addEventListener("click", (event) => {
            event.stopPropagation();
            const index = likeButton.dataset.index;
            const comment = comments[index];
            comment.likes = comment.isLiked ? comment.likes - 1 : comment.likes + 1;
            comment.isLiked = !comment.isLiked;

            renderComments();
        });
    }
}

export const initReplyListeners = () => {
    const text = document.getElementById("text-input");
    const commentsElements = document.querySelectorAll(".comment");

    for (const commentElement of commentsElements) {
        commentElement.addEventListener("click", () => {
            const currentComment = comments[commentElement.dataset.index];
            text.value = `${currentComment.name} > ${currentComment.text}`;
        })
    }
}

export const initAddCommentListener = (renderComments) => {
    const name = document.getElementById("name-input");
    const text = document.getElementById("text-input");
    const addButton = document.querySelector('.add-form-button');

    addButton.addEventListener('click', () => {
        if (!name.value || !text.value) {
            console.error("Заполните форму...");
            return;
        }
        
        document.querySelector(".form-loading").style.display = "block"
        document.querySelector(".add-form").style.display = "none"
        
        postComment(sanitizeHtml(text.value), sanitizeHtml(name.value))
            .then((response) => {
                if (response.status === 500) {
                    throw new Error("Ошибка сервера")
                }
                if (response.status === 400) {
                    throw new Error("Неверный запрос")
                }
                if (response.status === 201) {
                    return response.json()
                }
            })
            .then(() => {
                return fetchComments();
            })
            .then((data) => {
                document.querySelector(".form-loading").style.display = "none"
                document.querySelector(".add-form").style.display = "flex"
                updateComments(data);
                renderComments();
                name.value = "";
                text.value = "";
            }).catch((error) => {
                document.querySelector(".form-loading").style.display = "none"
                document.querySelector(".add-form").style.display = "flex"
                
                if (error.message === "Failed to fetch") {
                    alert("Кажется, у вас сломался интернет, попробуйте позже.")
                }
                if (error.message === "Ошибка сервера") {
                    alert("Сервер сломался, попробуй позже.")
                }
                if (error.message === "Неверный запрос") {
                    alert("Имя и комментарий должны быть не короче 3 символов.")

                    name.classList.add('-error')
                    text.classList.add('-error')

                    setTimeout(() => {
                        name.classList.remove('-error')
                        text.classList.remove('-error')
                    }, 2000)
                }
            })
        });
}