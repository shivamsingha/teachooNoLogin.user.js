// ==UserScript==
// @name         Teachoo fix
// @namespace    teachooNoLogin
// @version      1.1
// @license      MPL-2.0
// @description  Use teachoo.com without logging in or signing up. It just removes the annoying overlay elements. Nothing flashy.
// @author       shivamsingha
// @icon         https://raw.githubusercontent.com/shivamsingha/teachooNoLogin.user.js/master/teachoo_icon.png
// @homepage     https://github.com/shivamsingha/teachooNoLogin.user.js
// @supportURL   https://github.com/shivamsingha/teachooNoLogin.user.js/issues
// @updateURL    https://github.com/shivamsingha/teachooNoLogin.user.js/raw/master/teachooNoLogin.user.js
// @downloadURL  https://github.com/shivamsingha/teachooNoLogin.user.js/raw/master/teachooNoLogin.user.js
// @match        *://*.teachoo.com/*
// @grant        none
// @require      https://code.jquery.com/jquery-3.3.1.slim.min.js
// @run-at       document-idle
// ==/UserScript==

(function() {
    $("body").removeClass();
    $("body").removeAttr("style");
    $("#body").removeAttr("style");
    $(".container").removeAttr("style");
    $(".modal-backdrop").remove();
    $("#download-app-modal").remove();
    $(".modal").remove();
    $("#banner").remove();
    $(".aboutAuthor").remove();
    setTimeout(function() {
        $(".modal").remove();
    }, 1000);
})();
