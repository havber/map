/*jshint node:true*/
/*global document, L, navigator*/

"use strict";


var tag       = require('tag'),
    container = document.querySelector('.js-content-container'),
    config    = require('../../config/config');

//console.log(position);
L.mapbox.accessToken = config.mapboxKey;

var map = L.mapbox.map('map', 'havber.ki81jinj').
        setView([60.39, 5.32], 16);

navigator.geolocation.watchPosition(
    function onSuccess(pos) {
        var latLng = L.latLng(pos.coords.latitude, pos.coords.longitude),
            marker = L.circleMarker(latLng);
        console.log(latLng);
        map.panTo(latLng);
        marker.addTo(map);
    },
    function onError() {

    },
    {}
);
