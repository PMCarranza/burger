console.log('controllers - burgercontroller.js');
var express = require('express');

// Routing refers to how an application’s endpoints (URIs) respond to client requests.
// A route method is derived from one of the HTTP methods, and is attached to an instance of the express class.
var router = express.Router();

// Import the model (burguer.js) to use its database functions.
var burger = require('../models/burger.js');
// console.log('burger_controller --> var burger--> ', burger);

// Create all our routes and set up logic within those routes where required.

// This one gets matched with the GET from the ajax called in public/js/burger.js
// req and res come from express declared in server.js
router.get('/', function (req, res) {
    burger.all(function (data) {
        var hbsObject = {
            burger: data
        };
        console.log('this is hbsOject in burguerController.js at line 11-->  ' + hbsObject);
        res.render('index', hbsObject);
    });
});

router.get('/api/burgers', function (req, res) {
    burger.all(function (data) {
        res.json(data);
    });
});
// This one gets matched with the POST from the ajax called in public/js/burger.js//
router.post('/api/burgers', function (req, res) {
    // burger.create is a high level method that inserts a new burger into the burger table in the DB
    // values  accessible vie req.body
    // callback capture a succesful DB call and responds to the client
    // the callback (res) is invoked via cb(res inside .create() method in burger.js model
    // This one gets matched with the create from the ajax called in public/js/burger.js
    burger.create([
        'burgerName', 'isDevoured'
    ], [
        req.body.burgerName, req.body.isDevoured
    ], function (result) {
        // Send back the ID of the new quote 
        res.json({ id: result.insertId });
    });
});

router.put('/api/burgers/:id', function (req, res) {
    console.log('controller.js line 49 req.body--> ' + req.body);
    console.log(JSON.stringify(req.body));
    console.log(req.query);
    console.log('controller.js line 50 req.query--> ' + req.query);

    var condition = 'id = ' + req.params.id;

    console.log('-v-v-  condition in burger_controller.js line 31  -v-v ');
    console.log(condition);
    burger.update({
        isDevoured: req.body.isDevoured
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