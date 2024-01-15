"use strict";
class SchoolOriginal {
    constructor() {
        this.classes = [];
    }
    addClass(schoolClass) {
        this.classes.push(schoolClass);
    }
    getStudentCount() {
        let totalStudents = 0;
        for (const schoolClass of this.classes) {
            totalStudents += schoolClass.getStudents().length;
        }
        return totalStudents;
    }
}
class SchoolClassOriginal {
    constructor() {
        this.students = [];
    }
    addStudent(student) {
        this.students.push(student);
    }
    getStudents() {
        return this.students;
    }
}
class StudentOriginal {
    constructor(name) {
        this.name = name;
    }
}
