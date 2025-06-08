const userService = require("../services/userService.js");
const UserService = require("../services/userService.js");

// get Data from user
class UserController {
  // create user logic
  async createUser(req, res) {
    try {
      const { name, email, phone } = req.body;
      const saveuser = await UserService.createUser(name, email, phone);
      res.json(saveuser);
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  }

  //   accessing all users logic
  async getAllusers(req, res) {
    try {
      const users = await UserService.getAllusers();
      res.json(users);
    } catch (error) {
      console.log(error);
      res.status(500).json({ error: error.message });
    }
  }

  //   Getting userid logic
  async getUserById(req, res) {
    const userId = req.params.id; //to get the userid from the body
    try {
      const user = await userService.getUserById(userId);
      if (!user) return res.status(404).json({ error: "USer not found" });

      res.json(user);
    } catch (error) {
      console.log("error in getting userid :", error.message);
    }
  }
  //  update user backend logic
  async updateUser(req, res) {
    const userId = req.params.id; //to get the userid from the body
    const updatedData = req.body;
    try {
      const updatedUser = await userService.updateUser(userId, updatedData);
      if (!updatedUser)
        return res.status(404).json({ error: "USer not found" });

      res.json(updatedUser);
    } catch (error) {
      console.log("error in getting userid :", error.message);
    }
  }

  // delete user backend logic
  async deleteuser(req, res) {
    const userId = req.params.id; //to get the userid from the body
    try {
      const deleteduser = await userService.deleteUser(userId);
      if (!deleteduser)
        return res.status(404).json({ error: "USer not found" });

      res.json({ message: "User Deleted successfully", user: deleteduser });
    } catch (error) {
      console.log("error in getting userid :", error.message);
    }
  }
}

module.exports = new UserController();
