var express = require('express');

const PORT = 4000;

var fib = [0, 1];

var app = express();

//static site pages stored in './public' will be used at the root domain endpoint
app.use(express.static('public'));

app.get('/fib/', function (req, res) {
	if (req.query.value !== undefined) {
		var parsedInt = parseInt(req.query.value);
		res.setHeader('Content-Type', 'application/json');
		if (parsedInt >= fib.length) {
			var i;
			for (i = fib.length; i < parsedInt; i++) {
				fib.push(fib[i-1] + fib[i-2]);
			}
		}
		res.send(JSON.stringify(fib.slice(0, parsedInt)));
	}
	res.send(JSON.stringify(fib.slice(0, 0)));
});

app.listen(PORT);