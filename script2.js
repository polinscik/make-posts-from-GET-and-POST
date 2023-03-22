function createPost() {
    fetch("https://jsonplaceholder.typicode.com/posts", {
        method: "POST",
        body: JSON.stringify({
            title: titleInput.value,
            body: bodyInput.value,
        }),
        headers: {
            "Content-type": "application/json; charset=UTF-8",
        },
    })
        .then((response) => response.json())
        .then((json) => {
            let htmlPost = `<div class="post">
            <h3 class="post__title">${json.title}</h3>
            <p class="post__body">${json.body}</p>
            </div>`;
            container.innerHTML += htmlPost;
        })
        .catch((err) => console.log(err));
}

const titleInput = document.getElementById("titleValue");
const bodyInput = document.getElementById("bodyValue");
const btn = document.getElementById("postBtn");
const container = document.getElementById("postContainer");

btn.addEventListener("click", () => {
    createPost();
    titleInput.value = "";
    bodyInput.value = "";
    checkInputs();
});

function checkInputs() {
    if (!titleInput.value && !bodyInput.value) {
        btn.setAttribute("disabled", "true");
    } else {
        btn.removeAttribute("disabled");
    }
}
checkInputs();
titleInput.addEventListener("input", () => {
    checkInputs();
});
bodyInput.addEventListener("input", () => {
    checkInputs();
});
