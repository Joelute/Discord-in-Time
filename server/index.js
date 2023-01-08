const express = require('express');
const dotenv = require('dotenv')
const cors = require('cors')
const date = require('./routes/date')
const connectDB = require('./db/connect')
const notFound = require('./middleware/not-found')
const errorHandler = require('./middleware/error-handler')

dotenv.config()
port = process.env.PORT? process.env.PORT: 3000;
const app = express()

app.use(express.json())
app.use(cors())


app.use('/api/v1/date', date)

app.use('/', (req, res) => {
    res.status(200).json({msg: 'hello world'})
})

app.use(notFound)
app.use(errorHandler)

const start = async () => {
    try {
        await connectDB(process.env.DB_URL)
        app.listen(port, console.log(`Listening on port ${port}...`))
    } catch (error) {
        console.log(error)
    }
}

start()


