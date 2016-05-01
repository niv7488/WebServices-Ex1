Root index - This is basically the welcome page - http://webservices-ex1.herokuapp.com/

There are 3 functions :

1) Get all Excellence student index - getAllEcxellenceStudents
this function returned value is an array of JSONs with the details of students that have a grade above 90.
if there is no students with grades above 90 the following massage will appear:
Error : Student Not Found AND
There Is no student with that Id - Check Your JSON, printed in the console.
The direct link: http://webservices-ex1.herokuapp.com/getAllEcxellenceStudents

2) Get student's grade by id index - getStudentGradeById:
this function returned value is a string with the chosen student's grade.
you will need to add ?id=3(the number 3 is just for example) right after the name of the function in the query 
pay attention to NOT use capital letters or spaces.
If the id is not exist - the following massage will appear : Error : Student Not Found AND
 There Is no student with that Id - Check Your JSON, printed in the console.
the direct link: http://webservices-ex1.herokuapp.com/getStudentGradeById?id=3

3) Get Excellence Students by a specific year index -getAllEcxellenceStudentsByYear
this function returned value is an array of JSONs with the details of students that have a grade above 90 in a specific year.
you will need to add ?year=2015 (the number 2015 is just for example) right after the name of the function in the query 
pay attention to NOT use capital letters or spaces.
If there isn't any student that answer both of the conditions (chosen year and grade above 90)  - 
the following massage will appear : Error : Student Not Found AND
There Is No Excellence Students In This Year - Check your JSON.
the direct link: http://webservices-ex1.herokuapp.com/getAllEcxellenceStudentsByYear?year=2015


