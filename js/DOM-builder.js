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

        for (let keys in data) {
            rData = data[keys];
        } 
        

        for (var i = 0; i < rData.length; i++){
            ratings.push(rData[i].my_rating);
            restraunts = rData[i].restaurant;
            both.push(rData[i].my_rating + ', ' + rData[i].restaurant);
        }

        
        both.sort();
        both.reverse();
        console.log('both', both);
        for (var x = 0; x < both.length; x++) {
            ratingsList += `<div>`;
            ratingsList += `<p>${both[x]}</p>`;
            ratingsList += `</div>`;
        }
        document.getElementById('restaurant-ratings').innerHTML = ratingsList;
    }    
);
}

sortRatings();


