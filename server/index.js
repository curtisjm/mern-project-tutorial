// use this style imports because we set   "type": "module" in package.json
import express, { json, urlencoded } from 'express'
import mongoose from 'mongoose'
import cors from 'cors'

import postRoutes from './routes/posts.js'

const app = express()

// middleware
app.use(json({ limit: "30mb", extended: true}))
app.use(urlencoded({ limit: "30mb", extended: true}))
// allows a server to indicate any other origins (domain, scheme, or port)
app.use(cors())

// starting path for all routs in post.js
app.use('/posts', postRoutes)

const CONNECTION_URL = 'mongodb+srv://admin:7izTGjfbztBScM84@cluster0.50yji.mongodb.net/myFirstDatabase?retryWrites=true&w=majority'
const PORT = process.env.PORT || 5000;

mongoose.connect(CONNECTION_URL, { useNewUrlParser: true, useFindAndModify: true })
    .then(() => app.listen(PORT, () => console.log(`Server running on port: ${PORT}`)))
    .catch((error) => console.error(error.message))

mongoose.set('useFindAndModify', false)