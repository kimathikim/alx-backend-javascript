export default function cleanSet(_set, startString) {
    if (typeof _set !== 'object') return '';
    if (typeof startString !== 'string') return '';
    if (startString.length === 0) return '';

    const stringSet = [];
    [..._set].forEach((student) => {
        if (student && student.indexOf(startString) === 0) stringSet.push(x.replace(startString, ''));
    });
    return stringSet.join('-');
}
