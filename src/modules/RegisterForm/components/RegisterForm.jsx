import React from 'react';
import { Block, Button } from '~/components';
import { Form, Input } from 'antd';
import { Formik } from 'formik';
import { ClockCircleTwoTone } from '@ant-design/icons';
import { Link } from 'react-router-dom';

const success = false;

export const RegisterForm = () => {
  return (
    <div>
      <div className="auth__top">
        <h2>Регистрация</h2>
        <p>Плиз зарегайся</p>
      </div>
      <Block>
        {!success ? (
          <Formik
            initialValues={{ email: '', username: '', password: '', repeat_password: '' }}
            validate={(values) => {
              const errors = {};

              if (!values.email) {
                errors.email = 'Required';
              } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(values.email)) {
                errors.email = 'Invalid email address';
              }

              if (!values.password) {
                errors.password = 'Required';
              }

              if (!values.username) {
                errors.username = 'Required';
              }

              if (!values.repeat_password) {
                errors.repeat_password = 'Required';
              }

              if (values.repeat_password !== values.password) {
                errors.repeat_password = 'Пароли должны совпадать';
              }

              return errors;
            }}
            onSubmit={(values, actions) => {
              setTimeout(() => {
                alert(JSON.stringify(values, null, 2));

                actions.setSubmitting(false);
              }, 1000);
            }}
          >
            {(props) => (
              <Form className="login-form" onSubmit={props.handleSubmit}>
                <Form.Item
                  validateStatus={!props.touched.email ? '' : props.errors.email ? 'error' : 'success'}
                  hasFeedback
                >
                  <Input
                    id="email"
                    name="email"
                    size="large"
                    type="mail"
                    placeholder="E-mail"
                    value={props.values.email}
                    onChange={props.handleChange}
                    onBlur={props.handleBlur}
                  />
                </Form.Item>
                <Form.Item
                  validateStatus={!props.touched.username ? '' : props.errors.username ? 'error' : 'success'}
                  hasFeedback
                >
                  <Input
                    id="userName"
                    name="username"
                    size="large"
                    placeholder="Username"
                    value={props.values.username}
                    onChange={props.handleChange}
                    onBlur={props.handleBlur}
                  />
                </Form.Item>
                <Form.Item
                  validateStatus={!props.touched.password ? '' : props.errors.password ? 'error' : 'success'}
                  hasFeedback
                >
                  <Input
                    id="password"
                    name="password"
                    size="large"
                    type="password"
                    placeholder="Password"
                    value={props.values.password}
                    onChange={props.handleChange}
                    onBlur={props.handleBlur}
                  />
                </Form.Item>
                <Form.Item
                  validateStatus={
                    !props.touched.repeat_password ? '' : props.errors.repeat_password ? 'error' : 'success'
                  }
                  hasFeedback
                >
                  <Input
                    id="repeat_password"
                    name="repeat_password"
                    size="large"
                    type="password"
                    placeholder="Repeat password"
                    value={props.values.repeat_password}
                    onChange={props.handleChange}
                    onBlur={props.handleBlur}
                  />
                </Form.Item>

                <Form.Item>
                  <Button type="primary" size="large">
                    Зарегистрироваться
                  </Button>
                </Form.Item>

                <Link className="auth__register-link" to="/">
                  Войти в аккаунт
                </Link>
              </Form>
            )}
          </Formik>
        ) : (
          <div className="auth__success-block">
            <div>
              <ClockCircleTwoTone style={{ size: '50px' }} />
            </div>
            <h3>Подтвердите свой аккаунт</h3>
            <p>На вашу почту отправлено письмо</p>
          </div>
        )}
      </Block>
    </div>
  );
};
