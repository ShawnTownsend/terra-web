import express from 'express'
import { z } from 'zod'
import bcrypt from 'bcrypt'
import { v4 as uuidv4 } from 'uuid'
import { context } from '../lib/db/context.js'

const router = express.Router()

/**
 * @desc    Confirm user is logged in
 * @route   GET /auth/status
 * @access  PUBLIC
 */

router.get('/status', (req, res) => {
   if (req.user) {
      res.status(200).json({
         user: {
            isAuthenticated: true,
            userId: req.user.id,
            email: req.user.email,
            givenName: req.user.givenName,
            familyName: req.user.familyName,
            displayName: req.user.displayName,
         },
      })
   } else {
      res.status(200).json({
         user: {
            isAuthenticated: false,
         },
      })
   }
})

/**
 * @desc    Log user out by destroying req.user object
 * @route   POST /auth/logout
 * @access  PUBLIC
 */
router.post('/logout', (req, res) => {
   req.logout()
   res.status(200).send('User logged out')
})

/**
 * @desc    Register user
 * @route   POST /auth/register
 * @access  PUBLIC
 */
router.post('/register', async (req, res) => {
   console.log('doing stuff?')
   const Profile = z.object({
      email: z.string().email(),
      name: z.string(),
      password: z.string(),
   })

   const parsedProfile = Profile.parse(req.body)
   console.log('doing stuff 2?')
   const saltRounds = 10
   const hashedPassword = bcrypt.hashSync(parsedProfile.password, saltRounds)

   console.log('doing stuff 3?')
   const user = await context.prisma.user.create({
      data: {
         email: parsedProfile.email,
         name: parsedProfile.name,
         password: hashedPassword,
         provider: 'local',
      },
   })

   console.log('doing stuff?', user)
   const verification = await context.prisma.verification.create({
      data: {
         code: uuidv4(),
         userId: user.id,
      },
   })

   console.log('doing stuff 5?', verification)
})

export default router
