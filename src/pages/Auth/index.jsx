import React from 'react';
import {Form, Input, Checkbox} from 'antd';
import {UserOutlined, LockOutlined} from '@ant-design/icons';
import {Button, Block} from "../../components"

import "./Auth.scss"

class Auth extends React.Component {
    onFinish = (values: any) => {
        console.log('Received values of form: ', values);
    };

    render() {
        return (
            <section className="auth">
                <div>
                    <div className="auth__top">
                        <h2>Войти в аккаунт</h2>
                        <p>Пожалуйста, войдите в свой аккаунт</p>
                    </div>
                    <Block>
                        <Form name="normal_login" className="login-form" onFinish={this.onFinish}>
                            <Form.Item  name="username"  hasFeedback  validate-status="success">
                                <Input
                                    size="large"
                                    prefix={<UserOutlined className="site-form-item-icon"/>}
                                    placeholder="Username"
                                />
                            </Form.Item>
                            <Form.Item name="password">
                                <Input
                                    size="large"
                                    prefix={<LockOutlined className="site-form-item-icon"/>}
                                    type="password"
                                    placeholder="Password"
                                />
                            </Form.Item>

                            <Form.Item>
                                <Button type="primary" size="large">
                                    Войти в аккаунт
                                </Button>
                            </Form.Item>

                            <a className="auth__register-link" href="#">Зарегистрироваться</a>

                        </Form>
                    </Block>
                </div>
            </section>
        )
    }
}

export {Auth};