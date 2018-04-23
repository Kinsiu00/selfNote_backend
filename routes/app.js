const express = require('express');
const router = express.Router();
const appController = require('../controllers/app')

router.get('/', appController.index);
router.get('/:id', appController.show);
router.post('/', appController.create);
router.put('/:id', appController.update);
router.delete('/:id', appController.destroy);

module.exports = router;