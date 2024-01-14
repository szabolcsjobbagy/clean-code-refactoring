export class EmployeeManagementSystem {
	private employees: Employee[] = []

	constructor() {}

	public addEmployee(employee: Employee): void {
		// Real-world code to add employee to the system
		this.employees.push(employee)
	}

	public getEmployees(): Employee[] {
		return this.employees
	}

	public calculateTotalPayroll(): number {
		let totalPayroll = 0

		for (const employee of this.employees) {
			totalPayroll += employee.calculateSalary()
		}
		return totalPayroll
	}

	public generateReports(): string {
		// Simulation to generate various reports
		return "Employee reports: ..."
	}
}

export class Employee {
	private name: string
	private salary: number

	constructor(name: string, salary: number) {
		this.name = name
		this.salary = salary
	}

	public getName(): string {
		return this.name
	}

	public calculateSalary(): number {
		return this.salary
	}

	public promoteEmployee(newPosition: string, promotionDate: Date): void {}
}
