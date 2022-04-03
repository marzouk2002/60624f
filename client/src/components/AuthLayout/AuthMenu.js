import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import {
    makeStyles,
    Typography,
    Button,
    Box,
} from '@material-ui/core';

const useStyles = makeStyles(theme => ({
    container: {
        width: 'max-content',
        marginLeft: 'auto',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        columnGap: '30px'
    },

    text: {
        fontFamily: theme.typography.fontFamily,
        color: theme.palette.secondary.main,
        fontSize: theme.typography.fontSize
    },

    link: {
        textDecoration: 'none'
    },

    btn: {
        fontFamily: theme.typography.fontFamily,
        color: theme.palette.primary.main,
        fontSize: theme.typography.fontSize,
        backgroundColor: theme.palette.primary.contrastText,
        boxShadow: '0px 2px 12px rgba(74, 106, 149, 0.2)',
        padding: '16px 42px'
    }
}))

const AuthMenu = ({ isLogin }) => {
    const classes = useStyles();

    return (
        <Box
            className={classes.container}
            mr={{
                xs: 'auto',
                md: '0'
            }}
            mb={{
                xs: '20px',
                md: '86px'
            }}
            flexDirection={{
                xs: 'column',
                sm: 'column',
                md: 'row'
            }}
        >
            <Typography className={classes.text}>
                {isLogin ? 'Don’t have an account?' : 'Already have an account?'}
            </Typography>
            <Link 
                href={isLogin ? '/register' : '/login'}
                to={isLogin ? '/register' : '/login'}
                className={classes.link}
            >
                <Button
                    variant="text"
                    className={classes.btn}
                >
                    {isLogin ? 'Create account' : 'Login'}
                </Button>
            </Link>
        </Box>
    )
};

AuthMenu.propTypes = {
    isLogin: PropTypes.bool.isRequired,
};

export default AuthMenu;