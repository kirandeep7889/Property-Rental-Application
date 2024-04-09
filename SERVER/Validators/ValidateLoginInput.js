const validateLoginInput = (req, res, next) => {
    const { username, password } = req.body;
  
    const usernameRegex = /^[a-zA-Z0-9_]{3,20}$/;
    const passwordRegex = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[a-zA-Z]).{8,}$/;
  
    if (!username || !usernameRegex.test(username)) {
      return res.status(400).json({ error: 'Invalid username format. Must be 3-20 characters, alphanumeric only' });
    }
  
    if (!password || !passwordRegex.test(password)) {
      return res.status(400).json({ error: 'Invalid password format. Must be at least 8 characters, including uppercase, lowercase, and numeric characters' });
    }
  
    next();
  };
  
  module.exports = validateLoginInput;
  