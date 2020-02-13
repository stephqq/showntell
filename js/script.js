$(document).ready(function() {
    myApp.init();
});

const myApp = {};

myApp.init = function() {
    myApp.grabDOMElements();
    myApp.runInterval();
}

myApp.grabDOMElements = function() {
    myApp.$h1 = $('h1');
}

myApp.runInterval = function() {
    setInterval(function() {
        if (myApp.$h1.css('background-color') === 'rgb(219, 112, 147)') {
            myApp.$h1.css('background-color', 'rgb(165, 169, 147)');
        } else if (myApp.$h1.css('background-color') === 'rgb(165, 169, 147)') {
            myApp.$h1.css('background-color', 'rgb(219, 112, 147)');
        }
    }, 3000);
}