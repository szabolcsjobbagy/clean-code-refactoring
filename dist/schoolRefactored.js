export class School {
    constructor() {
        this.schoolClasses = [];
    }
    addClass(schoolClass) {
        const schoolClassItem = {
            name: schoolClass.getName(),
            studentCount: schoolClass.getStudentCount(),
        };
        this.schoolClasses.push(schoolClassItem);
    }
    getSchoolClasses() {
        return this.schoolClasses;
    }
    getStudentCount() {
        return this.schoolClasses.reduce((total, schoolClassItem) => {
            return total + schoolClassItem.studentCount;
        }, 0);
    }
}
export class SchoolClass {
    constructor(name) {
        this.students = [];
        this.name = name;
    }
    addStudent(student) {
        this.students.push(student);
    }
    getName() {
        return this.name;
    }
    getStudents() {
        return this.students;
    }
    getStudentCount() {
        return this.getStudents().length;
    }
}
export class Student {
    constructor(name) {
        this.name = name;
    }
    getName() {
        return this.name;
    }
}
