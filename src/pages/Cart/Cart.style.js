import { makeStyles } from "@material-ui/core";

const useStyles = makeStyles(() => ({
  headerWrapper: {
    padding: "40px 40px 20px",
  },
  header: {
    display: "flex",
    alignItems: "center",
    justifyContent: "space-between",
    marginBottom: "10px",

    "& h2": {
      fontWeight: "normal",
    },

    "& button": {
      width: "200px",
    },
  },
  cartWrapper: {
    padding: 0,
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
  tableHead: {
    borderBottom: "2px solid #d6d6d6",

    "& th": {
      fontSize: "16px",
    },
  },
  quantity: {
    display: "flex",
    alignItems: "center",

    "& input": {
      width: "60px",
      height: "40px",
      margin: "0 15px",
      padding: "0",
      textAlign: "center",
    },

    "& img": {
      width: "25px",
      cursor: "pointer",
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
  remove: {
    color: "#D50000",
    opacity: "53%",
    fontSize: "16px",
    marginTop: "5px",
    marginLeft: "30px",
    lineHeight: "31px",
    cursor: "pointer",
  },
  num: {
    fontWeight: "bold",
    fontSize: "18px",
  },
  total: {

    display: "flex",
    justifySelf: "flex-end",

    "& h3": {
      color: "#000000",

      "& span": {
        color: "#49B000",
        marginRight: "25px"
      },
    },
  },
  cartFooter: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    borderTop: "1px solid #d6d6d6",
    padding: "30px 45px",
  }
}));

export default useStyles;
