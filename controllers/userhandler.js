const Users = require("../Models/userModel");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
require("dotenv").config();


const userCtrl = {
  register: async (req, res) => {
    try {
      const { name, email, password } = req.body;

      const user = await Users.findOne({ email });

      if (user)
        return res.status(400).json({ msg: "This email already exists" });

      if (password.length < 6)
        return res
          .status(400)
          .json({ msg: "Password should be atleast 6 Characters long." });

      const passwordHash = await bcrypt.hash(password, 10);
      const newUser = new Users({
        name,
        email,
        password: passwordHash,
      });

      await newUser.save();
      return res.json({msg: "Register Successfully"});
    } catch (err) {
      return res.status(500).json({ msg: err.message });
    }
},
login: async (req, res) => {
    try {
      const { email, password } = req.body;

      const user = await Users.findOne({ email });

      if (!user) return res.status(400).json({ msg: "User does not exist" });

      const isMatch = await bcrypt.compare(password, user.password);
      if (!isMatch) return res.status(400).json({ msg: "Incorrect Password" });

      const accesstoken = createAccessToken({ id: user._id });
      return res.status(200).json({msg: "Login Successfully",accesstoken})
    } catch (err) {
      return res.status(500).json({ msg: err.message });
    }
  },
  
  
};
const createAccessToken = (user) => {
  return jwt.sign(user, process.env.ACCESS_TOKEN_SECRET, { expiresIn: "1d" });
};


module.exports = userCtrl;



