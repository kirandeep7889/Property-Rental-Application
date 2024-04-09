const validateLoginInput = require("./ValidateLoginInput");

const validateRegisterInput = (req, res, next) => {
    const { username, password, email, role, name, phone_number } = req.body;
  
    const usernameRegex = /^[a-zA-Z0-9_]{3,20}$/;
    const passwordRegex = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[a-zA-Z]).{8,}$/;
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    const roleRegex = /^(seller|buyer)$/;
    const nameRegex = /^[a-zA-Z\s]+$/;
    const phoneRegex = /^\d{10}$/;
  
    if (!username || !usernameRegex.test(username)) {
      return res.status(400).json({ error: 'Invalid username. Must be 3-20 characters, alphanumeric only' });
    }
  
    if (!password || !passwordRegex.test(password)) {
      return res.status(400).json({ error: 'Invalid password. Must be at least 8 characters, including uppercase, lowercase, and numeric characters' });
    }
  
    if (!email || !emailRegex.test(email)) {
      return res.status(400).json({ error: 'Invalid email address' });
    }
  
    if (!role || !roleRegex.test(role)) {
      return res.status(400).json({ error: 'Invalid role. Must be either "seller" or "buyer"' });
    }
  
    if (name && !nameRegex.test(name)) {
      return res.status(400).json({ error: 'Invalid name. Must contain only letters and spaces' });
    }
  
    if (phone_number && !phoneRegex.test(phone_number)) {
      return res.status(400).json({ error: 'Invalid phone number. Must be 10 digits' });
    }
  
   next();
  };
  
  module.exports = validateLoginInput;
  