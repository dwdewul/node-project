var express = require('express');
var app = express();

var port = process.env.PORT;

var eventRouter = express.Router();

app.use(express.static('public'));
app.use(express.static('bower_components'));

app.set('views', './src/views');
app.set('view engine', 'ejs');

eventRouter.route('/')
    .get(function(req, res){
        res.send('Hello Events');
    })
    
eventRouter.route('/event')
    .get(function(req, res){
        res.send('Hello one event');
    })
    
app.use('/Events', eventRouter);

app.get('/', function(req, res){
    // res.send('Hello');
    res.render('index.ejs', { 
        list: ['firstval', 'second'],
        nav: [
            { link: 'Services', text: 'Services'}, 
            { link: 'Portfolio', text: 'Portfolio'},
            { link: 'About', text: 'About'},
            { link: 'Team', text: 'Team'},
            { link: 'Contact', text: 'Contact'},
            { link: 'Events', text: 'Events'},
            ],
    });
});

app.get('/routing', function(req, res){
    res.send('Hello Router');
});

app.listen(port, function(err){
    console.log('The server is running on port: ' + port);
});