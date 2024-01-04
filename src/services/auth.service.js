import { User } from "../models/auth.model.js";
import bcrypt from "bcrypt";

export class authService {
  static async register(user) {
    const salt = await bcrypt.genSalt(10);
    const password = await bcrypt.hash(user.password, salt);

    const createdUser = await User.create({
      userName: user.username,
      password: password,
    });

    return createdUser;
  }
  static async login(user) {
    const response = await User.findAll({
      where: {
        userName: user.username,
      },
    });

    if (response.length == 0) {
      return false;
    }

    const validatePassword = await bcrypt.compare(
      user.password,
      response[0].password
    );
    if (!validatePassword) {
      return false;
    }

    return response;
  }
  static async consultUser(username) {
    const response = await User.findAll({
      where: {
        userName: username,
      },
    });
    console.log(response);
    return response;
  }
  static async defaultUser() {
    const salt = await bcrypt.genSalt(10);
    const password = await bcrypt.hash("user", salt);

    try {
      await User.findOrCreate({
        where: {
          userName: "User",
        },
        defaults: {
          userName: "User",
          password: password,
        },
      });
    } catch (error) {
      console.log(error);
    }
  }
}
