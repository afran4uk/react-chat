import React from 'react';
import { Block, Button } from '../../../components';
import { Form, Input } from 'antd';
import { LockOutlined, UserOutlined, MailOutlined } from '@ant-design/icons';
import { Link } from 'react-router-dom';

export class RegisterForm extends React.Component {
  onFinish = (values) => {
    console.log('RegForm Received values of from: ', values);
  };

  render() {
    return (
      <section className="auth">
        <div>
          <div className="auth__top">
            <h2>Регистрация</h2>
            <p>Плиз зарегайся</p>
          </div>
          <Block>
            <Form name="normal_login" className="login-form" onFinish={this.onFinish}>
              <Form.Item name="email">
                <Input size="large" prefix={<MailOutlined className="site-form-item-icon" />} placeholder="E-mail" />
              </Form.Item>
              <Form.Item name="username">
                <Input size="large" prefix={<UserOutlined className="site-form-item-icon" />} placeholder="Username" />
              </Form.Item>
              <Form.Item name="password">
                <Input size="large" prefix={<LockOutlined className="site-form-item-icon" />} type="password" placeholder="Password" />
              </Form.Item>
              <Form.Item name="repeat-password">
                <Input size="large" prefix={<LockOutlined className="site-form-item-icon" />} type="password" placeholder="Repeat password" />
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
          </Block>
        </div>
      </section>
    );
  }
}
