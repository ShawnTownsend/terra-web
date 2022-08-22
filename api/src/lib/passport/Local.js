import LocalStrategy from 'passport-local'
import dotenv from 'dotenv'
import bcrypt from 'bcrypt'
import { context } from '../db/context.js'

dotenv.config()

const passportLocal = async passport => {
   passport.use(
      new LocalStrategy(async function verify(username, password, cb) {
         const user = await context.prisma.user.findFirst({
            where: {
               email: username,
               provider: 'local',
            },
         })

         // if no user was returned, error out
         if (!user)
            return cb({
               name: 'UserNotFound',
               message: 'That email is not a valid user',
            })

         console.log('user', user)

         // compare hashed+stored password to entered password
         if (!bcrypt.compareSync(password, user.password))
            return cb({
               name: 'WrongPassword',
               message: 'You entered the wrong password',
            })

         return cb(null, user)
      })
   )
}

export default passportLocal
