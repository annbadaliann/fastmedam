import makeStyles from "@material-ui/core/styles/makeStyles";

const useStyles = makeStyles(() => ({
  wrapper: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    height: "100vh",
  },
  loader: {
    border: "16px solid #f3f3f3",
    borderRadius: "50%",
    borderTop: "16px solid rgba(122, 201, 67, 0.82)",
    width: "120px",
    height: "120px",
    animation: "$spin 2s linear infinite",
  },
  '@keyframes spin': {
    '0%': { transform: 'rotate(0deg)' },
    '100%': { transform: 'rotate(360deg)'}
  },
}));

export default useStyles;


