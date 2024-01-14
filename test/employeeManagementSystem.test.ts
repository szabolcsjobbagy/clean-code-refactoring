import { EmployeeManagementSystem, Employee } from "../src/employeeManagementSystemRefactored"

describe("EmployeeManagementSystem", () => {
	describe("addEmployee", () => {
		let employeeManagementSystem: EmployeeManagementSystem

		it.each`
			name      | salary  | expectedOutput
			${"Jack"} | ${3000} | ${[new Employee("Jack", 3000)]}
			${"Jill"} | ${2500} | ${[new Employee("Jill", 2500)]}
			${"Bob"}  | ${0}    | ${[new Employee("Bob", 0)]}
		`("should add employee (name, salary): $name, $salary to employees list", (testCases) => {
			// Arrange
			const { name, salary, expectedOutput } = testCases
			employeeManagementSystem = new EmployeeManagementSystem()
			const employee = new Employee(name, salary)

			// Act
			employeeManagementSystem.addEmployee(employee)

			// Assert
			expect(employeeManagementSystem.getEmployees()).toStrictEqual(expectedOutput)
		})
	})

	describe("calculateTotalPayroll", () => {
		let employeeManagementSystem: EmployeeManagementSystem

		it.each`
			employee1                     | employee2                     | expectedOutput
			${new Employee("Jack", 3000)} | ${new Employee("Jill", 2500)} | ${5500}
			${new Employee("Jack", 3000)} | ${new Employee("Bob", 0)}     | ${3000}
		`(
			"should calculate total payroll $expectedOutput with employees: $employee1 and $employee2",
			(testCases) => {
				// Arrange
				const { employee1, employee2, expectedOutput } = testCases
				employeeManagementSystem = new EmployeeManagementSystem()

				// Act
				employeeManagementSystem.addEmployee(employee1)
				employeeManagementSystem.addEmployee(employee2)
				const totalPayroll = employeeManagementSystem.calculateTotalPayroll()

				// Assert
				expect(totalPayroll).toBe(expectedOutput)
			}
		)
	})
})
