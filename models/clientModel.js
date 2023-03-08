const { default: mongoose } = require('mongoose');

const userSchema = new  mongoose.Schema({
    email:{
        type : String,
        allowNull : false,
        require : true,
        unique : true
    },
    username :{
        type : String,
        allowNull : false,
        require : true,
        trim : true
    },
    password:{
        type : String,
        require:true,
        allowNull:false
    },
    phone:{
        type : String,
        require:true,
        allowNull:false
    },
    address:{
        type : String,
        require:true,
        allowNull:false
    },
    role: {
        type: Number, //admin ko lai 1 user ko lagi 0
        required: true,
        //allowNull: false
        default: 0
    }
},{timestamps: true})

module.exports = mongoose.model('user',userSchema);

// module.exports = user;