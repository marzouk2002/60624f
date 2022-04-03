import React from 'react';
import PropTypes from 'prop-types';
import {
    makeStyles,
    Box,
    Button,
    FormControl,
    TextField,
    Typography,
    InputAdornment
} from '@material-ui/core';
import { Link } from 'react-router-dom';

const useStyles = makeStyles(theme => ({
    title: {
        fontSize: '26px',
        lineHeight: '40px',
        fontWeight: '600',
        fontFamily: theme.typography.fontFamily,
    },

    formContainer: {
        marginTop: '33px',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        width: '100%',
        maxWidth: '400px',
        rowGap: '38px'
    },

    formControl: {
        width: '100%',

        '& .MuiInputLabel-asterisk': {
            display: 'none',
        }
    },

    
    btn: {
        backgroundColor: theme.palette.primary.main,
        color: theme.palette.primary.contrastText,
        borderRadius: '3px',
        padding: '18px 58px 14px 58px',
        fontWeight: 'bold',
        fontSize: '16px',
        lineHeight: '24px',
        marginTop: '22px',
        fontFamily: theme.typography.fontFamily,

        '&:hover': {
            backgroundColor: theme.palette.primary.light,
        }
    },

    forgotlink: {
        textDecoration: 'none',
        color: theme.palette.primary.main,
        fontSize: '12px',
        fontWeight: '600',
        fontFamily: theme.typography.fontFamily,
        lineHeight: '16px',
    }
}));

function LoginForm({ handleLogin }) {
    const classes = useStyles();

    return (
        <>
            <Typography 
                component='h1'
                className={classes.title}
            >
                Welcome back!
            </Typography>
            <form onSubmit={handleLogin}>
                <Box className={classes.formContainer}>
                    <FormControl required  className={classes.formControl}>
                        <TextField
                            aria-label="username"
                            label="Username"
                            name="username"
                            type="text"
                        />
                    </FormControl>
                    <FormControl required  className={classes.formControl}>
                        <TextField
                            label="Password"
                            aria-label="password"
                            type="password"
                            name="password"
                            InputProps={{
                                endAdornment: <InputAdornment position="end">
                                                    <Link to='#' className={classes.forgotlink}>Forgot?</Link>
                                                </InputAdornment>,
                            }}
                        />
                    </FormControl>
                    <Button type="submit" variant="contained" size="large" className={classes.btn}>
                        Login
                    </Button>
                </Box>
            </form>
        </>
    )
};

LoginForm.propTypes = {
    handleLogin: PropTypes.func.isRequired,
};

export default LoginForm;