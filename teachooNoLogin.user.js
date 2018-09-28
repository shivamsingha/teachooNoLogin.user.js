// ==UserScript==
// @name         Teachoo fix
// @namespace    teachooNoLogin
// @version      1.0
// @license      MPL-2.0
// @description  teachoo fix
// @author       shivamsingha
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
    $(".modal-backdrop").remove();
    $("#download-app-modal").remove();
    $(".modal").remove();
    setTimeout(function() {
        $(".modal").remove();
    }, 1000);
})();
