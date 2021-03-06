import React, { useEffect } from 'react';
import { useHistory } from 'react-router-dom';
import AuthLayout from './components/AuthLayout';
import AuthForm from './components/AuthForm';

const Login = ({ user, login }) => {
  const history = useHistory();

  const handleLogin = async (event) => {
    event.preventDefault();
    const form = event.currentTarget;
    const formElements = form.elements;
    const username = formElements.username.value;
    const password = formElements.password.value;

    await login({ username, password });
  };

  useEffect(() => {
    if (user && user.id) history.push('/home');
  }, [user, history]);

  return (
    <AuthLayout isLogin={true}>
      <AuthForm
        isLogin={true}
        handleSubmit={handleLogin}
      />
    </AuthLayout>
  );
};

export default Login;
