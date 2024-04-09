const mongoose=require("mongoose");


const userSchema = new mongoose.Schema({
    username: { type: String,
         required: true, 
         unique: true 
        },
    password: { type: String, 
        required: true 
    },
    email: { type: String,
         required: true,
          unique: true 
        },
    role: { type: String,
         enum: ['seller', 'buyer'],
          required: true 
        },
    name: { type: String },
    phone_number: { type: String },
  });
  
  const User = mongoose.model('User', userSchema);
  
  module.exports = User;
  
