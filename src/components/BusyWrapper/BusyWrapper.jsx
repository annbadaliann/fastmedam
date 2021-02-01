import React from 'react';

import { Box, makeStyles } from '@material-ui/core';

import Loading from '../Loading/Loading';

const useStyles = makeStyles(() => ({
    root: {
        width: '100%',
        position: 'relative',
    },
    busyWithContent: {
        opacity: '.4',
    },
    spinner: {
        position: 'absolute',
        top: '50%',
        left: '50%',
        transform: 'translate(-50%, -50%)',
    },
}));

function BusyWrapper({
    children,
    isBusy,
}) {
    const classes = useStyles();

    return (
        <Box className={classes.root}>
            {isBusy ? <Loading/> : children}
        </Box>
    )
};

export default BusyWrapper;
