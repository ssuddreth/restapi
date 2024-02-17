
const { Router } = require('express');
const controller = require('./controller');

const router = Router();

router.get('/', controller.getStudents);
router.post('/', controller.addStudent);
router.get('/:id', controller.getStudentById);
router.put('/:id', controller.updateStudentName);
router.put('/email/:id', controller.updateStudentEmail);
router.put('/age/:id', controller.updateStudentAge);
router.delete('/:id', controller.removeStudent);


module.exports = router;