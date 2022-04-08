import React, { useState, useEffect } from 'react';
import { useHistory } from 'react-router-dom';
import AuthLayout from './components/AuthLayout';
import AuthForm from './components/AuthForm';

const Signup = ({ user, register }) => {
  const history = useHistory();

  const [formErrorMessage, setFormErrorMessage] = useState({});

  const handleRegister = async (event) => {
    event.preventDefault();
    const form = event.currentTarget;
    const formElements = form.elements;
    const username = formElements.username.value;
    const email = formElements.email.value;
    const password = formElements.password.value;
    const confirmPassword = formElements.confirmPassword.value;

    if (password !== confirmPassword) {
      setFormErrorMessage({ confirmPassword: 'Passwords must match' });
      return;
    }
    await register({ username, email, password });
  };

  useEffect(() => {
    if (user && user.id) history.push('/home');
  }, [user, history]);

  return (
    <AuthLayout isLogin={false}>
        <AuthForm
          isLogin={false}
          handleSubmit={handleRegister}
          formErrorMessage={formErrorMessage}
        />
    </AuthLayout>
  );
};

export default Signup;
