const bcrypt = require('bcrypt');

//Hash Password
module.exports.hashPassword = async (password)=>{
    try {
        const salt = 8;
        const hashPassword = await bcrypt.hash(password,salt);
        console.log("Your HashPassword:",hashPassword);
        return hashPassword;
    } catch (error) {
        console.log(Error);
    }
}

//comparePassword
module.exports.comparePassword = async (password,hashPassword)=>{
    return bcrypt.compare(password,hashPassword);
}
