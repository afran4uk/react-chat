import React from 'react';
import { Block, Button } from '~/components';
import { Form, Input } from 'antd';
import { Link } from 'react-router-dom';

export class LoginForm extends React.Component {
  onFinish = (values) => {
    console.log('Received values of from: ', values);
  };

  render() {
    return (
      <div>
        <div className="auth__top">
          <h2>Войти в аккаунт</h2>
          <p>Пожалуйста, войдите в свой аккаунт</p>
        </div>
        <Block>
          <Form className="login-form" onFinish={this.onFinish}>
            <Form.Item name="username" hasFeedback validate-status="success">
              <Input size="large" placeholder="Username" />
            </Form.Item>
            <Form.Item name="password">
              <Input size="large" type="password" placeholder="Password" />
            </Form.Item>

            <Form.Item>
              <Button type="primary" size="large">
                Войти в аккаунт
              </Button>
            </Form.Item>

            <Link className="auth__register-link" to="/register">
              Зарегистрироваться
            </Link>
          </Form>
        </Block>
      </div>
    );
  }
}
