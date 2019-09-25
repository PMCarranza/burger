var express = require('express');

var router = express.Router();

// Import the model (burguer.js) to use its database functions.
var burger = require('../models/burger.js');

// Create all our routes and set up logic within those routes where required.
router.get('/', function (req, res) {
    burger.all(function (data) {
        var hbsObject = {
            burger: data
        };
        console.log('this is hbsOject in burguerController.js at line 11-->  ' + hbsObject);
        res.render('index', hbsObject);
    });
});
////// I think I need to create a 'Partials' folder inside the views with a 'burgers' document in it to make the following work///////////
router.post('/api/burgers', function(req, res){
    burger.create([
        'name', 'devoured'
    ], [
        req.body.name, req.body.devoured
    ], function (result) {
        // Send back the ID of the new quote
        res.json({ id: result.insertId });
    });
});

router.put('api/burgers/:id', function (req, res) {
    var condition = 'id = ' + req.params.id;

    console.log('condition in burger_controller.js line 31--> ' + condition);

    burger.update({
        devoured: req.body.devoured
    }, condition, function (result) {
        if (result.changedRows === 0) {
            // If no rows were changed, then the ID must not exist, so 404
            return res.status(404).end();
        } else {
            res.status(200).end();
        }
    });
});

// Export routes for server.js to use.
module.exports = router;