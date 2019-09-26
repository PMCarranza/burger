// express is a module that can be used to crete an application
// require express creates an instance of an Express application and this is passed to the variable express
var express = require('express');

// process.env is a global variable injected by Node ar runtime for the application to use and it represents the state of the system enviroment the app is in when it starts
// variable PORT takes the value of whatever is in proceess.env.PORT and uses it or if nothing found uses 8080
var PORT = process.env.PORT || 8080;

// the express() is a top-level function exported by the express module
var app = express();

// Serve static content for the app from the "public" directory in the application directory.
app.use(express.static('public'));

// app is being told to use the middleware included in express

// Returns middleware that only parses urlencoded bodies and only looks at requests where the Content-Type header matches the type option. This parser accepts only UTF-8 encoding of the body and supports automatic inflation of gzip and deflate encodings.  https://expressjs.com/en/api.html#express.urlencoded
app.use(express.urlencoded({ extended: true }));

// express.json() is a method built in express to recognize the incoming Request Object as a JSON Object.
// app.use() mounts the specified middleware function or functions at the specified path: the middleware function is executed when the base of the requested path matches path. https://expressjs.com/en/4x/api.html#app.use
// returns req.body
app.use(express.json());

// Set Handlebars
// Handlebars.js is a popular templating engine that is powerful, simple to use and has a large community. It is based on the Mustache template language, but improves it in several important ways. With Handlebars, you can separate the generation of HTML from the rest of your JavaScript and write cleaner code.
// instance of handlebars is passed to the exphbs variable
// adds easy reusability
var exphbs = require('express-handlebars');

// By default, Express will require() the engine based on the file extension. In this case handlebar and express-handlebars are being required.
// the folder structure for this is the views(folder)layouts,partials(subfolders), index.handelbars in views
app.engine('handlebars', exphbs({ defaulLayout: 'main' }));

// After the view engine is set, there is no need to specify the engine or load the template engine module in the app; Express loads the module internally
// this is better explained in controller.js where the html files are referenced
app.set('view engine', 'handlebars');

// passing the path of controllers.js to routes
var routes = require('./controllers/burger_controllers.js');

// app.use() mounts the specified middleware function or functions at the specified path: the middleware function is executed when the base of the requested path matches path. https://expressjs.com/en/4x/api.html#app.use, in this case the variable routes contains the required path for controller.js
app.use(routes);

// Start our server so that it can begin listening to client requests.
app.listen(PORT, function () {
    // Log (server-side) when our server has started
    console.log('Server listening on : http://localhost: ' + PORT);
});