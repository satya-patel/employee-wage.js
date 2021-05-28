class EmployeePayrollData{
    id;
    salary;
    gender;
    startDate;
    constructor(...params){
        this.id = params[0];
        this.name = params[1];
        this.salary= params[2];
        this.gender = params[3];
        this.startDate = params[4];
    }

    get name(){ return this._name;}
    set name(name){this._name = name;}
    set name(name){
        let nameRegex = RegExp("^[A-Z]{1}[a-z]{2,}$");
        if(nameRegex.test(name))
            this._name = name;
        else throw "Name is Incorrect";
    }

    toString(){
        const options = { year: 'numeric', month: 'long', day: 'numeric'};
@@ -26,7 +31,11 @@ class EmployeePayrollData{

let employeePayrollData = new EmployeePayrollData(1,"Mark",30000);
console.log(employeePayrollData.toString());
try{
employeePayrollData.name = "john";
console.log(employeePayrollData.toString());
}catch(e){
    console.error(e);
}
let newEmployeePayrollData = new EmployeePayrollData(1,"Terrisa",30000,"F",new Date());
console.log(newEmployeePayrollData);