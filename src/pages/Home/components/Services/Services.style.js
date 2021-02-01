import { makeStyles } from "@material-ui/core";

const useServicesStyles = makeStyles(() => ({
  section : {
    padding: '80px 0',
    backgroundColor: '#f7f7f773',
  },
  serviceItems: {
    display: 'grid',
    gridTemplateColumns: 'repeat(4, 1fr)',
    gridGap: '20px 30px'
  },
  serviceItem: {
    textDecoration: 'none',
    cursor: 'pointer',
    transition: 'all 0.4s',
    height: "270px",
    padding: ' 25px 15px',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',

    '&:hover': {
      boxShadow: '0 0 20px 10px #cecece38'
    }
  },
  icon: {
    width: '100px',
    height: '100px',
    margin: '0 auto',

    '& img':{
      width: '100%',
      height: '100%',
      objectFit: 'contain'
    }
  },
  title: {
    fontSize: '22px',
    color: '#7AC943',
    margin: '25px 0 5px 0'
  },
  description: {
    color: "#707070",
    lineHeight: '22px',
    textAlign: 'center'
  },

  '@media (max-width: 1250px)': {
    serviceItems: {
      gridTemplateColumns: 'repeat(3, 1fr)',
    },
  },
  '@media (max-width: 800px)': {
    serviceItems: {
      gridTemplateColumns: 'repeat(2, 1fr)',
    },
    section: {
      padding: "40px 0"
    }
  },
  '@media (max-width: 500px)': {
    serviceItems: {
      width: '90%',
      margin: '0 auto',
      gridTemplateColumns: 'repeat(1, 1fr)',
      gridGap: "10px"
    },
    serviceItem: {
      padding: ' 10px',
      height: "auto"
    }
  },
}));


export default useServicesStyles;
