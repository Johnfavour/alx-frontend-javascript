export default function* createIteratorObject(report) {
  const departments = report.allEmployees;

  for (const department in departments) {
    const employees = departments[department];
    for (const employee of employees) {
      yield employee;
    }
  }
}
