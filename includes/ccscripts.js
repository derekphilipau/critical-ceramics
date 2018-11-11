/*
 * DO NOT REMOVE THIS NOTICE
 *
 * PROJECT:   Critical Ceramics Website
 * VERSION:   1.0
 * COPYRIGHT: (c) 2005 Forrest Snyder
 * LINK:      http://www.criticalceramics.org
 */

function createWindow(cwUrl,cwName,cwFeatures) {
	var xWin = window.open(cwUrl,cwName,cwFeatures)
}

function doCritWindow(page) {
OpenWin = this.open(page, "CritWindow", "height=500,width=375,toolbar=no,menubar=no,location=no,scrollbars=yes,resizable=no");
}

function resize() {
	window.resizeTo(800,600);
}

function loadImage(imageURL) {
	document.mainImage.src = imageURL;
	return true;
}