import { makeStyles } from "@material-ui/core";

const useStyles = makeStyles(() => ({
  main: {
    padding: '130px 60px 300px 60px',
    backgroundColor: 'rgba(122, 201, 67, .82)',
    boxShadow: '0px 5px 7px #00000028',
  },
  header: {
    display: 'flex',
    justifyContent: 'space-between',
  },
  content: {
    width:'80%',
    margin: '110px auto 0',
    textAlign: 'center',
    color: '#fff'
  },
  title: {
    textTransform: 'uppercase',
    letterSpacing: '8.04px',
    fontWeight: 'normal',
    fontSize: '50px',
    lineHeight: '69px',
    marginBottom: '30px'
  },
  description: {
    marginBottom: '10px',
    fontSize: '21px',
    lineHeight: '33px'
  },
  logo: {
    width: '160px',
    height: '135px',
    marginRight: '20px',

    '& img': {
      width: '100%',
      height: '100%'
    }
  },
  searchMedicineField:{
    display: "flex",
    justifyContent: "center"
  },
  '@media (max-width: 1100px)': {
    main: {
      padding: '100px 30px 200px 30px'
    },
    content: {
      width: "100%"
    }
  },

  '@media (max-width: 900px)': {
    title: {
      fontSize: "48px",
      letterSpacing: "6px",
      lineHeight: "55px"
    },
    logo: {
      width: '140px',
      height: '115px',
    }
  },
  '@media (max-width: 500px)': {
    main: {
      paddingLeft: "20px",
      paddingRight: "20px",
      paddingTop: "80px"
    },
    title: {
      fontSize: "35px",
      lineHeight: "45px",
      marginBottom: '5px'
    },
    description: {
      fontSize: "18px"
    },
    logo: {
      width: '120px',
      height: '95px',
    }
  },

  '@media (max-width: 370px)': {
    title: {
      fontSize: "29px"
    }
  },


}));

export default useStyles;
