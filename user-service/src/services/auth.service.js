const User = require('../models/user');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');

class AuthService {
  async signUp(request) {
    const { name, surname, email, password } = request.body;
    const isEmailExists = await User.findOne({ email: email });

    if (isEmailExists) {
        return {
            status: 400,
            message: 'Email already exists',
        };
    }
  
    const hashedPassword = await this._hashPassword(password);
  
    const user = new User({
      name,
      surname,
      email,
      password: hashedPassword,
    });
  
    try {
      await user.save();

      return { status: 201, message: 'Success' };
    } catch (e) {
        return { status: 400, message: e };
    }
  };

  async signIn (request) {
    const user = await User.findOne({ email: request.body.email });

    if (!user) {
        return {
            status: 400,
            message: 'Email or password incorrect'
        }
    }

    const isPasswordValid = await bcrypt.compare(request.body.password, user.password);

    if (!isPasswordValid) {
        return {
            status: 400,
            message: 'Email or password incorrect'
        };
    }
  
    const token = jwt.sign(
      { _id: user._id },
      'very_very_secret_key',
      { expiresIn: "3h" }
    );

    const userData = {
      _id: user._id,
      name: user.name,
      surname: user.surname,
      email: user.email
    };

    return {
        status: 200,
        message: 'Success',
        data: { token, userData }
    };
  };

  async _hashPassword(password) {
    const salt = await bcrypt.genSalt(10);

    return await bcrypt.hash(password, salt);
  };
}

module.exports = new AuthService();
