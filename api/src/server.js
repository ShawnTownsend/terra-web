import express from 'express'
import cors from 'cors'
// dotenv.config()

// load vars from ENV variables
const SECRET = process.env.SECRET
const PORT = process.env.PORT ? process.env.PORT : 3001
const URL = process.env.URL ? process.env.URL : 'localhost'

// initialize the express server
const app = express()
app.use(express.json())

app.use(
  cors({
    origin: process.env.APP_URL,
    credentials: true,
  })
)

app.get('/hello-there', async (req, res) => {
  res.json({ whom: 'Obi-Wan Kenobi' })
})

// start the server
app.listen(PORT, URL, () => {
  console.log(`EXPRESS: started on http://${URL}:${PORT}`)
})
