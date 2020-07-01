const User = require('../models/User')
const callback = require('../utils/callback').callback

async function signUp (name,email,password,res){
    try {
        const user = new User({name,email,password})
        await user.save()
        const token = await user.generateAuthToken()
        return callback(res,null,200,{ user, token })
    } catch (error) {
        return callback(res,error,500,null)
    }
}

async function login (email,password,res){
    try {
        const user = await User.findByCredentials(email, password)
        if (!user) {
            callback(res,'Login failed! Check authentication credentials',400,null)
        }
        else{
            const token = await user.generateAuthToken()
            callback(res,null,200,{ user, token })
        }
    } catch (error) {
        callback(res,error,500,null)
    }
}

module.exports = {signUp,login}