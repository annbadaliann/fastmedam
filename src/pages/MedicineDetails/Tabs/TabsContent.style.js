import { makeStyles } from "@material-ui/core";

const useStyles = makeStyles(() => ({
  tabs: {
    marginTop: "30px",
    width: "100%",

    "& > div:first-of-type": {
      borderBottom: "1px solid #d5dad5",
      paddingLeft: "13px",
    },
  },
  tab: {
    textTransform: "capitalize",
    color: "#131313",
    fontWeight: "normal",
    fontSize: "18px",
  },
  indicator: {
    backgroundColor: "#49B000",
  },
  instructionTab: {
    padding: "33px 45px",
  },
  pharmaciesList: {
    width: "70%",
  },
  pharmacyTab: {
    display: "flex",
  },
  map: {
    width: "30%",
    height: "90vh"
  },
  '@media (max-width: 900px)': {
    tabs: {
      "& > div:first-of-type": {
        paddingLeft: 0,
      },
    },
    pharmaciesList: {
      width: '65%'
    },
    map: {
      width: '35%'
    }
   },
  '@media (max-width: 650px)': {
    instructionTab: {
      padding: '30px 20px'
    },
    pharmacyTab: {
      flexDirection: 'column'
    },
    pharmaciesList: {
      width: '100%'
    },
    map: {
      width: '100%'
    }
   },
}));

export default useStyles;
