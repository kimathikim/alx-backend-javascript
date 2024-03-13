export function createIteratorObject(report) {
  const iterator = createIteratorObject(report);

  let result = iterator.next();
  while (!result.done) {
    console.log(result.value); employee
    result = iterator.next();
  }
}

