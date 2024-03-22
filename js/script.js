// Copyright (c) 2024 George, Khalil All rights reserved
//
// Created by: George, Khalil
// Created on: Mar 2024
// This file contains the JS functions for index.html

"use strict"

/**
 * This function calculates area of a triangle.
 */
function clickmybutton() {
  // input
  const baseOftriangle = parseInt(document.getElementById('Base-of-Triangle').value)
  const heightOftriangle = parseInt(document.getElementById('Height-of-Triangle').value)

  // process
  const areaOfRectangle = baseOftriangle * heightOftriangle / 2 ;
  // output
  document.getElementById('area').innerHTML 
  = 'Area is: ' + baseOftriangle * heightOftriangle / 2 + ' cm²'
}
