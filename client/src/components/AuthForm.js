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
    FormHelperText,
    Typography,
    InputAdornment
} from '@material-ui/core';
import cx from 'classnames';

const useStyles = makeStyles(theme => ({
    wrapper: {
        width: '100%',
        maxWidth: '400px',
    },

    title: {
        fontSize: '26px',
        lineHeight: '40px',
        fontWeight: '600',
        fontFamily: theme.typography.fontFamily,
    },

    formContainer: {
        marginTop: '12px',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        width: '100%',
        rowGap: '40px'
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

function AuthForm({ isLogin, handleSubmit, formErrorMessage }) {
    const classes = useStyles();
    const buttonClasses = useButtonStyles();
    const formClasses = useFormStyles();

    return (
        <Box className={classes.wrapper}>   
            <Typography 
                component='h1'
                className={classes.title}
            >
               {isLogin ? 'Welcome back!' : 'Create an account.'} 
            </Typography>
            <form onSubmit={handleSubmit}>
                <Box className={classes.formContainer}>
                    <FormControl className={formClasses.formControl}>
                        <TextField
                            aria-label="username"
                            label="Username"
                            name="username"
                            type="text"
                            required
                        />
                    </FormControl>
                    { 
                        !isLogin && 
                            <FormControl className={formClasses.formControl}>
                                <TextField
                                    label="E-mail address"
                                    aria-label="e-mail address"
                                    type="email"
                                    name="email"
                                    required
                                />
                            </FormControl>
                    }
                    <FormControl className={formClasses.formControl} error={!!formErrorMessage?.confirmPassword}>
                        <TextField
                            aria-label="password"
                            label="Password"
                            type="password"
                            inputProps={{ minLength: 6 }}
                            name="password"
                            required
                            InputProps={isLogin ? {
                                endAdornment: <InputAdornment position="end">
                                                    <Link to='#' className={classes.forgotlink}>Forgot?</Link>
                                                </InputAdornment>,
                            } : null }
                        />
                        <FormHelperText>
                            {formErrorMessage?.confirmPassword}
                        </FormHelperText>
                    </FormControl>
                    {
                    
                        !isLogin && 
                            <FormControl 
                                className={formClasses.formControl}
                                error={!!formErrorMessage?.confirmPassword}
                            >
                                <TextField
                                    label="Confirm Password"
                                    aria-label="confirm password"
                                    type="password"
                                    inputProps={{ minLength: 6 }}
                                    name="confirmPassword"
                                    required
                                />
                                <FormHelperText>
                                    {formErrorMessage?.confirmPassword}
                                </FormHelperText>
                            </FormControl>
                    }
                    <Button 
                        type="submit" 
                        variant="contained"
                        size="large"
                        className={isLogin ? cx(buttonClasses.primary, buttonClasses.primaryLogin) : buttonClasses.primary}
                    >
                        {isLogin ? 'Login' : 'Create'}
                    </Button>
                </Box>
            </form>
        </Box>
    )
};

AuthForm.propTypes = {
    isLogin: PropTypes.bool.isRequired,
    handleSubmit: PropTypes.func.isRequired,
    formErrorMessage: PropTypes.object,
};

export default AuthForm;