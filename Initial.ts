interface Employee {
    name: string;
    department: string;
    salary: number;
}

class Payroll {
    private employees: Employee[] = [];

    addEmployee(name: string, department: string, salary: number): void {
        this.employees.push({
            name,
            department,
            salary
        });
    }

    getTotalSalary(): number {
        return this.employees.reduce(
            (total, employee) => total + employee.salary,
            0
        );
    }

    getAverageSalary(): number {
        if (this.employees.length === 0) {
            return 0;
        }

        return this.getTotalSalary() / this.employees.length;
    }

    printReport(): void {
        console.log("Payroll Report");
        console.log("==============");

        for (const employee of this.employees) {
            console.log(
                `${employee.name} | ${employee.department} | $${employee.salary.toFixed(2)}`
            );
        }

        console.log("==============");
        console.log(`Total Salary: $${this.getTotalSalary().toFixed(2)}`);
        console.log(`Average Salary: $${this.getAverageSalary().toFixed(2)}`);
    }
}

const payroll = new Payroll();

payroll.addEmployee("Alice", "Engineering", 5200);
payroll.addEmployee("Brian", "Marketing", 4300);
payroll.addEmployee("Clara", "Design", 4800);
payroll.addEmployee("David", "Finance", 5500);

payroll.printReport();