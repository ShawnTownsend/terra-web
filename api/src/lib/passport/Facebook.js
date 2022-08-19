import FacebookStrategy from 'passport-facebook'
import dotenv from 'dotenv'
import { context } from '../db/context.js'

dotenv.config({ path: '../' })

const passportFacebook = async passport => {
   passport.use(
      new FacebookStrategy.Strategy(
         {
            clientID: process.env.FACEBOOK_APP_ID,
            clientSecret: process.env.FACEBOOK_APP_SECRET,
            callbackURL: '/auth/facebook/callback',
            profileFields: ['id', 'displayName', 'email'],
            enableProof: true,
         },
         async (accessToken, refreshToken, profile, cb) => {
            // does the user exists?
            const user = await context.prisma.user.findUnique({
               where: {
                  email: profile.emails[0].value,
               },
            })

            // if not, then add the user
            if (!user) {
               const newUser = await context.prisma.user.create({
                  data: {
                     name: profile.displayName,
                     email: profile.emails[0].value,
                     emailVerified: new Date(),
                  },
               })

               await context.prisma.account.create({
                  data: {
                     userId: newUser.id,
                     provider: 'facebook',
                     providerAccountId: profile.id,
                  },
               })
            }

            // if the user exists, update?
            if (user && !user.googleId) {
               await context.prisma.user.update({
                  where: { email: profile.emails[0].value },
                  data: {
                     name: profile.displayName,
                  },
               })
            }
            cb(null, profile)
         }
      )
   )
}

export default passportFacebook
