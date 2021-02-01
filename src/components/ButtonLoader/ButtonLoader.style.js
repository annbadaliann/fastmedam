import makeStyles from '@material-ui/core/styles/makeStyles';

const useStyles = makeStyles(() => ({
    buttonWrapper: {
        position: 'relative',
        display: "block",
        width: "100%",
        overflow: 'hidden',
        color: '#fff',
        backgroundColor: '#7ac943d1',
        boxShadow: 'none',
        borderRadius: "38px",
        height: 50,
        textTransform: 'unset',
        marginBottom: '0',
        fontSize: '17px',

        '&:hover': {
            boxShadow: 'none',
            backgroundColor: '#58b317fa',
        },
        '&:focus': {
            backgroundColor: '#58b317fa',
        },
    },
    loader: {
        position: 'absolute',
        right: 0,
        bottom: 0,
        left: 0,
    },
    colorPrimary: {
        color: 'red'
    },
    barColorPrimary: {
        backgroundColor: '#72a250'
    },
    barColorSecondary: {
        backgroundColor: '#72a250'
    },
}));

export default useStyles;
