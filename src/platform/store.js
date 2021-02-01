import { StoreMallDirectoryRounded } from "@material-ui/icons";
import React from "react";
import { NotificationManager } from "react-notifications";
import globalHook from "use-global-hook";
import AuthController from "./api/auth";
import LanguageController from "./api/language";
import NotificationController from "./api/notifications";
import UserController from "./api/user";

const initialState = {
  isAuthenticated:
    typeof window !== "undefined" &&
    Boolean(localStorage.getItem("accessToken")),
  userDetails: null,
  isAuthModalOpen: false,
  authModalStep: "auth",
  language: "en",
  formStep: 1,
  resetStep: 1,
  formData: {
    firstName: "",
    lastName: "",
    email: "",
    phoneNumber: "",
    city: "",
    address: "",
    password: "",
  },
  resetForm: {
    email: "",
    key: "",
    password: "",
    confirmPassword: "",
  },
};

const actions = {
  authenticate: async (store, data) => {
    const response = await AuthController.Login(data);
    if (response && response.success) {
      const { data } = response;
      store.actions.setAuthenticated(true, data);
      NotificationManager.success("Welcome to FASTMED!");
    } else {
      NotificationManager.error(response.messages[0].value);
    }

    return response;
  },
  logout: async (store, data) => {
    const response = await AuthController.Logout(data);
    if (response && response.success) {
      store.actions.setAuthenticated(false);
    }
  },
  setAuthenticated: (store, isAuthenticated, data) => {
    if (isAuthenticated) {
      if (data) {
        localStorage.setItem("accessToken", data.accessToken);
        // localStorage.setItem('expireDate', data.expireDate);
        store.setState({ isAuthenticated: true });
      }
    } else {
      localStorage.removeItem("accessToken");
      store.setState({ isAuthenticated: false });
    }
  },
  getNotifications: async (store, data) => {
    if (store.state.isAuthenticated) {
      const response = await NotificationController.GetNotifications(data);
      return response;
    }
  },
  getUserDetails: async (store) => {
    const response = await UserController.GetDetails();
    if (response && response.success) {
      store.setState({ userDetails: response.data });
    }
  },
  getLanguages: async (store) => {
    if (store.state.isAuthenticated) {
      const response = await LanguageController.GetLanguage();
      return response;
    }
  },
  updateLanguage: async (store, data) => {
    const response = await LanguageController.ChangeLanguage(data);
    if (response && response.success) {
      store.setState({ language: data });
      localStorage.setItem("language", data);
    }
  },
  setFormData: (store, data) => {
    store.setState({
      formData: {
        ...store.state.formData,
        ...data,
      },
    });
    console.log(store, "storee");
  },
  changeFormStep: (store, step) => {
    store.setState({ formStep: step });
  },
  setResetForm: (store, data) => {
    store.setState({
      resetForm: {
        ...store.state.resetForm,
        ...data,
      },
    });
    console.log(store, data, "reset storee");
  },
  changeResetStep: (store, step) => {
    store.setState({ resetStep: step });
  },
  sendData: async (store) => {
    const response = await UserController.Register(store.state.formData);
    if (response && response.success) {
      store.actions.setAuthenticated(true, response.data);
      store.actions.setAuthModal(false);
    }
    return response;
  },
  resetPassword: async (store) => {
    const response = await UserController.Reset(store.state.resetForm);
    if (response && response.success) {
      store.actions.setAuthModalStep("auth");
    }
    return response;
  },
  setAuthModal: (store, modalState) => {
    store.setState({ isAuthModalOpen: modalState });
  },
  setAuthModalStep: (store, modalStep) => {
    store.setState({ authModalStep: modalStep });
  },
};

const useGlobal = globalHook(React, initialState, actions);

export default useGlobal;
