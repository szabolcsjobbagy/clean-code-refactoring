import {
	EmployeeRepository,
	Employee,
	EmployeeReport,
} from "../src/employeeManagementSystemRefactored"

let employeeRepository: EmployeeRepository

beforeEach(() => {
	employeeRepository = new EmployeeRepository()
})

describe("EmployeeRepository", () => {
	describe("addEmployee", () => {
		it.each`
			name      | salary  | expectedOutput
			${"Jack"} | ${3000} | ${[new Employee("Jack", 3000)]}
			${"Jill"} | ${2500} | ${[new Employee("Jill", 2500)]}
			${"Bob"}  | ${0}    | ${[new Employee("Bob", 0)]}
		`(
			"should add employee (name, salary): $name, $salary to employee repository",
			(testCases) => {
				// Arrange
				const { name, salary, expectedOutput } = testCases
				const employee = new Employee(name, salary)

				// Act
				employeeRepository.addEmployee(employee)

				// Assert
				expect(employeeRepository.getEmployees()).toStrictEqual(expectedOutput)
			}
		)
	})
})

describe("EmployeeReport", () => {
	let employeeReport: EmployeeReport

	beforeEach(() => {
		employeeReport = new EmployeeReport()
	})

	describe("calculateTotalPayroll", () => {
		it.each`
			employee1                     | employee2                     | expectedOutput
			${new Employee("Jack", 3000)} | ${new Employee("Jill", 2500)} | ${5500}
			${new Employee("Jack", 3000)} | ${new Employee("Bob", 0)}     | ${3000}
		`(
			"should calculate total payroll $expectedOutput with employees: $employee1 and $employee2",
			(testCases) => {
				// Arrange
				const { employee1, employee2, expectedOutput } = testCases

				// Act
				employeeRepository.addEmployee(employee1)
				employeeRepository.addEmployee(employee2)
				const exployees = employeeRepository.getEmployees()
				const totalPayroll = employeeReport.calculateTotalPayroll(exployees)

				// Assert
				expect(totalPayroll).toBe(expectedOutput)
			}
		)
	})
})
