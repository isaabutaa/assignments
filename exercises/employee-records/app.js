// employee records exercise - constructor functions




const employees = []

function Employee(name, jobTitle, salary, status = "Full-time"){
    this.name = name,
    this.jobTitle = jobTitle,
    this.salary = salary,
    this.status = status,
    Employee.prototype.printEmployeeForm = function(){
        console.log(this)
    }
}

const David = new Employee("David White", "General Manager", "60k")
employees.push(David)
//  David.printEmployeeForm()

const Emilie = new Employee("Emilie Durand", "Professor of Arabic and Linguistics", "45k", "contract")
employees.push(Emilie)
// Emilie.printEmployeeForm()

const Belinda = new Employee("Belinda L.", "Class-A Transport", "65k")
employees.push(Belinda)
// Belinda.printEmployeeForm()

console.log(employees)


