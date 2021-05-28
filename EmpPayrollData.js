class EmployeePayrollData{
    id;
    salary;
    gender;
    startDate;

    constructor(...params){
        this.id = params[0];
        let idAndSalaryRegex = RegExp("[0-9]+");
        if(idAndSalaryRegex.test(params[0])){
        this.id = params[0];}
        else{
            throw "ID is incorrect";
        }
        this.name = params[1];
        this.salary= params[2];
        this.gender = params[3];
        this.startDate = params[4];
        if(idAndSalaryRegex.test(params[2])){
        this.salary= params[2];}
        else{
            throw "Salary is incorrect";
        }
        let genderRegex = RegExp("[MF]");
        if(genderRegex.test(params[3])){
        this.gender = params[3];}
        else{
            throw "Gender is incorrect";
        }
        let dateRegex = RegExp("[0-2][0-9][0-9][0-9][-]");
        if(params[4] <= new Date()){
        this.startDate = params[4];}
        else{
            throw "Date is incorrect";
        }
    }

    get name(){ return this._name;}
@@ -29,13 +48,13 @@ class EmployeePayrollData{
    }
}

let employeePayrollData = new EmployeePayrollData(1,"Mark",30000);
let newEmployeePayrollData = new EmployeePayrollData(1,"Terrisa",30000,"F",new Date());
console.log(newEmployeePayrollData);  