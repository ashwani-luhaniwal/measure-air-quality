const config = require('../config/config.js');
const db = require('../config/database.js');
const fetch = require('node-fetch');
const util = require('util');
const mysql = require('mysql');
const sleep = require('system-sleep');

function Aqicn() {
    if (!(this instanceof Aqicn)) { return new Aqicn(); }
    this.token = '422f75eea7c85c9395809b6530ddebbc8f4413c6';
    this.LATLNG = '59.3174911,18.0493047,60.3174911,19.0493047'; // map bounds latitude and longitude
}

// Get Sockholm based on IP location
Aqicn.prototype.getStationsBasedOnIP = function() {
    fetch('https://api.waqi.info/feed/here/?token=' + this.token)
        .then(function(response) {
            return response.json();
        })
        .then(function(json) {
            console.log(json.data);
        })
        .catch(function(error) {
            console.log(error);
        });
}

// Search data for a specific city
Aqicn.prototype.searchStations = function(keyword) {
    fetch('https://api.waqi.info/search/?token=' + this.token + '&keyword=' + keyword)
        .then(function(response) {
            return response.json();
        })
        .then(function(results) {
            console.log(results.data);
        })
        .catch(function(error) {
            console.log(error);
        });
}

// Get station data for specific maps bounds using marker on map
Aqicn.prototype.setStations = function() {
    let url = 'https://api.waqi.info/map/bounds/?latlng=' + this.LATLNG + '&token=' + this.token;
    fetch(url)
        .then((response) => {
            return response.json();
        })
        .then((results) => {
            console.log(results);
            for (var station in results.data) {
                var url = 'https://api.waqi.info/feed/geo:' + results.data[station].lat + ';' + results.data[station].lon + '/?token=' + this.token;
                fetch(url)
                    .then((response) => {
                        return response.json();
                    })
                    .then((stationData) => {
                        console.log(stationData);
                    })
                    .catch((error) => {
                        console.log(error);
                    });
            }
        })
        .catch((error) => {
            console.log(error);
        });
}

var obj = new Aqicn();
obj.searchStations('stockholm');