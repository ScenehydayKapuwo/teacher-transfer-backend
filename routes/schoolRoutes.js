const express = require('express');
const router = express.Router();
const authorizeRole = require("../middleware/authorizeRole");
const {
  createSchool,
  getSchools,
  getSchoolById,
  updateSchool,
  deleteSchool
} = require('../controllers/schoolController');
const authenticateUser = require("../middleware/authenticateUser");

router.post('/', authenticateUser, authorizeRole('admin','debs','ministry admin'), createSchool);
router.get('/', authenticateUser , getSchools);
router.get('/:id', authenticateUser, authorizeRole('admin','debs','ministry admin'), getSchoolById);
router.put('/:id', authenticateUser, authorizeRole('admin','debs','ministry admin'), updateSchool);
router.delete('/:id', authenticateUser , authorizeRole('admin','debs','ministry admin'), deleteSchool);

module.exports = router;
createSchool