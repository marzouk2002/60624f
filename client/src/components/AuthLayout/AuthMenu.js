import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import { useButtonStyles } from '../../themes/hooks';
import {
    makeStyles,
    Typography,
    Button,
    Box,
} from '@material-ui/core';
import cx from 'classnames';

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
}))

const AuthMenu = ({ isLogin }) => {
    const classes = useStyles();
    const buttonClasses = useButtonStyles();

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
                href={isLogin ? '/register' : '/login'}
                to={isLogin ? '/register' : '/login'}
                className={classes.link}
            >
                <Button
                    variant="text"
                    className={ isLogin ? 
                        cx(buttonClasses.secondary, buttonClasses.secondaryLogin) :
                        buttonClasses.secondary
                    }
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