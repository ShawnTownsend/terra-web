import LocalStrategy from 'passport-local'
import dotenv from 'dotenv'
import bcrypt from 'bcrypt'
import { context } from '../db/context.js'

dotenv.config()

const passportLocal = async passport => {
   passport.use(
      new LocalStrategy(async function verify(username, password, done) {
         const user = await context.prisma.user.findFirst({
            where: {
               email: username,
               provider: 'local',
            },
         })

         // if no user was returned, error out
         if (!user) return done('No user found')

         console.log('user', user)

         // compare hashed+stored password to entered password
         const saltRounds = 10
         if (!bcrypt.compareSync(password, user.password))
            return done('passwords don not match')

         return done(null, user)
      })
   )
}

export default passportLocal
