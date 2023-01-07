const express = require('express')
const { getDate, getOneDate, createDate, updateDate, deleteDate } = require('../controller/date')
const router = express.Router()

router.route('/').get(getDate).post(createDate)
router.route('/:id').get(getOneDate).patch(updateDate).delete(deleteDate)

module.exports = router