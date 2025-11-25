const express = require('express');
const router = express.Router();
const authorizeRole = require("../middleware/authorizeRole");
const { createVacancy, getVacancy, getVacancyById, updateVacancy, deleteVacancy } = require('../controllers/vacancyController');
const authenticateUser = require("../middleware/authenticateUser");

router.post('/', authenticateUser, authorizeRole('admin','debs','ministry admin'), createVacancy);
router.get('/', authenticateUser , getVacancy);
router.get('/:id', authenticateUser, authorizeRole('admin','debs','ministry admin'), getVacancyById);
router.put('/:id', authenticateUser, authorizeRole('admin','debs','ministry admin'), updateVacancy);
router.delete('/:id', authenticateUser , authorizeRole('admin','debs','ministry admin'), deleteVacancy);

module.exports = router;
createVacancy