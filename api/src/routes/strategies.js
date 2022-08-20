import express from 'express'
import passport from 'passport'

const router = express.Router()

// configure passport
router.use(passport.initialize())
router.use(passport.session())

// setup serialize/deserialize for users
import {
   passportSerialize,
   passportDeserialize,
} from '../lib/passport/serialize.js'
passportSerialize(passport)
passportDeserialize(passport)

// Google Auth
import passportGoogle from '../lib/passport/Google.js'
passportGoogle(passport)

router.get(
   '/google',
   passport.authenticate('google', { scope: ['profile', 'email'] })
)
router.get(
   '/google/callback',
   passport.authenticate('google', { failureRedirect: '/signin' }),
   function (req, res) {
      // Successful authentication, redirect home.
      res.redirect(`${process.env.APP_URL}/dashboard`)
   }
)

// Facebook Auth
import passportFacebook from '../lib/passport/Facebook.js'
passportFacebook(passport)

router.get('/facebook', passport.authenticate('facebook', { scope: ['email'] }))
router.get(
   '/facebook/callback',
   passport.authenticate('facebook', { failureRedirect: '/signin' }),
   function (req, res) {
      // Successful authentication, redirect home.
      res.redirect(`${process.env.APP_URL}/dashboard`)
   }
)

// Local Auth
import passportLocal from '../lib/passport/Local.js'
passportLocal(passport)

router.post(
   '/login',
   passport.authenticate('local', { failureRedirect: '/login' }),
   function (req, res) {
      res.redirect('/')
   }
)

export default router
