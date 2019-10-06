// Make sure we wait to attach our handlers until the DOM is fully loaded.
console.log('public-assets-js-burger.js');
$(function () {

    // adding a burger 
    $('#add-burger').on('click', function (event) {
        event.preventDefault();

        // var isDevoured = $('input[name=isDevoured]:checked').val();
        var burgerName = $('#bur').val().trim();

        var newBurger = {
            isDevoured: 0,
            burgerName: burgerName
        };
        // console.log('newDevouredState --> ', newDevouredState);
        // Send the PUT request.
        $.ajax('/api/burgers/', {
            type: 'POST',
            data: newBurger
        }).then(
            function () {
                console.log('public burger.js --> Changed Devoured to --> ', newBurger.isDevoured);
                // Reload the page to get the updated list
                // console.log('js/burger.js isDevoured line 9 -->' + newBurger.isDevoured);
                // console.log('js/burger.js burgerName line 10 -->' + newBurger.isDevoured);
                location.reload();
            });

    });

    // changing the burger "state" devoured/not devoured to devoured/not devoured

    $('.change-devoured').on('click', function (event) {
        event.preventDefault();
        // console.log('this in burger.js line 6--> ');
        // console.log(this);
        var id = $(this).attr('id');
        // console.log('id --> is ' + id);
        // var switchBurger = $('input[name=isDevoured]:checked').val();
        // console.log('js/burger.js switchBurger line 38 -->' + switchBurger);
        var switchBurger = 1;


        var switchBurgerState = {
            isDevoured: switchBurger
        };
        // send the PUT request
        $.ajax('/api/burgers/' + id, {
            type: 'PUT',
            data: switchBurgerState
        }).then(
            function () {
                console.log('js/burger.js line 45 changed burger to --> ' + switchBurger);
                // reload the page to get the updated list
                location.reload();
            }
        )
    });

    $(".delete-burger").on("click", function (event) {
        // event.preventDefault();
        // We need the id of the burger so that we can tell mysql which burger id to delete
        // reference the object that caused the event via 'this' and grab the data-id value via .data()
        var id = $(this).attr("id");
    
        console.log(this);
        console.log('burgerjs --> id ' + id);
        

        // Send the DELETE request.
        // url example -> localhost:808-/api/burgers/1
        // this api call communitcates to our router.delete('/api/burgers/:id') route
        $.ajax('/api/burgers/' + id, {
            type: 'DELETE'
        }).then(function () {
            console.log("deleted burger", id);
            // Reload the page to get the updated list
            location.reload();
        }
        );
    });

});