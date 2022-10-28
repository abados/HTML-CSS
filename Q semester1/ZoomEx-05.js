"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
let students = [];
class TsionetS {
    constructor(name, id, age) {
        this.name = name;
        this.id = id;
        this.age = age;
    }
    addStudent() {
        students.push(this);
        console.log(students);
    }
    deleteStudent() {
        let index = students.indexOf(this);
        if (index != -1) {
            students.splice(index, 1);
        }
        console.log(students);
    }
}
let student1 = new TsionetS("Eli", 4546456, 23);
let student2 = new TsionetS("Hay", 654654, 31);
function addStudent2(s) {
    students.push(s);
    console.log(students);
}
addStudent2(student1);
student2.addStudent();
student1.deleteStudent();
student1.addStudent();
