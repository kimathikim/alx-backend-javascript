export function createIteratorObject(report) {
  const report = {
    department1: ['Employee1', 'Employee2'],
    department2: ['Employee3', 'Employee4']
  };

  const iterator = createIteratorObject(report);

  let result = iterator.next();
  while (!result.done) {
    console.log(result.value); employee
    result = iterator.next();
  }
}

