//var u_port = "8080"
var u_port = "80"
//var s_port = "8443"
var s_port = "443"

var express = require('express');
var app = express();
var request = require('request');
var handlebars = require('express-handlebars').create({defaultlayout:'main'});

var parseString = require('xml2js').parseString;
var xml = '';
var url = "https://feed43.com/calvin-hobbes-spanish.xml"

app.use(requireHTTPS);
app.use(require('helmet')());

var bodyParser = require('body-parser');
app.engine('handlebars',handlebars.engine);
app.set('view engine', 'handlebars');
app.set('port', u_port);
//var pass = "123";

app.use(express.static('public'));
//app.use(session({secret:pass}));

var subdomain = require('express-subdomain');
var router = express.Router();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
var key = require('./credential.js');

var mysql = require('./connection.js');

var router = express.Router();
app.use(subdomain('api', router));

var blog = express.Router();
app.use(subdomain('blog', blog));

var slides = express.Router();
app.use(subdomain('slides', slides));


jsonFm = require('json-front-matter').parse

var Poet = require('poet');
var markdown = require( "markdown" ).markdown;

/*************************
// letsencrypt
 *********************/
//encrypted channel
//fs = require('fs')
const https = require('https');
const fs = require('fs');
const options = {
	    cert: fs.readFileSync('./ssl/fullchain.pem'), 
	    key: fs.readFileSync('./ssl/privkey.pem')
};

function requireHTTPS(req, res, next) {
    if (!req.secure) {
        //FYI this should work for local development as well
        return res.redirect('https://' + req.get('host') + req.url);
    }
    next();
}

https.createServer(options, app).listen(s_port);


/*************************
// misc functions
 *********************/

function xmlToJson(url, callback) {
  var req = https.get(url, function(res) {
    var xml = '';
    res.on('data', function(chunk) { xml += chunk; });
    res.on('error', function(e) { callback(e, null); }); 
    res.on('timeout', function(e) { callback(e, null); }); 
    res.on('end', function() { parseString(xml, function(err, result) { callback(null, result); }); });
  });
}

function htmlTourl(url, callback) {
  var req = https.get(url, function(res) {
    var html = '';
    res.on('data', function(chunk) { html += chunk; });
    res.on('error', function(e) { callback(e, null); }); 
    res.on('timeout', function(e) { callback(e, null); }); 
    res.on('end', function() { callback(null, html); });
    //res.on('end', function() { parseString(html, function(err, result) { callback(null, result); }); });
  });
}


/*************************
//slides specific routes 
 *********************/
slides.get('/', function (req, res) {
	var file = './slides/index.html';
	fs.readFile(file, 'utf8', function (err,data) {
		res.header("Content-Type",'text/html');
		res.send(data);
	});
});

slides.get('/:slide', function (req, res) {
	var file = './slides/'+req.params.slide;
	fs.readFile(file, 'utf8', function (err,data) {
		res.header("Content-Type",'text/html');
		res.send(data);
	});
});


/*************************
//blog specific routes 
 *********************/
blog.get('/', function (req, res) {
	//res.send('Welcome to our blog!\n');
	var file = './blog/allposts.md';
	fs.readFile(file, 'utf8', function (err,data) {
		var parsed = jsonFm(data);
		var post = parsed.attributes;
		post.body = markdown.toHTML(parsed.body);
		post.script = as[getRand()];
		res.render('blog', post);
	});
});

blog.get('/:post', function (req, res) {
	var file = './blog/'+req.params.post+'.md';
	if(!fs.existsSync(file)) {
		res.status(404);
		res.render('404');
	} else {
		fs.readFile(file, 'utf8', function (err,data) {
		var parsed = jsonFm(data);
		var post = parsed.attributes;
		post.body = markdown.toHTML(parsed.body);
		post.script = as[getRand()];
		res.render('blog', post);
		});
	}
});


/*************************
//api specific routes 
 *********************/
router.get('/', function(req, res) {
    //res.send('Welcome to our API!\n');
			//+ 'GET\n'
			//+ '  /intro\n' + '  /projects\n' + '  /resume\n' + '  /contact\n');
	var file = './core/root.md';
	fs.readFile(file, 'utf8', function (err,data) {
		var parsed = jsonFm(data);
		res.header("Content-Type",'application/json');
		res.send(JSON.stringify(parsed.attributes, null, 4));
	});
});

router.get('/intro', function(req, res) {
	var file = './core/index.md';
	fs.readFile(file, 'utf8', function (err,data) {
		var parsed = jsonFm(data);
		res.header("Content-Type",'application/json');
		res.send(JSON.stringify(parsed, null, 4));
	});
});



router.get('/resume', function(req, res) {
	var file = './core/resume.md';
	fs.readFile(file, 'utf8', function (err,data) {
		var parsed = jsonFm(data);
		res.header("Content-Type",'application/json');
		res.send(JSON.stringify(parsed.attributes, null, 4));
	});
});

router.get('/contact', function(req, res) {
	var file = './core/contact.md';
	fs.readFile(file, 'utf8', function (err,data) {
		var parsed = jsonFm(data);
		res.header("Content-Type",'application/json');
		res.send(JSON.stringify(parsed.attributes, null, 4));
	});
});


router.get('/blog', function(req, res) {
	var file = './blog/allposts.md';
	fs.readFile(file, 'utf8', function (err,data) {
		var parsed = jsonFm(data);
		res.header("Content-Type",'application/json');
		res.send(JSON.stringify(parsed.attributes, null, 4));
	});
});

router.get('/blog', function(req, res) {
	var file = './blog/allposts.md';
	fs.readFile(file, 'utf8', function (err,data) {
		var parsed = jsonFm(data);
		res.header("Content-Type",'application/json');
		res.send(JSON.stringify(parsed.attributes, null, 4));
	});
});

router.get('/projects', function(req, res) {
	var context = {};
	try {
	mysql.pool.query('SELECT * FROM pjs_list WHERE id NOT IN (5) order by id desc ', function(err, rows, fields){
		if(err){ next(err); return; }
		//context.results = JSON.stringify(rows);
		rows.forEach(function(r){
			mysql.pool.query('SELECT * FROM links WHERE pjs_id=?',[r.id],function(err, rows, fields){
				r['links'] = rows;
			});
		});
		//context.results = rows;
		//res.render('pjs', context);
		var file = './core/projects.md';
		fs.readFile(file, 'utf8', function (err,data) {
			var parsed = jsonFm(data);
			var post = parsed.attributes;
			post.projects = rows;
			res.header("Content-Type",'application/json');
			res.send(JSON.stringify(post, null, 4));
		});
		//res.json(context);
	});
	} finally {
		var file = './core/projects.md';
	fs.readFile(file, 'utf8', function (err,data) {
		var parsed = jsonFm(data);
		res.header("Content-Type",'application/json');
		res.send(JSON.stringify(parsed.attributes, null, 4));
	});
	}
	/*
		mysql.pool.query('SELECT * FROM pjs_list order by id desc', 
			function(err, rows, fields){
			res.header("Content-Type",'application/json');
			res.send(JSON.stringify(
				rows.map(function(a){
				return {project:a.name, description:a.msg}
				}), null, 4));
		});
		*/
});

/*************************
 * main SITE
 *********************/
var as = ['startrek.js', 'particles.js', 'tessellactation.js'];
function getRand() {
	var min = 0;
	var max = 2;
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

app.get('/',function(req,res){
	var urlstr;
    var uu2 = "https://www.gocomics.com/calvinandhobbesespanol/"
	var d1 = new Date();
	d1.setDate(d1.getDate() -1 );
	var dd = d1.toISOString().replace(/T.*/, '').replace(/-/g,'/');
	uu2 = uu2+dd;

	//xmlToJson(url, function(err, data){
	htmlTourl(uu2, function(err, data){
		//console.log(JSON.stringify(data.rss.channel[0].item[0].description[0], null, 2));
		//
		try {
		  var regexp = /https:\/\/assets.amuniversal.com\/[^"]*/i
			//urlstr = JSON.stringify(data.rss.channel[0].item[0].description[0], null, 2);
			urlstr = data.match(regexp)[0];
		//	console.log(uu2);
			// console.log(data);
			console.log(urlstr);
		} catch(e){ console.log("no comic today"); }

		var file = './core/index.md';
		fs.readFile(file, 'utf8', function (err,data) {
			var parsed = jsonFm(data);
			var post = parsed.attributes;
			post.body = markdown.toHTML(parsed.body);
			post.script = as[getRand()];
			try{
			//urlstr = urlstr.replace(/\\\"/g, "'");
			//urlstr = urlstr.replace(/\"/g, "");
			//urlstr = urlstr.replace(/http/g, "https");
			//console.log(urlstr);
			urlstr = "<img src="+urlstr+">";
			post.comic = urlstr;
			} catch(e){console.log("no comic");}
			res.render('index', post);
		});
	});
});


app.get('/resume',function(req,res){
  //res.render('resume');
	var file = './core/resume.md';
	fs.readFile(file, 'utf8', function (err,data) {
		var parsed = jsonFm(data);
		var post = parsed.attributes;
		post.body = markdown.toHTML(parsed.body);
		post.script = as[getRand()];
		res.render('resume', post);
	});
});

app.get('/blog',function(req,res){
  //res.render('contact');
	var file = './blog/allposts.md';
	fs.readFile(file, 'utf8', function (err,data) {
		var parsed = jsonFm(data);
		var post = parsed.attributes;
		post.body = markdown.toHTML(parsed.body);
		post.script = as[getRand()];
		res.render('blog', post);
	});
});

app.get('/contact',function(req,res){
  //res.render('contact');
	var file = './core/contact.md';
	fs.readFile(file, 'utf8', function (err,data) {
		var parsed = jsonFm(data);
		var post = parsed.attributes;
		post.body = markdown.toHTML(parsed.body);
		post.script = as[getRand()];
		res.render('contact', post);
	});
});

app.get('/projects',function(req,res,next){
  var context = {};
  mysql.pool.query('SELECT * FROM pjs_list WHERE id NOT IN (5) order by id desc', function(err, rows, fields){
    if(err){ next(err); return; }
    //context.results = JSON.stringify(rows);
		rows.forEach(function(r){
			mysql.pool.query('SELECT * FROM links WHERE pjs_id=?',[r.id],function(err, rows, fields){
				r['links'] = rows;
			});
		});
    //context.results = rows;
		//res.render('pjs', context);

		var file = './core/projects.md';
		fs.readFile(file, 'utf8', function (err,data) {
			var parsed = jsonFm(data);
			var post = parsed.attributes;
			post.projects = rows;
			post.body = markdown.toHTML(parsed.body);
		post.script = as[getRand()];
			res.render('pjs', post);
		});
			//res.header("Content-Type",'application/json');
			//res.send(JSON.stringify(post, null, 4));
		//res.json(context);
  });
});



function getRandObj(){
  var number = {'number':getRand(min,max)};
  return number;
}

app.get('/random',function(req,res){
  res.render('random', getRandObj() );
});


app.use(function(req,res){
  res.status(404);
  res.render('404');
});

app.use(function(err, req, res, next){
  console.error(err.stack);
  res.type('plain/text');
  res.status(500);
  res.render('500');
});

app.listen(app.get('port'), function(){
  console.log('Express started on http://localhost:' + app.get('port') + '; press Ctrl-C to terminate.');
});

/*
var server = https.createServer(options, app).listen(app.get('port'), function(){
	  console.log("Express server listening on port " + app.get('port'));
});
*/
