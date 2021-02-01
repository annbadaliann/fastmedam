import makeStyles from "@material-ui/core/styles/makeStyles";

const useNavStyles = makeStyles((theme) => ({
  navWrapper: {
    backgroundColor: theme.palette.common.white,
    boxShadow: "0px 0px 10px 0px #e6ebdf",
    padding: '0 70px'
  },
  navbar: {
    minHeight: 55,
    justifyContent: "space-between",
  },
  iconButton: {
    padding: "4px",
  },
  menuIcon: {
    color: "#49B000",
    fontSize: "35px",
  },
  avatarWrapper: {
    position: "relative",
    marginLeft: "20px"
  },
  menu: {
    position: "absolute",
    top: "54px",
    right: "0",
    backgroundColor: "#f7f7f7",
    zIndex: "2",
    // boxShadow: " 0px 3px 10px 0px #b3a7a7",
    width: "172px",

    "&:before": {
      content: "''",
      position: "absolute",
      top: "-8px",
      right: "15px",
      borderRight: "8px solid transparent",
      borderBottom: "8px solid #f5f5f5",
      borderLeft: "8px solid transparent",
    },
  },
  menuItem: {
    color: "#6c7986",
    cursor: "pointer",
    padding: "10px 10px",
    transition: "all .3s",
    borderBottom: "1px solid #f1f1f1",
    fontSize: "14px",

    '& svg': {
      marginRight: '5px',
      fontSize: "19px"
    },

    "&:hover": {
      backgroundColor: "#efefef",
    },

    "&:last-of-child": {
      borderBottom: "unset",
    },
  },
  userInfo: {
    display: "flex",
    alignItems: "center",
    cursor: "pointer"
  },
  userName: {
    color: "#060606",
    marginLeft: "10px"
  },
  userIcon: {
    color: "#49B000",
    fontSize: "28px",
  },
  '@media (max-width: 1420px)': {
    navWrapper: {
      padding: '0 25px'
    }
  },
  

  '@media (max-width: 500px)': {
    navWrapper: {
      padding: '0'
    }
  }
}));

const useSelectCityStyles = makeStyles((theme) => ({
  selectCity: {
    cursor: "pointer",
    color: "#49B000",
    marginLeft: "30px",

    "& .icon-ic_location": {
      fontSize: "19px",
      marginBottom: "3px",
      marginRight: "5px",
    },
    "& .M-select > .M-select-header": {
      padding: "0 15px 0 0",
    },
    "& .M-select > .M-select-body": {
      width: "420px",
      padding: "20px 25px",
      position: "absolute",
      zIndex: "555",
      top: "48px",

      "& .M-select-body-container": {
        display: "grid",
        gridTemplateColumns: "repeat(3, 1fr)",
        gridGap: "20px",
        marginTop: "30px",
      },
    },
    "& > span": {
      display: "flex",
      alignItems: "center",
      margin: "0 0 0 4px",
    },
    "& .icon-ic_arrowdown": {
      fontSize: "8px",
      fontWeight: "bold",
    },
  },

 

  '@media (max-width: 400px)': {
    selectCity: {
      marginLeft: "5px",

      "& .icon-ic_location": {
        fontSize: "17px",
      },
    }
  }



}));

const useSelectLanguageStyles = makeStyles((theme) => ({
  languages: {
    marginRight: "15px",

    "& span": {
      color: "#000000",
      marginLeft: "10px",
      cursor: "pointer",
      transition: "all 0.2s",

      "&:hover": {
        color: "#8bc34a",
      },
    },
  },
  selectedLanguage: {
    color: "#8bc34a !important",
  },
}));

export { useNavStyles, useSelectCityStyles, useSelectLanguageStyles };
