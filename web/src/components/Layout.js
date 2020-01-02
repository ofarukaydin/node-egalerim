import React from "react";
import { useLogoutMutation } from "../generated/graphql";
import { Layout, Menu, Breadcrumb, Icon } from "antd";
import { Link } from "react-router-dom";
import { getAccessToken, setAccessToken } from "../hoc/authProvider";

const { SubMenu } = Menu;
const { Header, Content, Sider } = Layout;

const LayoutUI = props => {
  const authenticated = !!getAccessToken();
  const [logout, { client }] = useLogoutMutation();

  const handleLogout = async () => {
    await logout();
    setAccessToken("");
    await client.resetStore();
  };

  return (
    <Layout>
      <Header className="header">
        <div className="logo" />
        <Menu
          theme="dark"
          mode="horizontal"
          defaultSelectedKeys={["2"]}
          style={{ lineHeight: "64px" }}
        >
          <Menu.Item key="1">
            <Link to="/">Ana Sayfa</Link>
          </Menu.Item>
          {authenticated ? (
            <Menu.Item key="2" onClick={handleLogout}>
              Logout
            </Menu.Item>
          ) : (
            <Menu.Item key="3">
              <Link to="/login">Login</Link>
            </Menu.Item>
          )}
          <Menu.Item key="12">
            <Link to="/profil">Profil</Link>
          </Menu.Item>
        </Menu>
      </Header>

      <Layout style={{ minHeight: "93vh" }}>
        <Sider collapsible>
          <div className="logo" />
          <Menu theme="dark" defaultSelectedKeys={["sub1"]} mode="inline">
            <SubMenu
              key="sub1"
              title={
                <span>
                  <Icon type="shopping-cart" />
                  <span>Satış İşlemleri</span>
                </span>
              }
            >
              <Menu.Item key="1">
                <Link to="/faturaekle">Yeni Fatura</Link>
              </Menu.Item>
              <Menu.Item key="2">
                <Link to="/cariekle">Faturalar</Link>
              </Menu.Item>
              <Menu.Item key="3">
                <Link to="/cariekle">Fatura Raporları</Link>
              </Menu.Item>
            </SubMenu>
            <SubMenu
              key="sub2"
              title={
                <span>
                  <Icon type="user" />
                  <span>Cari İşlemleri</span>
                </span>
              }
            >
              <Menu.Item key="4">
                <Link to="/cariekle">Yeni Cari</Link>
              </Menu.Item>
              <Menu.Item key="5">
                <Link to="/cariliste">Cari Listesi</Link>
              </Menu.Item>
              <Menu.Item key="6">
                <Link to="/cariekle">Cari Raporları</Link>
              </Menu.Item>
            </SubMenu>
            <SubMenu
              key="sub3"
              title={
                <span>
                  <Icon type="car" />
                  <span>Araçlar</span>
                </span>
              }
            >
              <Menu.Item key="7">
                <Link to="/stokekle">Yeni Araç</Link>
              </Menu.Item>
              <Menu.Item key="8">
                <Link to="/stokliste">Araç Listesi</Link>
              </Menu.Item>
              <Menu.Item key="9">
                <Link to="/stokekle">Araç Raporları</Link>
              </Menu.Item>
            </SubMenu>
            <SubMenu
              key="sub4"
              title={
                <span>
                  <Icon type="bank" />
                  <span>Gelir ve Giderler</span>
                </span>
              }
            >
              <Menu.Item key="10">
                <Link to="/stokekle">Yeni Gelir ve Gider</Link>
              </Menu.Item>
              <Menu.Item key="11">
                <Link to="/stokekle">Gelirler Ve Giderler</Link>
              </Menu.Item>
              <Menu.Item key="12">
                <Link to="/stokekle">Gelir Gider Raporları</Link>
              </Menu.Item>
            </SubMenu>
          </Menu>
        </Sider>
        <Layout style={{ padding: "0 24px 24px" }}>
          <Breadcrumb style={{ margin: "16px 0" }}>
            <Breadcrumb.Item>Home</Breadcrumb.Item>
            <Breadcrumb.Item>List</Breadcrumb.Item>
            <Breadcrumb.Item>App</Breadcrumb.Item>
          </Breadcrumb>
          <Content
            style={{
              background: "#fff",
              padding: 24,
              margin: 0,
              minHeight: 280
            }}
          >
            {props.children}
          </Content>
        </Layout>
      </Layout>
    </Layout>
  );
};

export default LayoutUI;
