export default function getStudentsByLocation(array, location) {
	// this function will return an array of students for a given location
	if (Array.isArray(array)) {
		return array.filter((student) => student.location === location);
	}
	return [];
}
