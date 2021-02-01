// .form-wrapper {
//   border-radius: 3px;
//   width: 70%;
//   margin: 70px auto;
//   padding: 45px 56px;
//   -webkit-box-shadow: 0 2px 19px -4px rgba(0, 0, 0, 0.29);
//   box-shadow: 0 2px 19px -4px rgba(0, 0, 0, 0.29);

//   .title {
//       margin-bottom: 30px;
//   }
//   button {
//       margin-top: 30px;
//       width: 250px;
//   }
// }

// .form-grid {
//     display: grid;
//     grid-gap: 30px;
//     grid-template-columns: repeat(2, 1fr);

//     .G-password-field{
//       margin-top: 8px;
//     }
// }
import { makeStyles } from "@material-ui/core";

const useStyles = makeStyles(() => ({
  about: {
    backgroundColor: "#8ec765",
    padding: "50px 0",
  },
  content: {
    display: "flex",
    width: "80%",
    margin: "0 auto",
  },
  info: {
    paddingTop: "60px",
    color: "#fff",
    marginLeft: "50px",

    "& h2": {
      color: "#fff",
      fontSize: "45px",
      marginBottom: "10px",
    },

    "& p": {
      fontSize: "18px",
    },
  },
  profpic: {
    width: "250px",
    height: "250px",
    position: "relative",


    "& img": {
      width: "100%",
      height: "100%",
      objectFit: "cover",
      borderRadius: "50%",
    },

    "& div": {
      display: "none",
      position: "absolute",
      bottom: "0",
      left: "0",
      width: "250px",
      height: "250px",
      borderRadius: "50%",
      background: "#1010108f",
      cursor: "pointer",

      "& svg": {
        position: "absolute",
        top: "50%",
        left: "50%",
        transform: "translate(-50%, -50%)",
        fontSize: "60px",
        fill: "#fff",
      },
    },

    "&:hover": {
      "& div": {
        transition: "all 6s",
        display: "block",
      },
    },

    "& label": {
      width: "100%",
      height: "100%",
      cursor: "pointer",
    },
  },
  formsSection: {
    padding: "100px 0",
  },
  formWrapper: {
    width: "80%",
    margin: "0 auto",
    padding: "40px 30px",
    boxShadow: "0 2px 19px -4px rgba(0, 0, 0, 0.29)",
  },
  formTitle: {
    marginBottom: "30px",
  },
  formGrid: {
    display: "grid",
    gridTemplateColumns: "2fr 2fr",
    gridGap: "15px 30px",
  },
  buttonWrapper: {
    display: "flex",
    justifyContent: "flex-end",

    "& button": {
      marginTop: "20px",
      width: "250px",
      fontSize: "15px",
      textTransform: "uppercase",
    },
  },
  changePasswordForm: {
    marginTop: "50px",
  },
  '@media (max-width: 900px)': {
   formWrapper: {
     width: '100%'
   },
   content: {
     width: '100%'
   },
   info: {
    marginLeft: "20px",

    
    "& h2": {
      fontSize: "40px",
    },
   },
   profpic: {
     width:'200px',
     height: '200px'
   }
  },
  footerSide: {
    display: "flex",
    alignItems: "center",
    justifyContent: "space-between"
  },
  resetPass: {
    color: "red",
    fontSize: "15px",
    cursor: "pointer"
  },
  '@media (max-width: 600px)': {
    formGrid: {
      gridTemplateColumns: "repeat(1, 1fr)",
      gridColumnGap: "10px",
    },
    formWrapper: {
      paddingLeft: '15px',
      paddingRight: '15px'
    },
    content: {
      flexDirection: 'column'
    },
    info: {
      marginLeft: '0',
      paddingTop: '20px'
    }
   },

   '@media (max-width: 400px)': {
    formTitle: {
      fontSize: '25px'
    },
    buttonWrapper: {
      justifyContent: 'center',

      "& button": {
        width: '300px'
      }
    },
    content: {
      alignItems: 'center'
    }
   }

}));

export default useStyles;
