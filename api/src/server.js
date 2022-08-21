import express from 'express'
import session from 'express-session'
import cors from 'cors'
import dotenv from 'dotenv'
import { v4 as uuidv4 } from 'uuid'
dotenv.config()

// load vars from ENV variables
const SECRET = process.env.SECRET
const PORT = process.env.PORT ? process.env.PORT : 3001
const URL = process.env.URL ? process.env.URL : 'localhost'

// import routes
import strategyRoutes from './routes/strategies.js'
import authRoutes from './routes/auth.js'

// initialize the express server
const app = express()
app.use(express.json())
// app.use(bodyParser.urlencoded({ extended: true }))

app.use(
   cors({
      origin: process.env.APP_URL,
      credentials: true,
   })
)

app.use(
   session({
      genid: req => uuidv4(),
      name: 'terra',
      secret: SECRET,
      resave: false,
      saveUninitialized: false,
      cookie: {
         httpOnly: true,
         //  secure: true,
         //  sameSite: true,
         maxAge: 7 * 24 * 60 * 60 * 1000, // 1 week
      },
   })
)

app.get('/hello-there', async (req, res) => {
   res.json({ whom: 'Obi-Wan Kenobi' })
})

// mount routes
app.use('/auth', strategyRoutes)
app.use('/auth', authRoutes)

// start the server
app.listen(PORT, URL, () => {
   console.log(`EXPRESS: started on http://${URL}:${PORT}`)
})
