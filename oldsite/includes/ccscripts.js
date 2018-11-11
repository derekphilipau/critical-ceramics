/*
 * DO NOT REMOVE THIS NOTICE
 *
 * PROJECT:   Critical Ceramics Website
 * VERSION:   1.2
 * COPYRIGHT: (c) 2008 Forrest Snyder
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

/*
 * Below are the function calls for the OpenX banner system
 * These scripts get called by an include file which gets called from a page
 */


function openxbanner() {
   var m3_u = (location.protocol=='https:'?'https://criticalceramics.org/openx/www/delivery/ajs.php':'http://criticalceramics.org/openx/www/delivery/ajs.php');
   var m3_r = Math.floor(Math.random()*99999999999);
   if (!document.MAX_used) document.MAX_used = ',';
   document.write ("<scr"+"ipt type='text/javascript' src='"+m3_u);
   document.write ("?target=_blank");
   document.write ('&amp;cb=' + m3_r);
   if (document.MAX_used != ',') document.write ("&amp;exclude=" + document.MAX_used);
   document.write ("&amp;loc=" + escape(window.location));
   if (document.referrer) document.write ("&amp;referer=" + escape(document.referrer));
   if (document.context) document.write ("&context=" + escape(document.context));
   if (document.mmm_fo) document.write ("&amp;mmm_fo=1");
   document.write ("'><\/scr"+"ipt>");
}




function openxccbutton() {
   var m3_u = (location.protocol=='https:'?'https://www.criticalceramics.org/openx/www/delivery/ajs.php':'http://www.criticalceramics.org/openx/www/delivery/ajs.php');
   var m3_r = Math.floor(Math.random()*99999999999);
   if (!document.MAX_used) document.MAX_used = ',';
   document.write ("<scr"+"ipt type='text/javascript' src='"+m3_u);
   document.write ("?zoneid=2&amp;target=_blank");
   document.write ('&amp;cb=' + m3_r);
   if (document.MAX_used != ',') document.write ("&amp;exclude=" + document.MAX_used);
   document.write ("&amp;loc=" + escape(window.location));
   if (document.referrer) document.write ("&amp;referer=" + escape(document.referrer));
   if (document.context) document.write ("&context=" + escape(document.context));
   if (document.mmm_fo) document.write ("&amp;mmm_fo=1");
   document.write ("'><\/scr"+"ipt>");
}

function openxccpbutton() {
var m3_u = (location.protocol=='https:'?'https://www.criticalceramics.org/openx/www/delivery/ajs.php':'http://www.criticalceramics.org/openx/www/delivery/ajs.php');
   var m3_r = Math.floor(Math.random()*99999999999);
   if (!document.MAX_used) document.MAX_used = ',';
   document.write ("<scr"+"ipt type='text/javascript' src='"+m3_u);
   document.write ("?zoneid=4&amp;target=_blank");
   document.write ('&amp;cb=' + m3_r);
   if (document.MAX_used != ',') document.write ("&amp;exclude=" + document.MAX_used);
   document.write ("&amp;loc=" + escape(window.location));
   if (document.referrer) document.write ("&amp;referer=" + escape(document.referrer));
   if (document.context) document.write ("&context=" + escape(document.context));
   if (document.mmm_fo) document.write ("&amp;mmm_fo=1");
   document.write ("'><\/scr"+"ipt>");
}

function openxccbanner() {
   var m3_u = (location.protocol=='https:'?'https://www.criticalceramics.org/openx/www/delivery/ajs.php':'http://www.criticalceramics.org/openx/www/delivery/ajs.php');
   var m3_r = Math.floor(Math.random()*99999999999);
   if (!document.MAX_used) document.MAX_used = ',';
   document.write ("<scr"+"ipt type='text/javascript' src='"+m3_u);
   document.write ("?zoneid=1&amp;target=_blank");
   document.write ('&amp;cb=' + m3_r);
   if (document.MAX_used != ',') document.write ("&amp;exclude=" + document.MAX_used);
   document.write ("&amp;loc=" + escape(window.location));
   if (document.referrer) document.write ("&amp;referer=" + escape(document.referrer));
   if (document.context) document.write ("&context=" + escape(document.context));
   if (document.mmm_fo) document.write ("&amp;mmm_fo=1");
   document.write ("'><\/scr"+"ipt>");
}

function openxccpbanner() {
var m3_u = (location.protocol=='https:'?'https://www.criticalceramics.org/openx/www/delivery/ajs.php':'http://www.criticalceramics.org/openx/www/delivery/ajs.php');
   var m3_r = Math.floor(Math.random()*99999999999);
   if (!document.MAX_used) document.MAX_used = ',';
   document.write ("<scr"+"ipt type='text/javascript' src='"+m3_u);
   document.write ("?zoneid=3&amp;target=_blank");
   document.write ('&amp;cb=' + m3_r);
   if (document.MAX_used != ',') document.write ("&amp;exclude=" + document.MAX_used);
   document.write ("&amp;loc=" + escape(window.location));
   if (document.referrer) document.write ("&amp;referer=" + escape(document.referrer));
   if (document.context) document.write ("&context=" + escape(document.context));
   if (document.mmm_fo) document.write ("&amp;mmm_fo=1");
   document.write ("'><\/scr"+"ipt>");
}

