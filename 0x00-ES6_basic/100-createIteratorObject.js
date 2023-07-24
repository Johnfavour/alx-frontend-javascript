const employeesList = createEmployeesObject("engineering", ["John Doe", "Guillaume Salva"]);
const reportObject = createReportObject(employeesList);

const iterator = createIteratorObject(reportObject);

console.log(iterator.next().value);
console.log(iterator.next().value); 
console.log(iterator.next().done);   
