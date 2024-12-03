// Write your solution in this file!


const employee = {
    key: "value"
}

function updateEmployeeWithKeyAndValue(employee, key, value) {
    const updatedEmployee = {...employee};
    updatedEmployee[key] = value;
    return updatedEmployee;
 }

// employee.name = "Sam"


function destructivelyUpdateEmployeeWithKeyAndValue(employee, key, value) {
    employee [key] = value
    return employee
 }

// destructivelyUpdateEmployeeWithKeyAndValue("Sam", "11 Broadway")

function deleteFromEmployeeByKey( employee, key, value){
    return {...employee, [key]: value}
}

// delete employee.Sam



function destructivelyDeleteFromEmployeeByKey(employee, key) {
    delete employee[key]
    return employee
  }

//   destructivelyDeleteFromEmployeeByKey(employee, "name", "Sam")


 