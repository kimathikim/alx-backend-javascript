// function that receives two paramenters, string and arrayof strings

export default function createEmployeesObject(departmentName, employees) {
  return { [departmentName]: employees };
}
