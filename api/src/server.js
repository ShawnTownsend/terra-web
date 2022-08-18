import express from 'express'
import cors from 'cors'
import dotenv from 'dotenv'
dotenv.config()
// import { PrismaClient } from '@prisma/client'

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

// const prisma = new PrismaClient()
// async function main() {
//    // ... you will write your Prisma Client queries here

//    await prisma.user.create({
//       data: {
//          email: 'royanger@gmail.com',
//          provider: 'test',
//          providerId: 'test2',
//       },
//    })

//    const allUsers = await prisma.user.findMany()
//    console.log(allUsers)
// }

// main()
//    .then(async () => {
//       await prisma.$disconnect()
//    })
//    .catch(async e => {
//       console.error(e)
//       await prisma.$disconnect()
//       process.exit(1)
//    })

// start the server
app.listen(PORT, URL, () => {
   console.log(`EXPRESS: started on http://${URL}:${PORT}`)
})
