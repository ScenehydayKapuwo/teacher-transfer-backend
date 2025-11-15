const express = require('express');
const router = express.Router();
const {
  requestTransfer,
  getTransferRequests,
  getMyTransferRequests,
  getTransferById,
  updateTransferStatus
} = require('../controllers/transferController');
const authenticateUser = require("../middleware/authenticateUser");

router.post('/',authenticateUser, requestTransfer);
router.get('/', authenticateUser, getTransferRequests);
router.get('/my/:tsno', authenticateUser, getMyTransferRequests);
router.get('/:requestId', authenticateUser, getTransferById);
router.put('/:requestId/status', authenticateUser, updateTransferStatus);

module.exports = router;
