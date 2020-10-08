import React from 'react'
import { Form, Input, Button } from 'antd';
import IsCapsActive from './IsCapsActive'

export default function Login() {

    return (
        <Form layout="vertical">
            <Form.Item
                label="Email"
                name="email"
                rules={[
                    {
                        type: 'email',
                        message: 'The input is not valid E-mail!',
                    },
                    {
                        required: true,
                        message: 'Please input your E-mail!',
                    },
                ]}
            >
            <Input/>
            </Form.Item>
            <Form.Item
                label="Password"
                name="password"
                rules={[
                    {
                        required: true,
                        message: 'Please input your password!',
                    },
                ]}
            >
                <Input.Password/>
                <IsCapsActive>{active => <span style={{color: "purple"}}>{active ? 'Warning: Caps Lock is active!' : null}</span>}</IsCapsActive>
            </Form.Item>
            <Form.Item>
                <a href="">Forgot Password</a>
            </Form.Item>
            <Form.Item>
                <Button type="primary">
                    Submit
        </Button>
            </Form.Item>
        </Form>
    )
}
