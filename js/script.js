// Copyright (c) 2024 George, Khalil All rights reserved
//
// Created by: George, Khalil
// Created on: Mar 2024
// This file contains the JS functions for index.html

"use strict"

/**
 * This function calculates area of a triangle.
 */
function calculatePermeterAndAreaOfRectangle () {
  // input
  const baseoftriangle = parseInt(document.getElementById('Base-Of-Triangle').value)
  const heightoftriangle = parseInt(document.getElementById('Height-Of-Triangle').value)

  // process
  const areaOfTriangle = baseoftriangle * heightoftriangle /2

  // output
  document.getElementById('area').innerHTML = 
  "Area is: " + baseoftriangle + heightoftriangle + ' cm²'
}
