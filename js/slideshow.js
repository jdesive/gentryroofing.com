/*
 * Copyright 2018. This software is licenced under the Creative Commons NC-ND 4.0 International License.
 *
 * You should have received a copy of the license with the software, if not you can view it here https://creativecommons.org/licenses/by-nc-nd/4.0/legalcode.txt
 */

"use strict";

var slideIndex = [1,1,1,1];
var slideId = ["mySlides", "mySlides1", "mySlides2", "mySlides3"];

function plusSlides(n, no) {
    showSlides(slideIndex[no] += n, no);
}

function showSlides(n, no) {
    var i;
    var slides = document.getElementsByClassName(slideId[no]);
    if (n > slides.length) {slideIndex[no] = 1}
    if (n < 1) {slideIndex[no] = slides.length}
    for (i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
    }
    slides[slideIndex[no]-1].style.display = "block";
}