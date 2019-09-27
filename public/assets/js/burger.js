// Make sure we wait to attach our handlers until the DOM is fully loaded.
console.log('public-assets-js-burger.js');
$(function () {
    $('#add-burger').on('click', function (event) {
        event.preventDefault();
        // console.log(this);
        var id = $(this).attr('id');
        // var newDevoured = $(this).data('devoured');
        // console.log('js - burger.js --> devoured --> ', newDevoured);

        var isDevoured = $('input[name=devoured]:checked').val();
        var burgerName = $('#bur').val().trim();

        var newBurger = {
            isDevoured: isDevoured,
            burgerName: burgerName
        };
        // console.log('newDevouredState --> ', newDevouredState);
        // Send the PUT request.
        $.ajax('/api/burgers/', {
            type: 'POST',
            data: newBurger
        }).then(
            function () {
                console.log('public burger.js --> Changed Devoured to --> ', newDevoured);
                // Reload the page to get the updated list
                location.reload();
            }
        );
    });

//     $('create-form').on('submit', function (event) {
//         // Make sure to preventDefault on a submit event.
//         event.preventDefault();
//         var newBurger = {
//             name: $('#bur').val().trim(),
//             devoured: $('[name=devoured]:checked').val().trim()
//         };
//         console.log('js - burger.js - newBurger --> ', newBurger.name)

//         // Send the POST request.
//         $.ajax('api/cats', {
//             type: 'POST',
//             data: newBurger
//         }).then(
//             function () {
//                 console.log('public --> cat.js --> created new burger');
//                 // Reload the page to get the updated list
//                 location.reload();
//             }
//         );
//     });
// });