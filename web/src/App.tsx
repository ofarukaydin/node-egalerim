import React, { useState, useEffect } from "react";
import Routes from "./Routes";
import { setAccessToken } from "./hoc/authProvider";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import Layout from "./components/Layout";
import Login from "./components/Login";
import Register from "./components/Register";
import { Spin } from "antd";

interface Props {}

export const App: React.FC<Props> = props => {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch(`${process.env.REACT_APP_BACKEND_URL}/refresh_token`, {
      method: "POST",
      credentials: "include"
    }).then(async x => {
      const { accessToken } = await x.json();
      setAccessToken(accessToken);
      setLoading(false);
    });
  }, []);

  if (loading) {
    return (
      <div
        style={{
          transform: "translate(-50%, -50%)",
          position: "absolute",
          top: "50%",
          left: "50%",
          margin: 0
        }}
      >
        <Spin size="large" tip="Yükleniyor..." />
      </div>
    );
  }

  return (
    <BrowserRouter>
      <Switch>
        <Route path="/login" component={Login} />
        <Route path="/register" component={Register} />
        <Layout {...props}>
          <Routes />
        </Layout>
      </Switch>
    </BrowserRouter>
  );
};
