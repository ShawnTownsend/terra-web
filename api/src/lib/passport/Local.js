import LocalStrategy from 'passport-local'
import dotenv from 'dotenv'
import { context } from '../db/context.js'

dotenv.config({ path: '../' })

const passportLocal = async passport => {
   passport.use(
      new LocalStrategy(function (username, password, done) {
         context.prisma.user.findUnique(
            { username: username },
            function (err, user) {
               if (err) {
                  return done(err)
               }
               if (!user) {
                  return done(null, false)
               }
               if (!user.verifyPassword(password)) {
                  return done(null, false)
               }
               return done(null, user)
            }
         )
      })
   )
}

export default passportLocal
