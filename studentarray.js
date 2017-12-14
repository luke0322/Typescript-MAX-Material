var a = 0;
var Students = /** @class */ (function () {
    function Students(name, color, numb) {
        this.name = name;
        this.color = color;
        this.number = numb; //the this keyword must be declared when referencing other methods and variables
    }
    return Students;
}());
var bill = new Students("Bill", "Blue", 6);
var joe = new Students("Joe", "Blue", 6);
var eric = new Students("Eric", "Blue", 6);
var denise = new Students("Denise", "Blue", 6);
var luke = new Students("Luke", "Blue", 6);
var andrew = new Students("Andrew", "Blue", 6);
var lisa = new Students("Lisa", "Blue", 6);
var emilie = new Students("Emilie", "Blue", 6);
var student = [bill, joe, eric, denise, luke, andrew, lisa, emilie];
console.log(student);
//passing in the string with constructor, calling the instance type as :Bootcamp
var Student = /** @class */ (function () {
    function Student(name, color, number) {
        this.name = name;
        this.color = color;
        this.number = number;
    }
    Student.prototype.display = function () {
        console.log(this);
    };
    return Student;
}());
var students = [
    new Student("Bill", "Blue", 1),
    new Student("Andrew", "Green", 2),
    new Student("Joe", "Red", 3),
    new Student("Luke", "Blue", 4),
    new Student("Eric", "Green", 5),
    new Student("Denise", "Red", 6),
    new Student("Lisa", "Blue", 7),
    new Student("Emilie", "Green", 8)
];
for (var _i = 0, students_1 = students; _i < students_1.length; _i++) {
    var student_1 = students_1[_i];
    student_1.display();
}
