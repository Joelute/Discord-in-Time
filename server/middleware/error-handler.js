const errorHandlerMiddleware = (err, req, res, next) => {
    return res.status(500).json({
        status: 500,
        error: err
    })
}

module.exports = errorHandlerMiddleware