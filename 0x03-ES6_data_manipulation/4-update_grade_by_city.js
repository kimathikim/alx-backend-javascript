export default function updateStudentGradeByCity(array, city, newGrades) {
    // this function will return an array of students for a given location
    if (Array.isArray(array)) {
        return array.map((student) => {
            const studentGrade = newGrades.filter((grade) => grade.studentId === student.id);
            if (student.location === city && studentGrade.length > 0) {
                return { ...student, grade: studentGrade[0].grade };
            }
            return student;
        });
    }
    return [];
}
