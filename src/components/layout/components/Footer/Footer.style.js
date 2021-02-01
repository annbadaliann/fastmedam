import makeStyles from "@material-ui/core/styles/makeStyles";

const useStyles = makeStyles(() => ({
  footer: {
    position: "absolute",
    bottom: 0,
    right: 0,
    bottom: 0,
    left: 0,
    padding: "10px 70px",
    backgroundColor: "rgba(122, 201, 67, 0.82)",
    width: "100%",

    "& p": {
      color: "#ffffff",
    },
  },
  content: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
  },
  contact: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
  },
  phoneNumber: {
    color: "#ffffff",

    "&:hover": {
      textDecoration: "underline",
    },
  },
  socialMediaIcons: {
    marginLeft: "10px",

    '& img': {
        width: '50px',
        height: '50px',
    }
  },
  '@media (max-width: 960px)': {
    footer: {
      padding: '10px 25px'
    }
  },

  '@media (max-width: 600px)': {
    footer: {
      padding: '10px 0'
    },
    content: {
      flexDirection: 'column-reverse',
      alignItems: 'flex-start'
    },
    contact: {
      width: "100%"
    }
  }
}));

export default useStyles;
