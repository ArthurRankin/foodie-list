"use strict";
let db = require('./interaction');

let rData = [];
let ratings = [];
let both = [];
let ratingsList = " ";
let restraunts = [];

function sortRatings() {
    db.loadRestraunts()
    .then((data) => {
        let keys = Object.keys(data);

        //PUTTING RESLOVE INTO RDATA TO PULL DATA FROM
        for (let keys in data) {
            rData = data[keys];
        } 

        //PUSHING THE RATINGS AND RESTRAUNT NAMES INTO AN ARRAY I CAN THEN SORT
        for (var i = 0; i < rData.length; i++){
            both.push(rData[i].my_rating + ', ' + rData[i].restaurant);
        }

        //SORTING THE ARRAY
        both.sort();

        //IT CAME OUT LOWEST TO HIGHTEST SO I REVERSED THE ARRAY
        both.reverse();   
        //console.log('both', both);

        //LOOPING THROUGH THE SORTED ARRAY TO BUILD A STRING TO PRINT TO DOM
        for (var x = 0; x < both.length; x++) {
            ratingsList += `<div>`;
            ratingsList += `<p class="rated-cards">${both[x]}</p>`;
            ratingsList += `</div>`;
        }
        //PRINTING THE ARRAY
        document.getElementById('restaurant-ratings').innerHTML = ratingsList;
    }    
);
}

sortRatings();


