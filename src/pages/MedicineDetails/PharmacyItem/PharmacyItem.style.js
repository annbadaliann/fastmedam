import { makeStyles } from "@material-ui/core";

const useStyles = makeStyles(() => ({
  pharmacy: {
    cursor: "pointer",
    // boxShadow: "0px 0px 6px #00000014",
    display: "flex",
    alignItems: "center",
    justifyContent: "space-between",
    padding: "20px 20px 20px 45px",
    border: "1px solid #00000017",
    width: "100%",
  },
  content: {
    display: "flex",
    alignItem: "center",
  },
  left: {
    marginRight: "50px",
    display: "flex",
    alignItems: "center",
  },
  photo: {
    width: "120px",
    height: "100px",
    marginRight: "20px",

    "& img": {
      width: "100%",
      height: "100%",
      objectFit: "cover",
    },
  },
  name: {
    fontWeight: "normal",
  },
  pharmacyDetails: {
    backgroundColor: "#FCFCFC",
  },
  accordion: {
    paddingLeft: "0",
    paddingRight: "0",
    boxShadow: 'unset'
  },
  accordionContent: {
    margin: "0 !important",
  },
  accordionDetails: {
    padding: "40px 20px 40px 50px",
    backgroundColor: "#FCFCFC",
    display: "block"
    
  },
  detailItem: {
    display: "flex",
    justifyContent: "space-between",
    width: "100%",
    marginBottom: "40px",

    '&:last-of-type': {
      marginBottom: "0",
    },

    "& p": {
      color: "#49B000",
      fontSize: "18px",
    },
  },
  phone: {
    color: '#79c942'
  },
  workingHours: {
    display: "block",
    marginLeft: "30px",
    color: "#000000",
    opacity: "46%",
    marginTop: "5px"
  },
  pharmacyTabContent: {
    display: "flex",
  },
  root: {
    padding: 0,
    marginRight: "16px"
  },
  checked: {
    color: "#49B000 !important"
  },

  '@media (max-width: 900px)': {
    pharmacy: {
      padding: '15px 10px'
    },
    accordionDetails: {
      padding: '20px'
    },
    name: {
      fontSize: '20px'
    },
    price: {
      fontSize: '18px'
    },
   },
}));

export default useStyles;
 