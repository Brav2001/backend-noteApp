import { validateUser } from "../schemas/user.schema.js";
import { authService } from "../services/auth.service.js";
import { createToken } from "../utils/jwt.js";

export class authController {
  static async register(req, res) {
    const result = validateUser(req.body);

    if (result.error) {
      return res.status(400).json({ error: JSON.parse(result.error.message) });
    }

    const resname = await authService.consultUser(req.body.username);

    if (resname.length > 0) {
      return res.status(409).json({
        error: {
          message: "The username is already in use. Please choose another one.",
        },
      });
    }

    const response = await authService.register(result.data);
    const token = createToken(result.data.username, response.id);

    return res.status(201).json({
      id: response.id,
      token: token,
    });
  }
  static async login(req, res) {
    const result = validateUser(req.body);

    if (result.error) {
      return res.status(400).json({ error: JSON.parse(result.error.message) });
    }

    const response = await authService.login(result.data);

    if (!response) {
      return res.status(401).json({
        error: {
          message: "Invalid username or password.",
        },
      });
    }

    const token = createToken(result.data.username, response[0].id);

    return res.status(200).json({ id: response[0].id, token: token });
  }
}
