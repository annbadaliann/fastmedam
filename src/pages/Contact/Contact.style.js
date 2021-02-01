import { makeStyles } from "@material-ui/core";

const useStyles = makeStyles(() => ({
  wrapper : {
    padding: "95px 0 60px 0"
  },
  container: {
    // display: 'grid',
    // gridTemplateColumns: 'repeat(4, 1fr)',
    // gridGap: '40px 30px',
    // maxWidth: '1050px',
    // margin: '0 auto'
  },
  contactContent: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    width: '60%',
    margin: "0 auto",
    background: '#f1f1f1',
    borderRadius: '20px',
  },
  contactInfo: {
    background:'#ffffffa6',
    width: '50%',
    height: '100%',
    padding: '69px 10px 40px 0',
    borderBottomRightRadius: 'inherit',
    borderTopRightRadius: 'inherit',
    textAlign: 'center',
    color: '#000000c7',

    '& h3': {
        color: '#000000c7',
        marginTop: '20px'
    },
    '& h4': {
        fontSize: '20px'
    },
  },
  contactIcon: {
    margin: '20px 0 60px 0',
    width: '80px',
    height:'80px'
  },
  socialMediaLinks: {
    width: '100%',
    margin: '15px auto 0 auto',

    '& a': {
        margin: '0 20px',
        height: '75px',
        width: '75px',
    },
    '& img': {
        height: '75px',
        width: '75px'
    }
  },
  contactForm: {
    width: '50%',
    padding: '20px 30px'
  },
  form: {
    width: '100%',

    '& h2': {
        fontSize: '30px',
        marginBottom: "20px"
    }
  },
  button: {
    marginTop: '30px'
  },
  message: {
    width: '100%',
    marginTop: '5px',
  }
}));

export default useStyles;