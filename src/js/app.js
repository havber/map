/*jshint node:true*/
/*global document*/

"use strict";


var tag = require('tag'),
    container = document.querySelector('.js-content-container');

container.appendChild(tag.h1('Hepparoo!'));
