import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import {
    Typography,
    Button,
} from '@material-ui/core';

const AuthMenu = ({ isLogin }) => {
  return (
    <>
        <Typography>
            {isLogin ? 'Need to register?' : 'Need to log in?'}
        </Typography>
        <Link 
            href={isLogin ? '/register' : '/login'}
            to={isLogin ? '/register' : '/login'}
        >
            <Button>{isLogin ? 'Register' : 'Login'}</Button>
        </Link>
    </>
  )
};

AuthMenu.propTypes = {
    isLogin: PropTypes.bool.isRequired,
};

export default AuthMenu;