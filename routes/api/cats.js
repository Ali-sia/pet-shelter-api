const express = require('express');

const { upload } = require('../../utils');

const { cats: ctrl } = require('../../controllers');

const router = express.Router();

router.get('/', ctrl.getCatsList);
router.post('/', ctrl.addNewCat);

router.get('/:catId', ctrl.getCatById);
router.patch('/:catId', upload.single('photo'), ctrl.updateCatPhoto);

module.exports = router;
