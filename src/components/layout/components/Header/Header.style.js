import { makeStyles } from "@material-ui/core";

const useStyles = makeStyles(() => ({
  header: {
    backgroundColor: 'rgba(122, 201, 67, 0.82)',
    padding: '100px 40px 30px 40px',
  },
  headerContainer: {
    display: "flex",
    alignItems: "flex-end",
    justifyContent: "space-between",
  },
  cart: {
    display: "flex",
    alignItems: "center",
    marginLeft: "20px",
    marginBottom: "5px",

    '& span': {
      color: "#fff",
      marginLeft: "15px"
    }
  },
  badge: {
    backgroundColor: "#f50071",
    color: "white",
    fontSize: "9px",
    borderRadius: "4px",
    minWidth: "14px",
    height: "15px",
    boxShadow: "0px 3px 6px #00000029",
    padding: 0,
    top: "2px",
    right: "-2px",
  },
  searchWrapper: {
    display: "flex",
    alignItems: "flex-end",
    width: "100%"
  },
  logo: {

    '& img': {
      width: "125px",
      height: "100px"
    }
    
  }
}));

export default useStyles;
