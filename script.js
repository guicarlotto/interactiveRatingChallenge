const form = document.querySelector("[data-js-form]");
const template = document.querySelector("[data-js-template]");

function handleSubmit(event) {
    event.preventDefault();

    const rating = new FormData(event.target).get("rating");
    console.log(rating);
}

form.addEventListener("submit", handleSubmit);