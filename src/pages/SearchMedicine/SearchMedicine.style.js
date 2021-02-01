import { makeStyles } from "@material-ui/core";

const useStyles = makeStyles(() => ({
  section: {
    paddingBottom: "100px",
  },
  content: {
    marginTop: "40px",
    display: "flex",
    justifyContent: "space-between",
  },
  filterSection: {
    border: "1px solid #F1F1F1",
    width: "20%",
  },
  listSection: {
    marginLeft: '20px',
    width: "78%",
  },
  medicine: {
    marginBottom: "30px",
    boxShadow: " 0px 4px 6px #00000029",
    border: "1px solid #f1f1f1",
    padding: "30px",
    backgroundColor: " #fff",
    transition: "all 0.3s",
    color: "#000000",
    display: "flex",
    cursor: "pointer"
  },
  image: {
    width: "220px",
    height: "152px",

    "& img": {
      width: "100%",
      height: "100%",
      objectFit: "contain",
    },
  },
  icons: {
    display: "flex",
    alignItems: "center",
    marginLeft: "20px"
  },
  icon: {
    width: "29px",
    height: "24px",
    cursor: "pointer",
    marginRight: "10px",

    "& img": {
      width: "100%",
      height: "100%",
    },
  },
  activeIcon: {
    cursor: "not-allowed"
  },
  pagination: {
      marginTop: "60px"
  },
  info: {

    '& h3': {
      color: "#000000"
    },

    '& span': {
      display: "block",
      color: "#000000",
      opacity: "62%",
      marginBottom: "5px"
    }
  },
  priceAndMore: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center"
  },
  price: {
    marginBottom: "10px",
    fontSize: "27px",
    lineHeight: "23px"
  },
  button: {
    borderRadius: "200px",
    width: "193px"
  },
  titleWrapper: {
    display: "flex",
    alignItem: "center",
    marginBottom: "20px"
  },


  '@media (max-width: 1020px)': {
    medicine: {
      padding: '10px'
    }
   },
}));

const useCheckboxStyles = makeStyles(() => ({
  formBox: {
    padding: "12px 20px",
    borderBottom: "1px solid #F1F1F1",

    '&:last-of-type': {
      border: "unset"
    }
  },
  checkboxTitle: {
    color: "#000000",
    fontSize: "18px",
    marginBottom: "10px"
  },
  root: {
    color: "#E9E9E9",
    padding: 0,
    marginRight: "20px"
  },
  checkboxLabel: {
    marginBottom: "5px",
    marginLeft: 0,
  },
  checked: {
    color: "#7ac943fa !important"
  },

}));

export {useStyles, useCheckboxStyles};
