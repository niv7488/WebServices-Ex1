var express = require('express');
var app = express();
var bodyParser = require('body-parser');
var students_module = require('./students_module');
var fs = require("fs");
var url = require('url');

var port = process.env.PORT || 3000;

app.use(function(req,res,next){
    res.header('Access-Control-Allow-Origin','*');
    res.header("Access-Control-Allow-Headers","Origin,X-Requested-With, Content-Type,Accept");
    next();
});

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.get('/', function(req,res) {
    res.send('There are 3 functions : 1) getStudentGradeById, getAllEcxellenceStudents, getAllEcxellenceStudentsByYear - view the API for more info \n');
});

app.get('/getStudentGradeById', function(req,res) {
    var urlPart = url.parse(req.url, true);
    var query = urlPart.query;
    var qname = query.id;
    var student = students_module.GetStudent(qname);
    if(student != null) {
        console.log('Id = ' + student.Id + ' : ' + 'The Student ' + student.name + "'s Grade is : " + student.grade);
        // res.json('Id = ' + student.Id + ' : ' + 'The Student ' + student.name + "'s Grade is : " + student.grade);
        res.json(student);
    } else {
        res.send('<!doctype html><html><head></head><body><h1>Error : Student Not Found</h1></body></html>');
        console.log('There Is no studentd with that Id - Check Your JSON');            

    }
});

app.get('/getAllEcxellenceStudents', function(req,res,next) {
    var excellStudents = students_module.GetExcellentStudents();
    if(excellStudents.length == 0) {            
        res.send('<!doctype html><html><head></head><body><h1>Error : Students Not Found</h1></body></html>');
        console.log('There Is No Excellence Students - Check your JSON');

    } else {
        res.json(excellStudents);
        console.log(excellStudents);        
    }
});

app.get('/getAllEcxellenceStudentsByYear', function(req,res,next) {
    var urlPart = url.parse(req.url, true);
    var query = urlPart.query;
    var qyear = query.year;
    var excellStudentsByYear = students_module.GetExcellentStudentsByYear(qyear);

    if(excellStudentsByYear.length == 0) {            
        res.send('<!doctype html><html><head></head><body><h1>Error : Students Not Found</h1></body></html>');
        console.log('There Is No Excellence Students In This Year - Check your JSON');

    } else {
        res.json(excellStudentsByYear);
        console.log(excellStudentsByYear);        
    }
});

app.listen(port);
console.log('listening on port ' + port);