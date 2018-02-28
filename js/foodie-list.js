"use strict";
console.log("it is working"); //making sure we are linked:)

//making a XHR to get ratting's
var XHR = new XMLHttpRequest(); //asigning a constant variable to the XHR

XHR.onload = function() {
    if(XHR.status === 200) {
        let data = JSON.parse(XHR.responseText);//asigning all of the json file to 
        console.log("data", data);
        
        //building up string with restRating with a for loop
        let restRating = "";
        let ratings = [];
        for (var i = 0; i < data.restaurants.length; i++) {
            ratings += data.restaurants[i].my_rating; //asigning all the restaurant ratings to ratings
            //console.log("first ratings", ratings);
        }
        console.log("second ratings", ratings);
        document.getElementById('restaurant-ratings').innerHTML = ratings.join('');
    }
};

XHR.open('GET', 'json/restaurants.json', true);
XHR.send();