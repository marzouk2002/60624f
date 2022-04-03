import React from 'react';
import PropTypes from 'prop-types';
import AuthMenu from './AuthMenu';
import SideBanner from './SideBanner';
import {
    Box,
    Grid,
    makeStyles,
} from '@material-ui/core';

const useStyles = makeStyles(theme => ({
    root: {
        minHeight: '100vh',
    },
    content: {
        boxSizing: 'border-box',
        padding: '30px 42px',
        width: '100%',
    }
}));

const AuthLayout = ({ children, isLogin }) => {
    const classes = useStyles();

    return (
        <Grid container className={classes.root}>
            <Grid item sm={5} xs={12}>
                <SideBanner />
            </Grid>
            <Grid item sm={7} xs={12}>
                <Box className={classes.content}>
                    <AuthMenu isLogin={isLogin}/>
                    { children }
                </Box>
            </Grid>
        </Grid>
    )
};

AuthLayout.propTypes = {
    children: PropTypes.node.isRequired,
    isLogin: PropTypes.bool.isRequired,
};

export default AuthLayout;