export default function getStudentIdsSum(array) {
    // this function will return the sum of all the student ids
    if (Array.isArray(array)) {
        return array.reduce((sum, student) => sum + student.id, 0);
    }
}
