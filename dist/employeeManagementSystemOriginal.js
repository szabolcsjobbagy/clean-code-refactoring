"use strict";
class EmployeeManagementSystemOriginal {
    constructor() {
        this.employees = [];
    }
    addEmployee(employee) {
        // Real-world code to add employee to the system
        this.employees.push(employee);
    }
    calculatePayroll() {
        // Simulation to calculate payroll for all employees
        let totalPayroll = 0;
        for (const employee of this.employees) {
            totalPayroll += employee.calculateSalary();
        }
        return totalPayroll;
    }
    generateReports() {
        // Simulation to generate various reports
        return "Employee reports: ...";
    }
    promoteEmployee(employee) {
        // Code to handle employee promotion logic
    }
}
class EmployeeOriginal {
    constructor(name, salary) {
        this.name = name;
        this.salary = salary;
    }
    calculateSalary() {
        return this.salary;
    }
}
