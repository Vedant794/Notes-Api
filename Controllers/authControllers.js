import { loginService, registrationService } from "../services/authServices.js";

// Registration Controller
export const registrationController = async (req, res) => {
  try {
    const { name, email, password } = req.body;

    if (!name || !email || !password) {
      return res.status(400).json({ error: "All fields are required." });
    }

    const response = await registrationService(name, email, password);
    return res.status(201).json(response); // 201 Created
  } catch (error) {
    return res
      .status(500)
      .json({ error: error.message || "Registration failed." });
  }
};

// Login Controller
export const loginController = async (req, res) => {
  try {
    const { email, password } = req.body;

    if (!email || !password) {
      return res
        .status(400)
        .json({ error: "Email and password are required." });
    }

    const response = await loginService(email, password);

    return res.status(200).json(response); // 200 OK
  } catch (error) {
    return res.status(401).json({ error: error.message || "Login failed." }); // 401 Unauthorized
  }
};
