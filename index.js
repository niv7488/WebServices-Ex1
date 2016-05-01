var express = require('express');
var app = express();
var bodyParser = require('body-parser');
var students_module = require('./students_module');
var fs = require("fs");
var url = require('url');

var port = process.env.PORT || 3000;

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.get('/', function(req,res) {
    res.send('There are 3 functions : \n 1) getStudentGradeById - that bring us json of choosen studend by id :in the query string we will add getStudentGradeById?id=(and wanted id number)and the returned value will be json with the detailes of that student \n');
});

app.get('/getStudentGradeById', function(req,res) {
    var urlPart = url.parse(req.url, true);
    var query = urlPart.query;
    var qname = query.id;
    var student = students_module.GetStudent(qname);
    if(student != null) {
        console.log('Id = ' + student.Id + ' : ' + 'The Student ' + student.name + "'s Grade is : " + student.grade);
        res.json('Id = ' + student.Id + ' : ' + 'The Student ' + student.name + "'s Grade is : " + student.grade);
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