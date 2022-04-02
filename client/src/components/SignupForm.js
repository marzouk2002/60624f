import React from 'react';
import PropTypes from 'prop-types';
import {
    Grid,
    Button,
    FormControl,
    TextField,
    FormHelperText,
  } from '@material-ui/core';

function SignupForm({ handleRegister, formErrorMessage }) {
  return (
    <form onSubmit={handleRegister}>
        <Grid>
        <Grid>
            <FormControl>
            <TextField
                aria-label="username"
                label="Username"
                name="username"
                type="text"
                required
            />
            </FormControl>
        </Grid>
        <Grid>
            <FormControl>
            <TextField
                label="E-mail address"
                aria-label="e-mail address"
                type="email"
                name="email"
                required
            />
            </FormControl>
        </Grid>
        <Grid>
            <FormControl error={!!formErrorMessage.confirmPassword}>
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
        </Grid>
        <Grid>
            <FormControl error={!!formErrorMessage.confirmPassword}>
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
        </Grid>
        <Button type="submit" variant="contained" size="large">
            Create
        </Button>
        </Grid>
    </form>
  )
};

SignupForm.propTypes = {
    handleRegister: PropTypes.func.isRequired,
    formErrorMessage: PropTypes.object.isRequired,
};

export default SignupForm;