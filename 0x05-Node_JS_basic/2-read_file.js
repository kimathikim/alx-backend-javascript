const fs = require('fs');

module.exports = function countStudents(path) {
  try {
    const data = fs.readFileSync(path, { encoding: 'utf-8' });
    const lines = data.split('\n').slice(1, -1);
    const header = data.split('\n')[0].split(',');
    const idxFn = header.indexOf('firstname');
    const idxFd = header.indexOf('field');
    const fields = {};
    const students = {};

    lines.forEach((line) => {
      const list = line.split(',');
      const field = list[idxFd];
      const firstName = list[idxFn];

      if (!fields[field]) {
        fields[field] = 0;
      }
      fields[field] += 1;

      if (!students[field]) {
        students[field] = [];
      }
      students[field].push(firstName);
    });

    console.log(`Number of students: ${lines.length}`);
    for (const key in fields) {
      if (Object.hasOwnProperty.call(fields, key)) {
        const element = fields[key];
        console.log(
          `Number of students in ${key}: ${element}. List: ${students[key].join(', ')}`,
        );
      }
    }
  } catch (error) {
    throw new Error('Cannot load the database');
  }
};
