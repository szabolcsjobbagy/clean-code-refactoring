import { School, SchoolClass, Student } from "../src/schoolRefactored"

let school: School
let schoolClass: SchoolClass

beforeEach(() => {
	school = new School()
	schoolClass = new SchoolClass("4a")
})

describe("School", () => {
	describe("addClass", () => {
		it.each`
			student1               | student2               | expectedOutput
			${new Student("Jack")} | ${new Student("Jill")} | ${[{ name: "4a", studentCount: 2 }]}
		`("should add schoolClass item to the school's schoolClasses array", (testCases) => {
			// Arrange
			const { student1, student2, expectedOutput } = testCases

			// Act
			schoolClass.addStudent(student1)
			schoolClass.addStudent(student2)
			school.addClass(schoolClass)

			// Assert
			expect(school.getSchoolClasses()).toStrictEqual(expectedOutput)
		})
	})

	describe("getStudentCount", () => {
		it.each`
			student1               | student2               | expectedOutput
			${new Student("Jack")} | ${new Student("Jill")} | ${2}
		`("should calculate the total student count of school (all schoolClasses)", (testCases) => {
			// Arrange
			const { student1, student2, expectedOutput } = testCases

			// Act
			schoolClass.addStudent(student1)
			schoolClass.addStudent(student2)
			school.addClass(schoolClass)

			// Assert
			expect(school.getStudentCount()).toBe(expectedOutput)
		})
	})
})

describe("SchoolClass", () => {
	describe("addStudent", () => {
		it.each`
			name      | expectedOutput
			${"Jack"} | ${[new Student("Jack")]}
			${"Jill"} | ${[new Student("Jill")]}
		`("should add student $name to school-class's student list", (testCases) => {
			// Arrange
			const { name, expectedOutput } = testCases
			const student = new Student(name)

			// Act
			schoolClass.addStudent(student)

			// Assert
			expect(schoolClass.getStudents()).toStrictEqual(expectedOutput)
		})
	})
})
