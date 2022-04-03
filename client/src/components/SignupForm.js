import React from 'react';
import PropTypes from 'prop-types';
import { useButtonStyles, useFormStyles } from '../themes/hooks';
import {
    makeStyles,
    Box,
    Button,
    FormControl,
    TextField,
    FormHelperText,
    Typography,
} from '@material-ui/core';

const useStyles = makeStyles(theme => ({
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
        maxWidth: '400px',
        rowGap: '40px'
    },
}));

function SignupForm({ handleRegister, formErrorMessage }) {
    const classes = useStyles();
    const buttonClasses = useButtonStyles();
    const formClasses = useFormStyles();

    return (
        <>   
            <Typography 
                component='h1'
                className={classes.title}
            >
                Create an account.
            </Typography>
            <form onSubmit={handleRegister}>
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
                    <FormControl className={formClasses.formControl}>
                    <TextField
                        label="E-mail address"
                        aria-label="e-mail address"
                        type="email"
                        name="email"
                        required
                    />
                    </FormControl>
                    <FormControl className={formClasses.formControl} error={!!formErrorMessage.confirmPassword}>
                        <TextField
                            aria-label="password"
                            label="Password"
                            type="password"
                            inputProps={{ minLength: 6 }}
                            name="password"
                            required
                        />
                        <FormHelperText>
                            {formErrorMessage.confirmPassword}
                        </FormHelperText>
                    </FormControl>
                    <FormControl className={formClasses.formControl} error={!!formErrorMessage.confirmPassword}>
                        <TextField
                            label="Confirm Password"
                            aria-label="confirm password"
                            type="password"
                            inputProps={{ minLength: 6 }}
                            name="confirmPassword"
                            required
                        />
                        <FormHelperText>
                            {formErrorMessage.confirmPassword}
                        </FormHelperText>
                    </FormControl>
                    <Button type="submit" variant="contained" size="large" className={buttonClasses.primary}>
                        Create
                    </Button>
                </Box>
            </form>
        </>
    )
};

SignupForm.propTypes = {
    handleRegister: PropTypes.func.isRequired,
    formErrorMessage: PropTypes.object.isRequired,
};

export default SignupForm;