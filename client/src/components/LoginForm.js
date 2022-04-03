import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import { useButtonStyles, useFormStyles } from '../themes/hooks';
import {
    makeStyles,
    Box,
    Button,
    FormControl,
    TextField,
    Typography,
    InputAdornment
} from '@material-ui/core';

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
    const buttonClasses = useButtonStyles();
    const formClasses = useFormStyles();

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
                    <FormControl required  className={formClasses.formControl}>
                        <TextField
                            aria-label="username"
                            label="Username"
                            name="username"
                            type="text"
                        />
                    </FormControl>
                    <FormControl required  className={formClasses.formControl}>
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
                    <Box mt={'22px'}>
                        <Button type="submit" variant="contained" size="large" className={buttonClasses.primary}>
                            Login
                        </Button>
                    </Box>
                </Box>
            </form>
        </>
    )
};

LoginForm.propTypes = {
    handleLogin: PropTypes.func.isRequired,
};

export default LoginForm;