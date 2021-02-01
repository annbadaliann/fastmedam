import { makeStyles } from "@material-ui/core";

const useStyles = makeStyles(() => ({
  sidebar: {
    width: "370px",
    height: "100vh",
    backgroundColor: "white",
    padding: "130px 0 0 60px",
    animation: "leftBar-animate 0.6s",
    animationFillMode: "forwards",
  },
  closeIcon: {
    position: "absolute",
    fontSize: "17px",
    top: "20px",
    right: "20px",
  },
  sidebarItem: {
    marginBottom: "32px",
  },
  page: {
    color: "black",
    fontSize: "20px",
    display: "flex",
    alignItems: "center",
    transition: "all 0.4s",
  },
  activePage: {
    color: "#7ac943d4",
  },
  icon: {
    width: "25px",
    height: "25px",
    objectFit: "contain",
    marginRight: "20px",
  },
  name: {
    fontSize: "18px"
  },
  '@media (max-width: 400px)': {
    sidebar: {
      width: "300px",
      paddingLeft: "30px",
      paddingTop: "100px"
    }
  }
}));

export default useStyles;
