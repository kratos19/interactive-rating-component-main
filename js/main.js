"use strict";

//Am selectat elementele cu clasa .rating-number
const ratingNumbers = document.querySelectorAll(".rating-number");
const submitButton = document.querySelector(".rating-button");
const firstCard = document.querySelector(".card-container");
const secondCard = document.querySelector(".thank-you-container");

//Parcurgem fiecare element cu clasa .rating-number 
ratingNumbers.forEach(ratingNumber => {
    //Adaug cate un eveniment click pe fiecare element 
    ratingNumber.addEventListener("click", (event) => {
        //parcurgem fiecare element si stergem clasa active
        ratingNumbers.forEach(number => {
            number.classList.remove('active');
        })
        //Adaugam clasa active la elementul curent
        event.target.classList.add('active');
    });
});

//Adaugam un eveniment tip click pe submitButton
submitButton.addEventListener("click", (event) => {
    //Definim o variabila activeRating si selectam elementul cu clasele .rating-number.active
    const activeRating = document.querySelector('.rating-number.active');
    //Verificam daca acriveRating este selectat, daca nu programul se opreste
    if (!activeRating) {
        alert("Please select a rating!");
        return false;
    }
    //Declaram o variabila acriveRatingHtml si ii dam continutul html al claselor .rating-number.active
    const activeRatingHtml = activeRating.innerHTML.trim();
    //Selectam clasa .selected-rating
    const selectedRating = document.querySelector(".selected-rating");
    //Setam continutul html al elemementului selectedRating
    selectedRating.innerHTML = activeRatingHtml;

    firstCard.style.display = "none";
    secondCard.style.display = "block";
})