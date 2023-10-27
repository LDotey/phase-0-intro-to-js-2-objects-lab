// Write your solution in this file!
const employee = {
    name: "Mookie Wilson",
    address: "99 Blue Jay Way",
}
function updateEmployeeWithKeyAndValue(employee, key, value){
const newEmployee = {...employee};

newEmployee[key] = value;
return newEmployee
}
function destructivelyUpdateEmployeeWithKeyAndValue(employee, key, value){
    employee[key]=value
    return employee
}
function deleteFromEmployeeByKey(employee, key){
    const newEmployee2 = {...employee[key]}
    delete newEmployee2[key]
 return newEmployee2   
}
function destructivelyDeleteFromEmployeeByKey(employee, key){
    delete employee[key]
    return employee
}