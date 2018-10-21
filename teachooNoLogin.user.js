// ==UserScript==
// @name         Teachoo fix
// @namespace    teachooNoLogin
// @version      1.2.1
// @license      MPL-2.0
// @description  Use teachoo.com without logging in or signing up. It just removes the annoying overlay elements. Nothing flashy.
// @author       shivamsingha
// @icon         https://cdn.jsdelivr.net/gh/shivamsingha/teachooNoLogin.user.js/teachoo_icon.png
// @homepage     https://github.com/shivamsingha/teachooNoLogin.user.js
// @supportURL   https://github.com/shivamsingha/teachooNoLogin.user.js/issues
// @updateURL    https://cdn.jsdelivr.net/gh/shivamsingha/teachooNoLogin.user.js/teachooNoLogin.user.js
// @downloadURL  https://cdn.jsdelivr.net/gh/shivamsingha/teachooNoLogin.user.js/teachooNoLogin.user.js
// @match        *://*.teachoo.com/*
// @grant        none
// @require      https://cdn.jsdelivr.net/gh/jquery/jquery/dist/jquery.slim.min.js
// @run-at       document-idle
// ==/UserScript==

(function() {
    $("body").removeAttr("class");
    $("[style*='display']").removeAttr("style");

    $(".modal-backdrop").remove();
    $("#download-app-modal").remove();
    $(".modal").remove();
    $("#banner").remove();
    $(".aboutAuthor").remove();
    setTimeout(function() {
        $(".modal").remove();
    }, 1000);
})();
