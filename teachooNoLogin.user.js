// ==UserScript==
// @name         Teachoo fix
// @namespace    http://tampermonkey.net/
// @version      0.1
// @description  teachoo fix
// @author       You
// @match        *://*.teachoo.com/*
// @grant        none
// @require      https://code.jquery.com/jquery-3.3.1.slim.min.js
// @run-at       document-idle
// ==/UserScript==

(function() {
    $("body").removeClass();
    $("body").removeAttr("style");
    $("#body").removeAttr("style");
    $(".modal-backdrop").remove();
    $("#download-app-modal").remove();
    $(".modal").remove();
    setTimeout(function() {
        $(".modal").remove();
    }, 1000);
})();
