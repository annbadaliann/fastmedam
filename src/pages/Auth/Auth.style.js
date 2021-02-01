import makeStyles from "@material-ui/core/styles/makeStyles";

const useAuthStyles = makeStyles(() => ({
    signInFooter: {
        display: "flex",
        marginBottom: "40px",
        justifyContent: "space-between",
        alignItems: 'center',

        '& span': {
            color: "#49b00094",
            cursor: "pointer",

            '&:hover': {
                color: "#49B000"
            }
        }
    },
    checkboxLabel: {
        color: "#2d2d2d",

        '& a':  {
            color: '#7ac943'
        }
      },
      checked: {
        color: "#7ac943fa !important"
      },
      authTitles: {
          display: 'flex',

          '& h3:last-of-type': {
              marginLeft: "20px"
          }
      },
      authTitle: {
          marginBottom: "20px",
          color: '#59595994',
          fontSize: "22px"
      },
      activeTab :{
          color : '#49B000'
      }
}));
 
export default useAuthStyles;
