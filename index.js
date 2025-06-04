function calculateSalary(userName,salary,profits,taxis){
var total = (salary + profits - taxis);
   // return (salary + profits - taxis).toFixed(2);
console.log(userName + " has a total salary of " + total);

}

calculateSalary("John", 1000, 0, 0);