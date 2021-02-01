import Connection from "../services/connection";

const controllerName = "User";

class UserController {
  static ChangePassword = (body) => {
    const result = Connection.POST(controllerName, "ChangePassword", body);
    return result;
  };

  static Register = (body) => {
    const result = Connection.POST(controllerName, "Register", body);
    return result;
  };

  static Logout = (body) => {
    const result = Connection.DELETE(controllerName, "Logout", body);
    return result;
  };

  static CheckEmail = (query) => {
    const result = Connection.GET(controllerName, `CheckEmail/${query}`);
    return result;
  };

  static SendKey = (query) => {
    const result = Connection.GET(controllerName, `SendKey/${query}`);
    return result;
  };

  static VerifyKey = (body) => {
    const result = Connection.POST(controllerName, "VerifyKey", body);
    return result;
  };

  static Reset = (body) => {
    const result = Connection.PUT(controllerName, "Reset", body);
    return result;
  };

  static GetDetails = () => {
    const result = Connection.GET(controllerName, "Details");
    return result;
  };

  static UpdateInfo = (body) => {
    const result = Connection.PUT(controllerName, "WebUpdate", body);
    return result;
  };
}

export default UserController;
