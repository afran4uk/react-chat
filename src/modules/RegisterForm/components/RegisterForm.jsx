import React from 'react';
import { Block, Button } from '~/components';
import { Form, Input } from 'antd';
import { ClockCircleTwoTone } from '@ant-design/icons';
import { Link } from 'react-router-dom';

const success = false;

export const RegisterForm = (props) => {
  const { values, touched, errors, handleChange, handleBlur, handleSubmit } = props;
  console.log(props)
  return (
    <div>
      <div className="auth__top">
        <h2>Регистрация</h2>
        <p>Плиз зарегайся</p>
      </div>
      <Block>
        {!success ? (
          <Form className="login-form" onSubmit={handleSubmit}>
            <Form.Item validateStatus={errors.email && touched.email} hasFeedback>
              <Input
                id='email'
                name='email'
                size="large"
                type="mail"
                placeholder="E-mail"
                value={values.email}
                onChange={handleChange}
                onBlur={handleBlur}
              />
            </Form.Item>
            <Form.Item name="username">
              <Input size="large" placeholder="Username" value={values.username} />
            </Form.Item>
            <Form.Item name="password">
              <Input size="large" type="password" placeholder="Password" value={values.password} />
            </Form.Item>
            <Form.Item name="repeat_password">
              <Input size="large" type="password" placeholder="Repeat password" value={values.repeat_password} />
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
        ) : (
          <div className="auth__success-block">
            <div>
              <ClockCircleTwoTone style={{ size: '50px' }} />
            </div>
            <h3>Подверлите свой аккаунт</h3>
            <p>На вашу почту отправлено письмецо</p>
          </div>
        )}
      </Block>
    </div>
  );
};
