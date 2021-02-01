import Connection from "../services/connection";

const controllerName = "Token";

class AuthController {
  static Login = (body) => {
    const result = Connection.POST(controllerName, "Token", body);
    return result;
  };

  static Logout = (body) => {
    const result = Connection.DELETE(controllerName, "Logout", body);
    return result;
  };
}

export default AuthController;
