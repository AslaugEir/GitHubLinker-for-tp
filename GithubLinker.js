// ==UserScript==
// @name         Github linker for targetprocess
// @version      0.1
// @author       Aslaug Eiriksdottir
// @match        https://*.tpondemand.com/*
// @grant        none
// ==/UserScript==

URL_FIRST_PART = "https://github.com/search?q=" 
URL_SECOND_PART = "&type=Issues&utf8=%E2%9C%93"

setTimeout(function () {
    var revids = document.querySelectorAll("td.revision-id");

    for (i = 0; i < revids.length; i++){
        // find the revision td element and the sha
        elem = revids[i];
        text = elem.innerText;
        sha = text.substring(2,text.length);
        
        // create the link element and insert it in the table cell
        var breakElem = document.createElement("br");
        var linkText = document.createTextNode("Find this on GitHub");
        var linkElement = document.createElement("a");
        var url = URL_FIRST_PART + sha + URL_SECOND_PART;
        linkElement.setAttribute('href', url);
        linkElement.appendChild(linkText);
        elem.appendChild(breakElem);
        elem.appendChild(linkElement);
    }
}, 4000);
