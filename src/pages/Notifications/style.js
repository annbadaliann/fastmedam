import { makeStyles } from "@material-ui/core";

const useStyles = makeStyles(() => ({
  header: {
    background: "#92d365",
    padding: " 20px",

    "& h3": {
      color: "#ffffff",
      fontWeight: "normal",
      fontSize: "21px",
    },
  },
  wrapper: {
    padding: "20px",
  },
  notificationPaper: {
    padding: "5px 20px 13px 20px",
    marginBottom: "8px",
    boxShadow: '0px 1px 3px #00000017'
  },
  notification: {
    display: "flex",
    alignItems: "center",
    justifyContent: "space-between",
    position: 'relative'
  },
  textSide: {
    display: "flex",
    alignItems: "center",
  },
  info: {
    display: "flex",
    alignItems: "center",
    paddingTop: "13px",

    "& h4": {
      lineHeight: "20px",
    },

    "& p": {
      marginLeft: "10px",
      fontSize: "13px",
      color: "#828282",
      lineHeight: "21px",
    },
  },
  date: {
    fontSize: "12px",
    color: "#6d6d6d",
  },
  avatar: {
    marginRight: "13px",
  },
  notificationsList: {
    overflow: "auto",
    padding: '1px'
  },
  pagination: {
    marginTop: "30px"
  },
  unseenNotifications: {
    backgroundColor: "#f6f8f8"
  },
  dropdown: {
    position: "absolute",
    backgroundColor: "white",
    borderRadius: "8px",
    right: "-15px",
    top: "35px",
    zIndex: 1,
    width: "280px",
    boxShadow: "0 10px 28px 0 rgba(95, 109, 124, 0.3)",

    "&:before": {
      content: "''",
      position: "absolute",
      top: "-8px",
      right: "15px",
      borderRight: "8px solid transparent",
      borderBottom: "8px solid #efefef",
      borderLeft: "8px solid transparent",
    },
  },
  dropdownHeader: {
    backgroundColor: "#efefef",
    padding: "10px 17px",
    borderTopLeftRadius: "8px",
    borderTopRightRadius: "8px",
  },
  title: {
    textTransform: "uppercase",
    lineHeight: "17px",
    fontSize: "12px",
    color: "#5d5959",
    fontWeight: "bold",
  },
  notificationsList: {
    height: "350px",
    overflow: "auto",
    position: "relative",
  },
  notificationItem: {
    padding: "8px 17px 5px",
    borderBottom: "1px solid #f5f5f5",
  },
  notificationDate: {
    fontSize: "11px",
    lineHeight: "12px",
    color: "#a2a2a2",
    textAlign: "right",
  },
  notificationDescription: {
    lineHeight: "17px",
    fontSize: "13px",
    color: "#5d5959",
  },
  buttonContainer: {
    padding: "10px 17px",
  },
  button: {
    backgroundColor: "#7ac943",
    color: "white",
    fontSize: "13px",
    lineHeight: "18px",
    textTransform: "unset",

    "&:hover": {
      backgroundColor: "#7ac943",
      opacity: "90%",
    },
  },
  noList: {
    color: "#3e3d3d",
    textAlign: "center",
    padding: "25px 0",
    fontSize: "14px",
  },
  settingsIcon: {
    position: "absolute",
    height: "20px",
    color: "#6f6f6f",
  },
  settingsDropdownWrapper: {
    position: "absolute",
    right: "0",
    top: "20px"
  },
  settingsDropdown: {
    backgroundColor: "#fff",
    position: "absolute",
    right: "4px",
    zIndex: "1",
    width: "150px",
    boxShadow: "0px 0px 10px #cac8c8",
    borderRadius: "5px",
  },
  settingsItem: {
    color: "#4c4c4c",
    fontSize: "14px",
    paddingTop: "3px",
    paddingBottom: "3px",
    cursor: "pointer",
    transform: "transition all .3s",

    '&:hover':{
      backgroundColor: "#f7f7f7"
    }
  },
  '@media (max-width: 550px)': {
    textSide: {
      flexDirection: 'column',
      alignItems: 'flex-start'
    },
    info: {
   
      "& p": {
        marginLeft: 0,
       
      },
    },
  }
}));

export default useStyles;
