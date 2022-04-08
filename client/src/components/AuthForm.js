import React from 'react';
import { Link } from 'react-router-dom';
import {
    makeStyles,
    Box,
    Button,
    TextField,
    FormHelperText,
    Typography,
    InputAdornment
} from '@material-ui/core';
import StyledFormControl from './AuthLayout/Form/StyledFormControl';

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
    },

    button: ({ isLogin }) => ({
        backgroundColor: theme.palette.primary.main,
        color: theme.palette.primary.contrastText,
        borderRadius: '3px',
        width: '160px',
        height: '56px',
        padding: isLogin ? '18px 58px 14px 58px' : '18px 53px 14px 54px',
        fontWeight: 'bold',
        fontSize: '16px',
        lineHeight: '24px',
        fontFamily: theme.typography.fontFamily,
        marginTop: isLogin ? '0px' : '22px',

        '&:hover': {
            backgroundColor: theme.palette.primary.light,
        }
    }),
}));

function AuthForm({ isLogin, handleSubmit, formErrorMessage }) {
    const classes = useStyles({ isLogin });

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
                    <StyledFormControl>
                        <TextField
                            aria-label="username"
                            label="Username"
                            name="username"
                            type="text"
                            required
                        />
                    </StyledFormControl>
                    { 
                        !isLogin && 
                            <StyledFormControl>
                                <TextField
                                    label="E-mail address"
                                    aria-label="e-mail address"
                                    type="email"
                                    name="email"
                                    required
                                />
                            </StyledFormControl>
                    }
                    <StyledFormControl error={!!formErrorMessage?.confirmPassword}>
                        <TextField
                            aria-label="password"
                            label="Password"
                            type="password"
                            inputProps={{ minLength: 6 }}
                            name="password"
                            required
                            InputProps={isLogin && {
                                endAdornment: <InputAdornment position="end">
                                                    <Link to='#' className={classes.forgotlink}>Forgot?</Link>
                                                </InputAdornment>,
                            }}
                        />
                        <FormHelperText>
                            {formErrorMessage?.confirmPassword}
                        </FormHelperText>
                    </StyledFormControl>
                    {
                    
                        !isLogin && 
                            <StyledFormControl error={!!formErrorMessage?.confirmPassword}>
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
                            </StyledFormControl>
                    }
                    <Button 
                        type="submit" 
                        variant="contained"
                        size="large"
                        className={classes.button}
                    >
                        {isLogin ? 'Login' : 'Create'}
                    </Button>
                </Box>
            </form>
        </Box>
    )
};

export default AuthForm;