let buttons = document.querySelectorAll("ul li button");
let submit = document.querySelector(".submit");
let rating = document.querySelector(".rating");
let thanks = document.querySelector(".thanks");
let ratingValue = document.querySelector(".rating-value");

buttons.forEach((button) => {
    button.addEventListener("click", () => {
        ratingValue.innerHTML = button.innerHTML;
    });
});

submit.addEventListener("click", () => {
    thanks.style.display = "block";
    rating.style.display = "none";
})