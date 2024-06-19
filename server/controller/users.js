const User = require("../models/user");
const bcrypt = require("bcrypt");

// register
exports.regester = async (req, res) => {
  const { password, username, email } = req.body;

  try {
    if (!username || !password || !email)
      return res.status(400).json({
        succes: false,
        error: "talbaraa bvren buglunu vv",
      });

    const salt = await bcrypt.genSalt(10);
    const hashedPassword = await bcrypt.hash(password, salt);

    const userData = { ...req.body, password: hashedPassword };

    const user = await User.create(userData);

    if (!user)
      return res.status(400).json({
        succes: false,
        error: "hereglegchiig bvrtgej cadsangvi",
      });

    return res.status(200).json({
      success: true,
      user,
    });
  } catch (err) {
    return res.status(500).json({
      success: false,
      error: err.message,
    });
  }
};

exports.login = async (req, res) => {
  try {
    const { email, password } = req.body;
    if (!email || !password) {
      return res.status(404).json({
        success: false,
        error: "Талбар дутуу байна.",
      });
    }
    const user = await User.findOne({ email }).select("+password");
    console.log(user);

    if (!user) {
      return res.status(404).json({
        success: false,
        error: "Та бүртгэлээ дахиж шалгана уу.",
      });
    }
    const ispassword = await user.checkPassword(password);
    if (!ispassword) {
      return res.status(400).json({
        success: false,
        error: "Та нууц үгээ дахин шалгана уу.",
      });
    }
    const token = user.getJWT();

    return res.status(200).json({
      success: true,
      token,
    });
  } catch (err) {
    return res.status(505).json({
      success: false,
      error: err.message,
    });
  }
};
