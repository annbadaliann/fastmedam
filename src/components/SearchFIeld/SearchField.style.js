import makeStyles from "@material-ui/core/styles/makeStyles";

// import "src/assets/styles/variables.scss";

const useStyles = makeStyles(() => ({
  wrapper: {
    position: "relative",
    maxWidth: "500px",
    width: "100%"
  },
  input: {
    borderRadius: "200px",
    fontSize: "17px",
    color: "#6a6b6b",
    letterSpacing: "0.3px",
    transition: "all 0.4s",
    boxShadow: "0px 3px 6px #00000029",
  },
  searchIconWrapper: {
    position: "absolute",
    width: 46,
    height: 46,
    borderRadius: "50%",
    backgroundColor: "#83cc51",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    right: "3px",
    bottom: "4px",
    cursor: "pointer",
    transition: "all 0.4s",

    "&:hover": {
      backgroundColor: "#73b347",
    },
  },
  searchIcon: {
    width: "30px",
    height: "30px",
  },
}));

export default useStyles;
