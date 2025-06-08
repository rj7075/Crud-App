const User = require("../models/user");

class UserService {
  // user creation and save the users
  async createUser(name, email, phone) {
    const newUser = new User({ name, email, phone });
    return await newUser.save();
  }

  // get all users from database
  async getAllusers() {
    return await User.find();
  }
  // find the user id
  async getUserById(userId) {
    return await User.findById(userId);
  }

  async updateUser(userId, updatedData) {
    return await User.findByIdAndUpdate(userId, updatedData, {
      new: true,
    });
  }

  async deleteUser(userId) {
    return await User.findByIdAndDelete(userId);
  }
}

module.exports = new UserService();
