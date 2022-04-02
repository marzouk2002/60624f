import React from 'react';
import PropTypes from 'prop-types';
import AuthMenu from './AuthMenu';
import SideBanner from './SideBanner';
import {
    Grid,
    makeStyles,
} from '@material-ui/core';

const useStyles = makeStyles(theme => ({
    root: {
        minHeight: '100vh',
    },
}));

const AuthLayout = ({ children, isLogin }) => {
    const classes = useStyles();

    return (
        <Grid container className={classes.root}>
            <Grid item sm={5} xs={12}>
                <SideBanner />
            </Grid>
            <Grid item sm={7} xs={12}>
                <AuthMenu isLogin={isLogin}/>
                { children }
            </Grid>
        </Grid>
    )
};

AuthLayout.propTypes = {
    children: PropTypes.node.isRequired,
    isLogin: PropTypes.bool.isRequired,
};

export default AuthLayout;