interface SchoolClassItem {
	name: string
	studentCount: number
}

export class School {
	private schoolClasses: SchoolClassItem[] = []

	constructor() {}

	addClass(schoolClass: SchoolClass): void {
		const schoolClassItem = {
			name: schoolClass.getName(),
			studentCount: schoolClass.getStudentCount(),
		}
		this.schoolClasses.push(schoolClassItem)
	}

	getSchoolClasses(): SchoolClassItem[] {
		return this.schoolClasses
	}

	getStudentCount(): number {
		return this.schoolClasses.reduce((total, schoolClassItem) => {
			return total + schoolClassItem.studentCount
		}, 0)
	}
}

export class SchoolClass {
	private name: string
	private students: Student[] = []

	constructor(name: string) {
		this.name = name
	}

	addStudent(student: Student): void {
		this.students.push(student)
	}

	getName(): string {
		return this.name
	}

	getStudents(): Student[] {
		return this.students
	}

	getStudentCount(): number {
		return this.getStudents().length
	}
}

export class Student {
	private name: string

	constructor(name: string) {
		this.name = name
	}

	getName(): string {
		return this.name
	}
}
