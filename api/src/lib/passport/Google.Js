import GoogleStrategy from 'passport-google-oauth20'
import dotenv from 'dotenv'
import { context } from '../db/context.js'

dotenv.config({ path: '../' })

const passportGoogle = async passport => {
   passport.use(
      new GoogleStrategy.Strategy(
         {
            clientID: process.env.GOOGLE_API_ID,
            clientSecret: process.env.GOOGLE_API_SECRET,
            callbackURL: '/auth/google/callback',
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
                     image: profile.photos[0].value,
                  },
               })

               await context.prisma.account.create({
                  data: {
                     userId: newUser.id,
                     provider: 'google',
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
                     image: profile.photos[0].value,
                  },
               })
            }
            cb(null, profile)
         }
      )
   )
}

export default passportGoogle
