import { makeStyles } from "@material-ui/core";

const useStyles = makeStyles(() => ({
  aboutSection: {
    padding: '80px 0 120px 0'
  },
  aboutContent: {
    display: 'flex',
    width: '80%',
    margin: '0 auto',
  },
  description: {
    width: '70%',
    color: '#000000d4',
    fontSize: '16px',
    lineHeight: '21px'
  },
  logo: {
    width: '12rem',
    height: '35%',
    marginRight: '30px',

    '& img': {
      width: '100%',
      height: '100%',
      objectFit: "contain"
    }
  },
  '@media (max-width: 900px)': {
    aboutContent: {
      width: "100%"
    }
  },
  '@media (max-width: 500px)': {
    aboutContent: {
      flexDirection: 'column'
    },
    description: {
      marginTop: "20px",
      width: "100%",
      textAlign: "center"
    },
    logo: {
      width: "8rem"
    }
  },
}));

export default useStyles;
