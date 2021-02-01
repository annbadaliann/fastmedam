import { makeStyles } from "@material-ui/core";

const useStyles = makeStyles(() => ({
    medicineDetailsBox: {
        padding: "0"
    },
    content: {
        padding: "40px"
    },
    left: {
       width: "40%",
       marginRight: "50px"
    },
    photo: {
        width: "100%",
        height: "270px",

        '& img': {
            width: "100%",
            height: "100%",
            objectFit: "cover"
        }
    },
    infoWrapper: {
        display: "flex",
        justifyContent: "space-between",
    },
    info: {
        paddingTop: "20px",
        width: "26%",
        display: "flex",
        flexDirection: "column",
        marginRight: "60px",

        '& h3': {
            fontWeight: "normal",
            fontSize: "31px",
            borderBottom: "2px solid #7cca46",
            lineHeight: "38px",
            paddingBottom: "22px"
        }
    },
    infoList: {
        marginTop: "30px",
        '& li': {
            marginBottom: "20px",
            color: "#000000",
            opacity: "62%"
        }
    },
    right: {
        display: "flex",
        flexDirection: "column",
        justifyContent:"flex-end",
        alignItems: "center",

        '& button': {
            boxShadow: "0px 3px 6px #00000029"
        }
    },
    quantity: {
        display: "flex",
        alignItems: "center",

        '& img': {
            width: "30px",
            height: "30px",
            cursor: "pointer"
        },

        '& input': {
            margin: "0 15px",
            width: "80px",
            paddingLeft: "10px",
            paddingRight: "10px",
            height: "50px"
        }
    },
    price: {
        fontWeight: "normal",
        margin: "20px 0"
    },
    path: {
        marginBottom: "30px",
        '& a': {
            color: "#464646"
        },
    },
    breadcrumbs: {
        '& .MuiBreadcrumbs-separator' : {
            color: "#49B000"
        },
        '& p': {
            color: "#000000"
        },

        '& a:hover' :{
            color: '#49B000'
        },
    },
    back: {
        display: "flex",
        alignItems: "center",
        '& a' :{
            display: "flex",
            alignItems: "center",
            marginBottom: "2px",
        },
        '& p:hover':{
            color: '#49B000'
        },
        '& svg':{
            fontSize: "15px",
            color: "#49B000"
        },
        '& span': {
            backgroundColor: "#000000",
            height: "18px",
            width: "1px",
            margin: "0 10px"
        }
    },
   
}));

export default useStyles;