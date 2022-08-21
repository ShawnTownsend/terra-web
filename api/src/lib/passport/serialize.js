import { context } from '../db/context.js'

const passportSerialize = passport => {
   passport.serializeUser((user, callback) => {
      if (user.provider === 'google')
         callback(null, { provider: 'google', id: user.id })
      if (user.provider === 'facebook')
         callback(null, { provider: 'facebook', id: user.id })
   })
}

const passportDeserialize = passport => {
   passport.deserializeUser(async (profile, callback) => {
      if (profile.provider === 'google' || profile.provider === 'facebook') {
         const user = await context.prisma.user.findUnique({
            where: {
               providerAccountId: profile.id,
            },
         })
         if (user) {
            return callback(null, user)
         } else {
            throw new Error('There was a problem deserializing the session')
         }
      }

      const user = await context.prisma.user.findUnique({
         where: {
            email: profile,
         },
      })
      if (user) {
         return callback(null, user)
      } else {
         throw new Error('There was a problem deserializing the session')
      }
   })
}

export { passportSerialize, passportDeserialize }
