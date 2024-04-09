const User = require("../../models/User");
const bcrypt=require("bcrypt");
const jwt=require("jsonwebtoken")

const authenticateUser=async (req, res) => {
    try {
      const {username, password } = req.body;
  
      const user = await User.findOne({ username });
      if (!user) {
        return res.status(401).json({ error: 'Invalid credentials' });
      }
  
      const isPasswordValid = await bcrypt.compare(password, user.password);
      if (!isPasswordValid) {
        return res.status(401).json({ error: 'Invalid credentials' });
      }
  
      const token = jwt.sign({ username: user.username, role: user.role }, process.env.jwt_secret, { expiresIn: '1h' });
      res.status(200).json({ token });
    } catch (error) {
      console.error(error);
      res.status(500).json({ error: 'Internal server error' });
    }
  }

 
 module.exports=authenticateUser; 