"use strict";


//making a XHR to get restaurant data
let loadRestraunts = () => {
    return new Promise((resolve, reject) => {
        let restDB = new XMLHttpRequest(); //asigning a constant variable to the XHR
        restDB.addEventListener('load', function() {
            let restData = JSON.parse(this.responseText);
            resolve(restData);
        });
        restDB.addEventListener('error', function() {
            reject();
        });
        restDB.open('GET', 'json/restaurants.json', true);
        restDB.send();
    });
};

//making a XHR to get city data
let loadCities = () => {
    return new Promise((resolve, reject) => {
        let cityDB = new XMLHttpRequest(); //asigning a constant variable to the XHR
        cityDB.addEventListener('load', function() {
            let cityData = JSON.parse(this.responseText);
            resolve(cityData);
        });
        cityDB.addEventListener('error', function() {
            reject();
        });
        cityDB.open('GET', 'json/cities.json', true);
        cityDB.send();
    });
};


module.exports = {loadCities, loadRestraunts};