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
    create: function (cols, vals, cb) {
        orm.create('burguers', cols, vals, function (res) {
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
    }
};

// Export the database functions for the controller (burgerController.js).
module.exports = burger;