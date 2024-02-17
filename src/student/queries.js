const getStudents = 'SELECT * FROM students';
const getStudentById = 'SELECT * FROM students WHERE id = $1';
const checkEmailExists = 'SELECT s FROM students s WHERE s.email = $1';
const addStudent = 'INSERT INTO students (name, email, age, dob) VALUES ($1, $2, $3, $4)';
const removeStudent = 'DELETE FROM students WHERE id = $1';
const updateStudentName = 'UPDATE students SET name = $1 WHERE id = $2';
const updateStudentEmail = 'UPDATE students SET email = $1 WHERE id = $2';
const updateStudentAge = 'UPDATE students SET age = $1 WHERE id = $2';

module.exports = {
    getStudents,
    getStudentById,
    checkEmailExists,
    addStudent,
    removeStudent,
    updateStudentName,
    updateStudentEmail,
    updateStudentAge,
};