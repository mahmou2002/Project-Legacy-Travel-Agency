
const User = require ("../models/User.js")

const register= (username, email, password, photo)=>{
    const newUser = new User({
        username: username,
        email:email,
        password: password,
        photo: photo
    })
    return newUser.save()
    
}

const login = (email)=>{
    return User.findOne({ email: email})

    
}

module.exports = {
    register, login
  };