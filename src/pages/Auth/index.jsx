import React from 'react';
import { LoginForm } from '~/modules/LoginForm';
import { RegisterForm } from '~/modules/RegisterForm';
import { Route } from 'react-router';

import './Auth.scss';

export const Auth = () => (
  <section className="auth">
    <div className="auth__content">
      <Route path={['/', '/login']} component={LoginForm} />
      <Route path="/register" component={RegisterForm} />
    </div>
  </section>
);
