// function calculateSalary(userName,salary,profits,taxis){
// var total = (salary + profits - taxis);
//    // return (salary + profits - taxis).toFixed(2);
// console.log(userName + " has a total salary of " + total);

// }

// calculateSalary("John", 1000, 0, 0);

var user={
    name: "mo",
    age:30,
    children:{
        child1:{
            name:"omr"
        },
         child2:{
            name:"ahmed"
        }
    }
}



let {name,age,children} = user  
console.log(name,age,children);
console.log( children.child1.name);
console.log(user.children.child1.name);