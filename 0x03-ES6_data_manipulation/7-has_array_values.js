export default function hasValuesFromArray(_set, array) {
    return array.map((student) => _set.has(student)).reduce((student, y) => (!!y), false);
}
