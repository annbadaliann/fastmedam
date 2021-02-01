export const formatDate = (date) => {
  if (date) {
    const monthNames = [
      "January ",
      "February",
      "March",
      "April",
      "May",
      "June",
      "July",
      "August",
      "September",
      "October",
      "November",
      "December",
    ];
    const localDate = new Date(date);
    return `${localDate.getDate()} ${
      monthNames[localDate.getMonth()]
    } ${localDate.getFullYear()}`;
  }
  return "";
};