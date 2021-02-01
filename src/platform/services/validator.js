export const isValidEmail = value => {
  if (!value && value !== '') return false;
  const regex = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  return regex.test(value);
};

export const isValidPassword = value => {
  if(!value && value !== "") return false;
  const regex = /^.{6,}$/;
  return regex.test(value);
}

export const isValidPhoneNum = value => {
  if(!value && value !== "") return false;
  const regex = /\(?([0-9]{3})\)?([ .-]?)([0-9]{3})\2([0-9]{4})/;
  return regex.test(value);
}

export function emailValidator() {
  return /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i;
}

export function passwordValidator() {
  return /^.{5,}$/;
}

export function phoneNumberValidator() {
  return /^.{5,}$/;
}

export function maxDigits() {
  return /^[0-9]{0,6}$/;
}