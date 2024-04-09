const bcrypt=require("bcrypt");
const User = require("../../models/User");


const registerUser= async(req, res) => {
    try {
      const { username, password, email, role, name, phone_number } = req.body;
  
      const existingUser = await User.findOne({ $or: [{ username }, { email }] });
      if (existingUser) {
        return res.status(409).json({ error: 'Username or email already exists' });
      }
  
      const hashedPassword = await bcrypt.hash(password, 10);
  
      const newUser = new User({ username, password: hashedPassword, email, role, name, phone_number });
      await newUser.save();
  
      res.status(201).json({ message: 'User registered successfully' });
    } catch (error) {
      console.error(error);
      res.status(500).json({ error: 'Internal server error' });
    }
}  

module.exports=registerUser;