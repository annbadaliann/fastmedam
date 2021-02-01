import { makeStyles } from "@material-ui/core";

const useStyles = makeStyles(() => ({
  header: {
    display: "flex",
    alignItems: "center",
    justifyContent: "space-between",
    marginBottom: "20px"
  },
  itemLength: {
    color: "#9a9a9a",
    fontSize: "30px",
    fontWeight: "normal",
  },
  favoriteMedicines: {
    marginTop: "40px",
    display: "grid",
    gridTemplateColumns: "repeat(4, 1fr)",
    gridGap: "20px"
  },
  favoriteMedicine: {
    cursor: "pointer",
    transition: "all 0.3s",
    padding: "10px 10px 30px 10px",
    boxShadow: "0px 1px 6px #70707029",
  },
  content: {
    textAlign: "center",
  },
  medicineImage: {
    margin: "0 auto",
    width: "200px",
    height: "150px",
    marginBottom: "20px",

    "& img": {
      maxWidth: "100%",
      width: "100%",
      height: "100%",
      objectFit: "contain",
    },
  },
  isFavIcon: {
    textAlign: "end",

    "& img": {
      width: "30px",
      height: "30px",
    },
  },
  '@media (max-width: 1100px)': {
    favoriteMedicines: {
      gridTemplateColumns: "repeat(3, 1fr)",
    }
  },
  '@media (max-width: 850px)': {
    favoriteMedicines: {
      gridTemplateColumns: "repeat(2, 1fr)",
    }
  },
  '@media (max-width: 550px)': {
    favoriteMedicines: {
      width: "250px",
      marginLeft: "auto",
      marginRight: "auto",
      gridTemplateColumns: "repeat(1, 1fr)",
    },
    itemLength: {
      fontSize: "23px"
    }
  }
}));

export default useStyles;
