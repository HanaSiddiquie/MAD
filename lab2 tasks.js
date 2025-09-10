//Lab Task 1

const createPerson = (name = "", age = 0, address = "") => ({ name, age, address });

const createStudent = (name, age, address, rollNo = "", course = "") => ({
    ...createPerson(name, age, address),
    role: "Student",
    rollNo,
    course
});

const createEmployee = (name, age, address, department = "", designation = "", salary = 0) => ({
    ...createPerson(name, age, address),
    department,
    designation,
    salary
});

const createTeacher = (name, age, address, department, salary, subject = "") => ({
    ...createEmployee(name, age, address, department, "Teacher", salary),
    subject
});

const createStaff = (name, age, address, department, salary, duty = "") => ({
    ...createEmployee(name, age, address, department, "Staff", salary),
    duty
});

const createCourse = (courseName, teacher, students = []) => ({
    courseName,
    teacher,
    students
});

const student1 = createStudent("Ali", 20, "Lahore", "S123", "CS");
const student2 = createStudent("Sara", 21, "Karachi", "S456", "IT");

const teacher1 = createTeacher("Mr. Ahmed", 40, "Islamabad", "CS Dept", 50000, "Programming");
const staff1 = createStaff("Mr. Khan", 35, "Rawalpindi", "Admin", 30000, "Clerk");

const course1 = createCourse("JavaScript", teacher1, [student1, student2]);

console.log(student1);
console.log(teacher1);
console.log(staff1);
console.log(course1);



//Lab Task 2

const createEmployee = (name = "", dept = "general") => ({ name, dept });

const createManager = (name, dept, reports = []) => ({
    ...createEmployee(name, dept),
    reports 
});


const createWorkerBee = (name, dept, projects = []) => ({
    ...createEmployee(name, dept),
    projects 
});

const createSalesPerson = (name, quota = 100) => ({
    ...createWorkerBee(name, "sales"),
    quota
});

const createEngineer = (name, machine = "") => ({
    ...createWorkerBee(name, "engineering"),
    machine
});

const emp1 = createEmployee("Ali");
const mgr1 = createManager("Zara", "IT", [emp1]);
const worker1 = createWorkerBee("Hassan", "IT", ["Project A", "Project B"]);
const sales1 = createSalesPerson("Ayesha", 150);
const eng1 = createEngineer("Bilal", "Lathe Machine");

console.log(emp1);
console.log(mgr1);
console.log(worker1);
console.log(sales1);
console.log(eng1);
