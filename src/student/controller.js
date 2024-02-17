const pool = require('../../db');
const queries = require('./queries');

const getStudents = (req, res) => {
    pool.query(queries.getStudents, (error, results) => {
        if (error) throw error;
        res.status(200).json(results.rows);
    });
};

const getStudentById = (req, res) => {
    const id = parseInt(req.params.id);
    pool.query(queries.getStudentById, [id], (error, results) => {
        if (error) throw error;
        res.status(200).json(results.rows);
    });
};

const addStudent = (req, res) => {
    const { name, email, age, dob } = req.body;
    pool.query(queries.checkEmailExists, [email], (error, results) => {
        if (results.rows.length) {
            res.send('Email already exists.');
        }
        pool.query(queries.addStudent, [name, email, age, dob], (error, results) => {
            if (error) throw error;
            res.status(201).send('Student created successfully!');
        })
    });
};

const removeStudent = (req, res) => {
    const id = parseInt(req.params.id);
    pool.query(queries.getStudentById, [id], (error, results) => {
        const noStudentFound = !results.rows.length;
        if (noStudentFound) {
            res.send('Student not found.');
        }
        pool.query(queries.removeStudent, [id], (error, results) => {
            if (error) throw error;
            res.status(200).send('Student removed successfully.');
        })
    })
};

const updateStudentName = (req, res) => {
    const id = parseInt(req.params.id);
    const { name } = req.body;
    pool.query(queries.getStudentById, [id], (error, results) => {
        const noStudentFound = !results.rows.length;
        if (noStudentFound) {
            res.send('Student not found.');
        }
        pool.query(queries.updateStudentName, [name, id], (error, results) => {
            if (error) throw error;
            res.status(200).send('Student name updated successfully.');
        });
    })
};

const updateStudentEmail = (req, res) => {
    const id = parseInt(req.params.id);
    const { email } = req.body;
    pool.query(queries.getStudentById, [id], (error, results) => {
        const noStudentFound = !results.rows.length;
        if (noStudentFound) {
            res.send('Student not found.');
        }
        pool.query(queries.updateStudentEmail, [email, id], (error, results) => {
            if (error) throw error;
            res.status(200).send('Student email updated successfully.');
        });
    })
};

const updateStudentAge = (req, res) => {
    const id = parseInt(req.params.id);
    const { age } = req.body;
    pool.query(queries.getStudentById, [id], (error, results) => {
        const noStudentFound = !results.rows.length;
        if (noStudentFound) {
            res.send('Student not found.');
        }
        pool.query(queries.updateStudentAge, [age, id], (error, results) => {
            if (error) throw error;
            res.status(200).send('Student age updated successfully.');
        });
    })
};


module.exports = {
    getStudents,
    getStudentById,
    addStudent,
    removeStudent,
    updateStudentName,
    updateStudentEmail,
    updateStudentAge,
};