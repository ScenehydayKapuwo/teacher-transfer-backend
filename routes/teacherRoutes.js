const express = require('express');
const router = express.Router();
const {
  getTeachers,
  getTeacherById,
  updateTeacher,
  deleteTeacher,
  getProfilePicture,
  getTeacherProfile
} = require('../controllers/teacherController');
const upload = require('../middleware/upload');
const authenticateUser = require("../middleware/authenticateUser");

router.get('/me/profile-picture', authenticateUser, getProfilePicture);

router.get('/', authenticateUser, getTeachers);
router.get('/:id', authenticateUser, getTeacherById);
router.get('/tsno/:id', authenticateUser, getTeacherProfile);
router.put('/:id', authenticateUser, upload.single('profilePicture'), updateTeacher);
router.delete('/:id', authenticateUser, deleteTeacher);

module.exports = router;
