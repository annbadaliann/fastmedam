import makeStyles from "@material-ui/core/styles/makeStyles";

const useStyles = makeStyles(() => ({
  wrapper: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
    // height: "65vh"
  },
  title: {
    color: "#545454",
    fontWeight: "normal",
  },
  icon: {
    marginTop: "20px",
  },
  link: {
    color: "#80c650",
    display: "block",
    marginTop: "20px",
    fontSize: "18px",
    textDecoration: "underline",
  },
}));

export default useStyles;