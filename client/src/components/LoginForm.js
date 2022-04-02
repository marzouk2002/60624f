import React from 'react';
import PropTypes from 'prop-types';
import {
    Grid,
    Button,
    FormControl,
    TextField,
} from '@material-ui/core';

function LoginForm({ handleLogin }) {
  return (
    <form onSubmit={handleLogin}>
        <Grid>
        <Grid>
            <FormControl margin="normal" required>
            <TextField
                aria-label="username"
                label="Username"
                name="username"
                type="text"
            />
            </FormControl>
        </Grid>
        <FormControl margin="normal" required>
            <TextField
            label="password"
            aria-label="password"
            type="password"
            name="password"
            />
        </FormControl>
        <Grid>
            <Button type="submit" variant="contained" size="large">
            Login
            </Button>
        </Grid>
        </Grid>
    </form>
  )
};

LoginForm.propTypes = {
    handleLogin: PropTypes.func.isRequired,
};

export default LoginForm;