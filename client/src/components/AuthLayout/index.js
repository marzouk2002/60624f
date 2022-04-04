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

    sidebannerWrapper: {
        maxWidth: '100%',

        [theme.breakpoints.up('sm')]: {
            maxWidth: '425px'
        }
    },

    container: {
        boxSizing: 'border-box',
        padding: '30px 42px',
        width: '100%',
    },

    content: {
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',

        [theme.breakpoints.up('xs')]: {
            marginTop: '20px',
        },
        [theme.breakpoints.up('sm')]: {
            marginTop: '20px',
        },
        [theme.breakpoints.up('md')]: {
            marginTop: '55px',
        },
    }
}));

const AuthLayout = ({ children, isLogin }) => {
    const classes = useStyles();

    return (
        <Grid container className={classes.root}>
            <Grid item sm={5} xs={12} className={classes.sidebannerWrapper}>
                <SideBanner />
            </Grid>
            <Grid item sm={7} xs={12}>
                <Box className={classes.container}>
                    <AuthMenu isLogin={isLogin}/>
                    <Box className={classes.content}>  
                    { children }
                    </Box>
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