/*jshint node:true*/
/*global document, L, navigator*/

"use strict";


var tag = require('tag'),
    container = document.querySelector('.js-content-container'),
    position = navigator.geolocation.getCurrentPosition(getPos),
    config = require('../config/config');

L.mapbox.accessToken = config.mapboxKey;

L.mapbox.map('map', 'havber.ki81jinj')
    .setView(position, 15);

function getPos(pos) {
    return [pos. coords. latitude, pos.coords.longitude];
}
