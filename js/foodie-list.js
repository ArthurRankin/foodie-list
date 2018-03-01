"use strict";
console.log("it is working"); //making sure we are linked:)



//making a XHR to get data
let loadxhr = () => {
    return new Promise((resolve, reject) => {
        let data = new XMLHttpRequest(); //asigning a constant variable to the XHR
        data.addEventListener('load', function() {
            let restData = JSON.parse(this.responseText);
            resolve(restData);
        });
        data.addEventListener('error', function() {
            reject();
        });
        data.open('GET', 'json/restaurants.json', true);
        data.send();
    });
};



let BigOleFunction = () => {
    loadxhr().then((json) => {  //USING THEN TO RUN THE LOADXHR FUNCTION AND THEN RUN FILL EMPTY ARRAYS WITH DATA
        let ratings = [];
        let restName = [];
        let restId = [];     //MADE EMPTY ARRAYS TO PUT ALL THE DATA I NEED IN
        let citId = [];
        let lastVisit = [];     
        
        for (var i = 0; i < json.restaurants.length; i++) {
            ratings.push(json.restaurants[i].my_rating);
            restName.push(json.restaurants[i].restaurant);    //PUT ALL DATA I NEED INTO ARRAYS TO USE AS I SEE FIT
            restId.push(json.restaurants[i].city_id);
            citId.push(json.restaurants[i].city_id);
            lastVisit.push(json.restaurants[i].date_visited);
        }   

        // console.log('ratings', ratings);
        // console.log('restName', restName);
        // console.log('restId', restId);
        // console.log('citId', citId);
        // console.log('lastVisit', lastVisit);
        
        
        ratings.sort(function(a, b){
            return b - a;            //SORTING THE RATINGS FORM HIGHEST TO LOWEST
        });
        for (var x = 0; x < ratings.length; x++){
            if(ratings[x] === json.restaurants.my_rating) {}
             
        }
    }
);
};


BigOleFunction(); //CALLING MY BIG OLE FUNCTION


