const User = require('../models/User')

module.exports = {
    signUp: async (name,email,password,callback) => {
        try {
            const user = new User({name,email,password})
            await user.save()
            const token = await user.generateAuthToken()
            return callback(null,{ user, token })
        } catch (error) {
            return callback(error,null)
        }
    },
    login: async (email,password,callback) => {
        try {
            const user = await User.findByCredentials(email, password)
            if (!user) {
                callback('Login failed! Check authentication credentials',null)
            }
            else{
                const token = await user.generateAuthToken()
                callback(null,{ user, token })
            }
        } catch (error) {
            callback(error,null)
        }
    }
}