$(document).ready(function() {
    myApp.init();
});

const myApp = {};

myApp.init = function() {
    myApp.grabDOMElements();
    myApp.runInterval();
    myApp.listenUp();
}

myApp.grabDOMElements = function() {
    myApp.$h1 = $('h1');
    myApp.$switch = $('.switch');
    myApp.$element = $('.ex-content');
    myApp.$darkMode = $('.light-dark');
    myApp.$darkDiv = $('.dark-mode-screen');
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

myApp.listenUp = function() {
    myApp.$switch.on('click', function(e) {
        e.preventDefault();

        if (myApp.$element.css('mix-blend-mode') === 'normal') {
            myApp.$element.css('mix-blend-mode', 'multiply');
            myApp.$switch.text('switch to: difference');
        } else if (myApp.$element.css('mix-blend-mode') === 'multiply') {
            myApp.$element.css('mix-blend-mode', 'difference');
            myApp.$switch.text('switch to: overlay');
        } else if (myApp.$element.css('mix-blend-mode') === 'difference') {
            myApp.$element.css('mix-blend-mode', 'overlay');
            myApp.$switch.text('switch to: color');
        } else if (myApp.$element.css('mix-blend-mode') === 'overlay') {
            myApp.$element.css('mix-blend-mode', 'color');
            myApp.$switch.text('switch to: normal');
        } else if (myApp.$element.css('mix-blend-mode') === 'color') {
            myApp.$element.css('mix-blend-mode', 'normal');
            myApp.$switch.text('switch to: multiply');
        }

    });

    myApp.$darkMode.on('click', function(e) {
        e.preventDefault();

        if (myApp.$darkDiv.css('opacity') === '0') {
            myApp.$darkDiv.css('opacity', '1');
            myApp.$darkMode.css('background', 'white');
        } else {
            myApp.$darkDiv.css('opacity', '0');
            myApp.$darkMode.css('background', 'black');
        }
    });
}