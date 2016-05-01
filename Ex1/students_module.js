var fs = require('fs');
var students_data;

/*Reading the JSON file*/
fs.readFile("students.json", function(err,data){
    if(err) {
        console.log("Error:" + err);
        return;
    }
    students_data = JSON.parse(data);
    console.log('Student data has been initialized \n');
});

/*getStudentGradeById function*/
exports.GetStudent = function(id) {
    console.log('The getStudentGradeById function has been called \n');
    var i = 0
    while(i < students_data.length) {
        if(students_data[i].Id.localeCompare(id) == 0) {
            return students_data[i];
        } else {
            ++i;

        }
    }
}

/*getAllEcxellenceStudents function*/
exports.GetExcellentStudents = function() {
    console.log('The getAllEcxellenceStudents function has been called \n');
    var myArray = [];
    for (var i = 0 ; i < students_data.length; ++i) {
        if(students_data[i].grade > 90) {
            myArray.push(students_data[i]);
        } 
    }
    return myArray;
}

/*getAllEcxellenceStudentsByYear function*/
exports.GetExcellentStudentsByYear = function(year) {
    console.log('The getAllEcxellenceStudentsByYear function has been called \n');
    var myArray = [];
    for (var i = 0 ; i < students_data.length; ++i) {
        if((students_data[i].grade > 90)&&(students_data[i].year.localeCompare(year) == 0)) {
            myArray.push(students_data[i]);
        } 
    }
    return myArray;
}