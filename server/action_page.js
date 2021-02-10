var express = require('express');
var bodyParser = require('body-parser');
var app = express();

app.use(bodyParser.urlencoded({ extended: true }));

//app.use(express.bodyParser());

app.post('/myaction', function (req, res) {
    const fs = require('fs')
    let thank = "Thanks for your purchase!";
    var str = "Link to the homepage";
    var result = str.link("http://127.0.0.1:5500/open-obd-website/index.html");
    res.send(thank + "<br>" + "<br>" + result)
    let date = new Date().toDateString()
    let time = new Date().toLocaleTimeString()
    req.body.date = date
    req.body.time = time
    fs.appendFile('data.json', JSON.stringify(req.body, null, 2) + '\n', function (err) {
        if (err) throw err;
        console.log('Updated!');
    });
});

app.listen(8080, function () {
    console.log('Server running at http://127.0.0.1:8080/');
});