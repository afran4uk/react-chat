import React from 'react';
import { LoginForm } from '~/modules/LoginForm';
import { RegisterFormik } from '~/modules/RegisterForm';
import { Route } from 'react-router';

import './Auth.scss';

export const Auth = () => (
  <section className="auth">
    <div className="auth__content">
      <Route exact path={['/', '/login']} component={LoginForm} />
      <Route exact path="/register" component={RegisterFormik} />
    </div>
  </section>
);
