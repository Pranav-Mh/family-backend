const express = require('express');
const router = express.Router();
const memberController = require('../controllers/member.controller');

router.post('/', memberController.addMember);
router.get('/', memberController.getAllMembers);
router.put('/:id', memberController.updateMember);
router.delete('/:id', memberController.deleteMember);

module.exports = router;
