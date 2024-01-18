import { School, SchoolClass, Student } from "../src/schoolRefactored"
import { mock, mockReset } from "jest-mock-extended"

let school: School
let schoolClass: SchoolClass

beforeEach(() => {
	school = new School()
})

describe("School", () => {
	const mockedSchoolClass = mock<SchoolClass>()

	beforeEach(() => {
		mockReset(mockedSchoolClass)
	})

	describe("addClass", () => {
		it.each`
			schoolClassName | studentCount | expectedOutput
			${"4a"}         | ${1}         | ${[{ name: "4a", studentCount: 1 }]}
		`("should add schoolClass item to the school's schoolClasses array", (testCases) => {
			// Arrange
			const { schoolClassName, studentCount, expectedOutput } = testCases
			mockedSchoolClass.getName.mockReturnValue(schoolClassName)
			mockedSchoolClass.getStudentCount.mockReturnValue(studentCount)

			// Act
			school.addClass(mockedSchoolClass)

			// Assert
			expect(school.getSchoolClasses()).toStrictEqual(expectedOutput)
		})
	})

	describe("getStudentCount", () => {
		const mockedSchoolClass2 = mock<SchoolClass>()

		beforeEach(() => {
			mockReset(mockedSchoolClass2)
		})

		it.each`
			schoolClassNames | studentCounts | expectedOutput
			${["4a", "2b"]}  | ${[2, 3]}     | ${5}
		`("should calculate the total student count of school (all schoolClasses)", (testCases) => {
			// Arrange
			const { schoolClassNames, studentCounts, expectedOutput } = testCases
			mockedSchoolClass.getName.mockReturnValue(schoolClassNames[0])
			mockedSchoolClass.getStudentCount.mockReturnValue(studentCounts[0])

			mockedSchoolClass2.getName.mockReturnValue(schoolClassNames[1])
			mockedSchoolClass2.getStudentCount.mockReturnValue(studentCounts[1])

			// Act
			school.addClass(mockedSchoolClass)
			school.addClass(mockedSchoolClass2)

			// Assert
			expect(school.getStudentCount()).toBe(expectedOutput)
		})
	})
})

describe("SchoolClass", () => {
	beforeEach(() => {
		schoolClass = new SchoolClass("4a")
	})

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
	describe("getStudentCount", () => {
		it.each`
			name1     | name2    | expectedOutput
			${"Jack"} | ${"Eve"} | ${2}
			${"Jill"} | ${"Rob"} | ${2}
		`("should calculate the number of students in school-class", (testCases) => {
			// Arrange
			const { name1, name2, expectedOutput } = testCases
			const student1 = new Student(name1)
			const student2 = new Student(name2)

			// Act
			schoolClass.addStudent(student1)
			schoolClass.addStudent(student2)

			// Assert
			expect(schoolClass.getStudentCount()).toBe(expectedOutput)
		})
	})
})
