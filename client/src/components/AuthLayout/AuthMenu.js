import React from 'react';
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
        columnGap: '30px',
        rowGap: '10px',
    },

    text: {
        fontFamily: theme.typography.fontFamily,
        color: theme.palette.secondary.main,
        fontSize: theme.typography.fontSize
    },

    link: {
        textDecoration: 'none'
    },

    button: ({ isLogin }) => ({
        fontFamily: theme.typography.fontFamily,
        color: theme.palette.primary.main,
        fontSize: theme.typography.fontSize,
        width: isLogin ? '170px' : '140px',
        height: '54px',
        backgroundColor: theme.palette.primary.contrastText,
        boxShadow: '0px 2px 12px rgba(74, 106, 149, 0.2)',
        padding: isLogin ? '16px 33px 19px 34px' : '16px 51px 19px 52px',
        borderRadius: '5px',
        lineHeight: '19px',
    }),
}))

const AuthMenu = ({ isLogin }) => {
    const classes = useStyles({ isLogin });

    return (
        <Box
            className={classes.container}
            mr={{
                xs: 'auto',
                md: '0'
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
                to={isLogin ? '/register' : '/login'}
                className={classes.link}
            >
                <Button
                    variant="text"
                    className={classes.button}
                >
                    {isLogin ? 'Create account' : 'Login'}
                </Button>
            </Link>
        </Box>
    )
};

export default AuthMenu;