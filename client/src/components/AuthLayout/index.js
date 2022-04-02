import React from 'react';
import PropTypes from 'prop-types';
import AuthMenu from './AuthMenu';
import {
    Grid,
    Box,
} from '@material-ui/core';

const AuthLayout = ({ children, isLogin }) => {
  return (
    <Grid container justifyContent="center">
      <Box>
        <Grid container item>
          <AuthMenu isLogin={isLogin}/>
        </Grid>
        { children }
      </Box>
    </Grid>
  )
};

AuthLayout.propTypes = {
    children: PropTypes.node.isRequired,
    isLogin: PropTypes.bool.isRequired,
};

export default AuthLayout;