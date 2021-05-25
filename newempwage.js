const IS_ABSENT = 0;
const IS_PART_TIME = 1;
const IS_FULL_TIME = 2;
const PART_TIME_HOURS = 4;
const FULL_TIME_HOURS = 8;
const WAGE_PER_HOUR = 20;

let empHrs = 0;
empCheck = Math.floor(Math.random()*10)%3;
function getWorkHours(empCheck){
switch(empCheck){
    case IS_PART_TIME:
        empHrs = PART_TIME_HOURS;
        break;
        return PART_TIME_HOURS;
    case IS_FULL_TIME:
        empHrs = FULL_TIME_HOURS;
        break;
        return FULL_TIME_HOURS;
    default:
        empHrs = 0;
        return 0;
}

}
empCheck = Math.floor(Math.random()*10)%3;
let empHrs = getWorkHours(empCheck);
let empWage = empHrs * WAGE_PER_HOUR;
console.log("Emp Wage: "+empWage);