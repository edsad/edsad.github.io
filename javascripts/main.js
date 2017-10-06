"use strict";
console.log("this is working finally");

function swapPic(eId, newPic) {
	document.getElementById(eId).src = newPic;
	console.log("pix works");
}