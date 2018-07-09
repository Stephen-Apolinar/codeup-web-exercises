// "use strict";
//
// var people = [
//     {
//         name: "Fred",
//         favColor: "red"
//     },
//     {
//         name: "Sally",
//         favColor: "blue"
//     },
//     {
//         name: "Tom",
//         favColor: "yellow"
//     }
// ];

// $(document).ready(function(){
//     $(people).each(function(i, el){
//         var li = document.createElement('li');
//         li.innerHTML = el.name;
//         $("#names-list")[0].appendChild(li);
//     });
//
//     $('button').click(function() {
//         $("#names-list").slideToggle();
//         $()
//     });
// });

$(document).ready(function() {
    "use strict";

    var people = [
        {
            name: "Fred",
            favColor: "red"
        },
        {
            name: "Sally",
            favColor: "blue"
        },
        {
            name: "Tom",
            favColor: "yellow"
        }
    ];

    function buildList(arrObjs) {
        var output = "";
        output += "<ul>";
        arrObjs.forEach(function(person) {
            output += "<li style='color:"+ person.favColor + "'>" + person.name + "</li>";
        });
        output += "</ul>";
        return output;
    }

    $('#add-names-btn').click(function() {
        $('#names-list').html(buildList(people));
    });

});



