const Date = require('../models/date')
const asyncWrapper = require('../middleware/async')

const getDate = asyncWrapper(async (req, res) => {
    const dateItem = await Date.find()
    res.status(200).json({
        status:200,
        data: dateItem
    })
})

const getOneDate = asyncWrapper(async (req, res) => {
    const dateItem = await Date.findById({ _id: req.params.id })

    if (!dateItem) {
        return res.status(404).json({
            message: `No date with id: ${req.params.id}`
        });
    }

    res.status(200).json({ 
        status:200,
        data: dateItem
     })
})

const createDate = asyncWrapper(async (req, res) => {
    const dateItem = await Date.create(req.body) 
    res.status(201).json({ 
        status:200,
        data: dateItem
     }) 
})
 
const updateDate = asyncWrapper(async (req, res) => {
    const dateItem = await Date.findByIdAndUpdate({ _id: req.params.id }, req.body)
    res.status(202).json({
        status:200,
        data: dateItem
    })
})

const deleteDate = asyncWrapper(async (req, res) => {
    const dateItem = await Date.findByIdAndDelete({ _id: req.params.id })
    res.status(204).json({
        status:200,
        data: dateItem
    })
})

module.exports = {
    getDate,
    getOneDate,
    createDate,
    updateDate,
    deleteDate
}