const User = require("../../models/User");

 const  editProfile=async(req,res)=> {
    try {
      const { username } = req.user;
      const {name:NewName, username: newUsername, phone_number: newPhoneNumber } = req.body;
  
      const user = await User.findOne({ username });
      if (!user) {
        return res.status(404).json({ error: 'User not found' });
      }
  
      if (newUsername) {
        user.username = newUsername;
      }

      if(NewName) {
        user.name=NewName;
      }
  
      if (newPhoneNumber) {
        user.phone_number = newPhoneNumber;
      }
  
      await user.save();
  
      res.status(200).json({ message: 'Profile updated successfully' });
    } catch (error) {
      console.error(error);
      res.status(500).json({ error: 'Internal server error' });
    }
  }


module.exports= editProfile;