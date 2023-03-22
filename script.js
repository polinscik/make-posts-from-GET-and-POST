function getHTMLPost(postObject) {
    let htmlPost = "";
    htmlPost += `<div class="post">
    <h3 class="post__title">${postObject.title}</h3>
    <p class="post__body">${postObject.body}</p>
    </div>`;
    return htmlPost;
}

function addHTMLtoPage(HTML, container) {
    container.innerHTML += HTML;
}

function getPost() {
    fetch("https://jsonplaceholder.typicode.com/posts", { method: "GET" })
        .then((result) => {
            return result.json();
        })
        .then((json) => {
            console.log(json);
            json.forEach((post) => {
                let htmlPost = getHTMLPost(post);
                addHTMLtoPage(htmlPost, postContainer);
            });
        })
        .catch((err) => console.log(err));
}

const postContainer = document.getElementById("postContainer");

getPost();
