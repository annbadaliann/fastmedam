import { makeStyles } from "@material-ui/core";

const useStyles = makeStyles(() => ({
  header: {
    padding: "40px 40px 20px",

    "& h2": {
      fontWeight: "normal",
    },
  },
  tableHead: {
    borderBottom: "2px solid #d6d6d6",

    "& th": {
      fontSize: "16px",
    },
  },
  notesWrapper: {
    padding: "0",
    paddingBottom: "40px"
  },
  info: {
    display: "flex",
    alignItems: "center",
  },
  medicineImg: {
    marginRight: "30px",
    width: "170px",
    height: "120px",

    "& img": {
      width: "100%",
      height: "100%",
    },
  },
  deleteIcon: {
    textAlign: "center",
    cursor: "pointer",
  },
  columnTitles: {
    "& th:last-child": {
      width: "8%",
    },
  },
  productName: {
    display: "flex",
  },
  productInfo: {
    paddingTop: "25px",
    "& h3": {
      textTransform: "capitalize",
      marginBottom: "3px",
      fontSize: "19px",
      fontWeight: "normal",
    },

    "& span": {
      color: "#000000",
      opacity: "67%",
      fontSize: "16px",
    },
  },
  productImage: {
    width: "125px",
    height: "85px",
    marginRight: "20px",

    "& img": {
      width: "100%",
      height: "100%",
      objectFit: "cover",
    },
  },
  pagination: {
    padding: "20px 33px"
  },
  tableContainer: {
    "& th:first-child": {
      paddingLeft: "43px",
    },
    "& td:first-child": {
      paddingLeft: "40px",
    },
    "& th:last-of-child": {
      paddingRight: "43px",
    },
  },
}));

export default useStyles;
