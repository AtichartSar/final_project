const passport = require('passport')
const {ExtractJwt,Strategy}= require('passport-jwt')
const db = require('../../models/index')

const option = {
    jwtFromRequest :ExtractJwt.fromAuthHeaderAsBearerToken(),
    secretOrKey: process.env.SECRET_OR_KEY
}

const JwtStrategy = new Strategy(option, async (payload, done) => {
    //แนบ model user ไปกับ request
    const targetuser = await db.User.findOne({ where: { id: payload.id } })
    console.log("targetuser.........>", targetuser);
    if (targetuser) {
        done(null, targetuser)
    } else {
        done(null, false)
    }
})
passport.use('nameJwt', JwtStrategy)