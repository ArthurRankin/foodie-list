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

        //PUTTING RESLOVE INTO RDATA TO PULL DATA FROM*********************
        for (let keys in data) {
            rData = data[keys];
        } 

        //PUSHING THE RATINGS AND RESTRAUNT NAMES INTO AN ARRAY I CAN THEN SORT
        for (var i = 0; i < rData.length; i++){
            both.push(rData[i].my_rating + ', ' + rData[i].restaurant);
        }

        //SORTING THE ARRAY***********************************************
        both.sort();

        //IT CAME OUT LOWEST TO HIGHTEST SO I REVERSED THE ARRAY**********
        both.reverse();   
        //console.log('both', both);

        //LOOPING THROUGH THE SORTED ARRAY TO BUILD A STRING TO PRINT TO DOM
        for (var x = 0; x < both.length; x++) {
            ratingsList += `<div>`;
            ratingsList += `<p class="rated-cards">${both[x]}</p>`;
            ratingsList += `</div>`;
        }
        //PRINTING THE ARRAY*********************************************
        document.getElementById('restaurant-ratings').innerHTML = ratingsList;
    }    
);
}
sortRatings();

let restD;
let cityD;
let cityID = [];
let citySelect = '';
let filteredCities = [];
let select = document.getElementById('select-area');

function matchCities() {
    //GRABING RESTRAUNT DATA********************************************
    db.loadRestraunts().then((restData) => {
        for (let keys in restData){
            restD = restData[keys];
        }
        
        console.log('this is your restraunt data', restD.city_id);
        $("#select-area").change(function(event) {
            let value = event.target.value;
            console.log('this is the selector value', value);
            for (var a = 0; a < restD.length; a++) {
                if(restD[a].city_id == value){
                    cityID += `<div>${restD[a].restaurant}</div>`;
                }
            }
            document.getElementById('city-rests').innerHTML = cityID;
            console.log('this is the city ids', cityID);
        });
    });
}




function citySelector() {
    //GRABING CITY DATA*********************************************
    db.loadCities().then((cityData) => {
        for (let keys in cityData){
            cityD = cityData[keys];
        }
        //console.log('cityD', cityD);
        
        //LOOPING THROUGH CITY DATA TO GET THE CITY NAMES AND ID'S***********
        for (var i = 0; i < cityD.length; i++) {
            //BUILDING STRING FOR SELECTOR************************
            citySelect += `<option value=${cityD[i].id}>${cityD[i].city}</option>`;
        }
        //console.log("citySelect", citySelect);
        document.getElementById('select-area').innerHTML = citySelect;
    });
}




matchCities();
citySelector();
