import express from 'express'
import session from 'express-session'
import cors from 'cors'
import dotenv from 'dotenv'
import passport from 'passport'
import { v4 as uuidv4 } from 'uuid'
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

// configure passport
app.use(passport.initialize())
app.use(passport.session())

// setup serialize/deserialize for users
import {
   passportSerialize,
   passportDeserialize,
} from './lib/passport/serialize.js'
passportSerialize(passport)
passportDeserialize(passport)

// Google Auth
import passportGoogle from './lib/passport/Google.js'
passportGoogle(passport)

app.get(
   '/auth/google',
   passport.authenticate('google', { scope: ['profile', 'email'] })
)
app.get(
   '/auth/google/callback',
   passport.authenticate('google', { failureRedirect: '/login' }),
   function (req, res) {
      // Successful authentication, redirect home.
      res.redirect(`${process.env.APP_URL}/dashboard`)
   }
)

import surverRoutes from './routes/survey.js'
app.use('/survey', surverRoutes)

// start the server
app.listen(PORT, URL, () => {
   console.log(`EXPRESS: started on http://${URL}:${PORT}`)
})
