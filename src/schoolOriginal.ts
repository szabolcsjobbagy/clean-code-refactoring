class SchoolOriginal {
	private classes: SchoolClassOriginal[] = []
	constructor() {}
	addClass(schoolClass: SchoolClassOriginal): void {
		this.classes.push(schoolClass)
	}
	getStudentCount(): number {
		let totalStudents = 0
		for (const schoolClass of this.classes) {
			totalStudents += schoolClass.getStudents().length
		}
		return totalStudents
	}
}

class SchoolClassOriginal {
	private students: StudentOriginal[] = []
	constructor() {}
	addStudent(student: StudentOriginal): void {
		this.students.push(student)
	}
	getStudents(): StudentOriginal[] {
		return this.students
	}
}

class StudentOriginal {
	private name: string
	constructor(name: string) {
		this.name = name
	}
}
