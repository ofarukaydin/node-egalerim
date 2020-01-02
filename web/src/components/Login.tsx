import React from "react";
import { Link } from "react-router-dom";
import "./Login.css";
import { Form, Icon, Input, Button, Checkbox, Row } from "antd";
import { MeDocument, useLoginMutation, MeQuery } from "../generated/graphql";
import { setAccessToken } from "../hoc/authProvider";

export const NormalLoginForm: React.FC = (props: any) => {
  const [login, { data, loading, error }] = useLoginMutation();

  const handleSubmit = (e: any) => {
    e.preventDefault();
    props.form.validateFields(
      async (err: any, values: { email: any; password: any }) => {
        if (!err) {
          console.log("Received values of form: ", values);
          const { email, password } = values;
          const response = await login({
            variables: {
              email,
              password
            },
            update: (store, { data }) => {
              if (!data) {
                return null;
              }

              store.writeQuery<MeQuery>({
                query: MeDocument,
                data: {
                  me: data.login.user
                }
              });
            }
          });

          console.log(response);

          if (response && response.data) {
            setAccessToken(response.data.login.accessToken);
          }

          props.history.push("/");
        }
      }
    );
  };

  const { getFieldDecorator } = props.form;

  return (
    <Row
      type="flex"
      justify="center"
      align="middle"
      style={{ minHeight: "100vh" }}
    >
      <Form onSubmit={handleSubmit} className="login-form">
        {error && <p>{error.message}</p>}
        <Form.Item>
          {getFieldDecorator("email", {
            rules: [{ required: true, message: "Please input your email!" }]
          })(
            <Input
              prefix={<Icon type="user" style={{ color: "rgba(0,0,0,.25)" }} />}
              placeholder="E-mail"
            />
          )}
        </Form.Item>
        <Form.Item>
          {getFieldDecorator("password", {
            rules: [{ required: true, message: "Please input your Password!" }]
          })(
            <Input
              prefix={<Icon type="lock" style={{ color: "rgba(0,0,0,.25)" }} />}
              type="password"
              placeholder="Password"
            />
          )}
        </Form.Item>
        <Form.Item>
          {getFieldDecorator("remember", {
            valuePropName: "checked",
            initialValue: true
          })(<Checkbox>Remember me</Checkbox>)}
          <a className="login-form-forgot" href="">
            Forgot password
          </a>
          <Button
            type="primary"
            htmlType="submit"
            className="login-form-button"
            loading={loading}
            disabled={loading}
          >
            Log in
          </Button>
          Or <Link to="/register">Üye Olun</Link>
        </Form.Item>
      </Form>
    </Row>
  );
};

const WrappedNormalLoginForm = Form.create({ name: "normal_login" })(
  NormalLoginForm
);

export default WrappedNormalLoginForm;
