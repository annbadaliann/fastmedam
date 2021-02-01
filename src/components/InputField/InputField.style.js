import makeStyles from "@material-ui/core/styles/makeStyles";

const useStyles = makeStyles(() => ({
  labelField: {
    marginBottom: "20px",
  },
  label: {
    color: "#000000",
    marginBottom: "9px",
    display: "block",
  },
  invalidLabel: {
    color: "red",
  },
  invalidInput: {
    border: "1px solid red",
  },
  errorMessage: {
    color: '#ff6060',
    fontSize: "13px",
    marginTop: '5px'
  },
  input: {
    padding: '16px 20px'
  },
  root: {
    border: "1px solid #CECECE",

  }
}));

export default useStyles;
