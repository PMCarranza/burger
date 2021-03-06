// Import the ORM to create functions that will interact with the database.
// the path for orm.js is passed to the var orm
var orm = require("../config/orm.js");

// creating burger object
var burger = {
    all: function (cb) {
        orm.all('burgers', function (res) {
            cb(res);
            console.log('========== A L L  B U R G E R S ==========');
            console.log('this table is res at burger.js line 7');
            console.table(res);
            console.log('========== A L L  B U R G E R S ==========');
        });
    },
    // The variables cols and vals are arrays.
    // invokes anonymous function that declares three parameters
    // burger.create (in burger.controllerjs) must take in 'columns' to insert into their respectives values, and a callback (cb) function
    create: function (cols, vals, cb) {
        // orm.creat() allows teh code base to dinamically insert data into a provided table
        // solely responsible for interaction with the DB and sending data back to our model
        orm.create('burgers', cols, vals, function (res) {
            cb(res);
            console.log('========== C R E A T E ==========');
            console.log('this table is res at burger.js line 15');
            console.table(res);
            console.log('========== C R E A T E D ==========')
        });
    },
    update: function (objColVals, condition, cb) {
        orm.update('burgers', objColVals, condition, function (res) {
            cb(res);
            console.log('========== U P D A T E ==========');
            console.log('this table is res at burger.js line 22');
            console.table(res);
            console.log('========== U P D A T E D ==========');

        });
    },

    // burger.delete is set to an anoymous function where we declare a condition and a cb

    delete: function (condition, cb) {
        // declare orm.delete and pass in the table to query (burgers), the condition(where to delete) and the callback function for what to do after the database call
        orm.delete('burgers', condition, function (res) {
            cb(res);
        });
    }
};

// Export the database functions for the controller (burgerController.js).
module.exports = burger;