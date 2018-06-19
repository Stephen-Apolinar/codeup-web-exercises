(function(){
    "use strict";

    var planets = [
        'Mercury',
        'Venus',
        'Earth',
        'Mars',
        'Jupiter',
        'Saturn',
        'Uranus',
        'Neptune'
    ];

    /**
     * TODO:
     * Read each console log below, and write some javascript code to perform
     * the step that it describes
     */

    console.log(planets.unshift("The Sun"));
    console.log(planets);

    console.log(planets.push("Pluto"));
    console.log(planets);

    var sunGone = planets.shift();
    console.log("the sun is gone" + sunGone);
    console.log(planets);

    var removePluto = planets.pop();
    console.log('Removing "Pluto" from the end of the planets array.' + removePluto);
    console.log(planets);

    var index = planets.indexOf('Earth');
    console.log(index);


    planets.reverse();
    console.log(planets);

    planets.sort();
    console.log(planets);
})();