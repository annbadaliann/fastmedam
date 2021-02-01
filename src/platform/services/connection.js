import * as nodeFetch from "node-fetch";

import { NotificationManager } from "react-notifications";
import { LanguageEnum } from "../constants/enums";

class Connection {
  static BASE_URL = "http://api.fastmed.am/api";

  static queryFromObject = obj => {
    const str = [];

    for (const query in obj) {
      if (obj.hasOwnProperty(query) && obj[query]) {
        const string =
          encodeURIComponent(query) + "=" + encodeURIComponent(obj[query]);
        str.push(string);
      }
    }

    return str.join("&");
  };

  static createHeaders = isUpload => {
    let language = 1;
    const HEADERS = new Headers();
    const accessToken = localStorage.getItem('accessToken');
    const shortLanguage = localStorage.getItem("language");
    if (shortLanguage === "hy") language = LanguageEnum.hy;
    else if (shortLanguage === "ru") language = LanguageEnum.ru;
    else if (shortLanguage === "en") language = LanguageEnum.en;
    !isUpload && HEADERS.append("Content-Type", "application/json");
    HEADERS.append("language", language);
    HEADERS.append("Authorization", `Bearer ${accessToken}`)
    return HEADERS;
  };

  static responseRestructure = response => {
    if (response.status === 401 || response.status === 403) {
      window.routerHistory.push('/home');
      NotificationManager.error(
        "Something is wrong with permission or authentication"
      );
    }
    return response.ok ? response.json() : {};
  };

  static stringifyUrlEncoded = obj => {
    let urlEncoded = "";
    for (let key in obj) {
      urlEncoded += `${encodeURIComponent(key)}=${encodeURIComponent(
        obj[key]
      )}&`;
    }
    return urlEncoded;
  };

  static POST = async (controllerName, actionName, body, queryConfig) => {
    const onlyQuery = !actionName && queryConfig;
    const HEADERS = Connection.createHeaders();
    window.pendingRequest = true;
    const response = await fetch(
      `${Connection.BASE_URL}/${controllerName}${
        !onlyQuery ? "/" : ""
      }${actionName}${
        queryConfig ? `?${Connection.queryFromObject(queryConfig)}` : ""
      }`,
      {
        body: JSON.stringify(body),
        method: "POST",
        headers: HEADERS
      }
     
    )
    window.pendingRequest = false;
    return Connection.responseRestructure(response);
  };

  static PUT = async (controllerName, actionName, body, queryConfig) => {
    const onlyQuery = !actionName && queryConfig;
    const HEADERS = Connection.createHeaders();
    window.pendingRequest = true;
    const response = await fetch(
      `${Connection.BASE_URL}/${controllerName}${
        !onlyQuery ? "/" : ""
      }${actionName}${
        queryConfig ? `?${Connection.queryFromObject(queryConfig)}` : ""
      }`,
      {
        body: JSON.stringify(body),
        method: "PUT",
        headers: HEADERS
      }
    );

    window.pendingRequest = false;
    return Connection.responseRestructure(response);
  };

  static DELETE = async (controllerName, actionName, queryConfig) => {
    const onlyQuery = !actionName && queryConfig;
    const HEADERS = Connection.createHeaders();
    window.pendingRequest = true;
    const response = await fetch(
      `${Connection.BASE_URL}/${controllerName}${
        !onlyQuery ? "/" : ""
      }${actionName}${
        queryConfig ? `?${Connection.queryFromObject(queryConfig)}` : ""
      }`,
      {
        method: "DELETE",
        headers: HEADERS
      }
    );

    window.pendingRequest = false;
    return Connection.responseRestructure(response);
  };

  static GET = async (controllerName, actionName, queryConfig) => {
    const onlyQuery = !actionName && queryConfig;
    const HEADERS = Connection.createHeaders();
    window.pendingRequest = true;
    const response = await fetch(
      `${Connection.BASE_URL}/${controllerName}${
        !onlyQuery ? "/" : ""
      }${actionName}${
        queryConfig ? `?${Connection.queryFromObject(queryConfig)}` : ""
      }`,
      {
        method: "GET",
        headers: HEADERS
      }
    );

    window.pendingRequest = false;
    return Connection.responseRestructure(response);
  };

  static UPLOAD = async (controllerName, actionName, body, queryConfig) => {
    const onlyQuery = !actionName && queryConfig;
    const HEADERS = Connection.createHeaders(true);
    window.pendingRequest = true;
    const response = await fetch(
      `${Connection.BASE_URL}/api/${controllerName}${
        !onlyQuery ? "/" : ""
      }${actionName}${
        queryConfig ? `?${Connection.queryFromObject(queryConfig)}` : ""
      }`,
      {
        body,
        method: "POST",
        headers: HEADERS
      }
    );

    window.pendingRequest = false;
    return Connection.responseRestructure(response);
  };

  static Custom = async ({ url, method, body, queryConfig }) => {
    const response = await nodeFetch(
      `${url}${
        queryConfig ? `?${Connection.queryFromObject(queryConfig)}` : ""
      }`,
      {
        body,
        method
      }
    );

    return response.ok ? response.json() : {};
  };

  static ServerRequest = async ({
    method,
    controllerName,
    actionName,
    body,
    queryConfig
  }) => {
    const onlyQuery = !actionName && queryConfig;
    const response = await fetch(
      `${Connection.BASE_URL}/api/${controllerName}${
        !onlyQuery ? "/" : ""
      }${actionName}${
        queryConfig ? `?${Connection.queryFromObject(queryConfig)}` : ""
      }`,
      {
        body,
        method
      }
    );

    return response.ok ? response.json() : {};
  };
}

export default Connection;
