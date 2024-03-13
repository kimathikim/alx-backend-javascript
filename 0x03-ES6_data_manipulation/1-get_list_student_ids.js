export default function getListStudentIds(array) {
	// this function will return an array of student ids from a list of objects
	if (Array.isArray(array)) {
		return array.map((student) => student.id);
	}
	return [];
}
