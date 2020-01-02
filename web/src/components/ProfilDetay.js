import { Button, Form, Input, Select, Upload, message } from "antd";
import React, { Component, Fragment } from "react";
import styles from "./ProfilDetay.module.css";

const FormItem = Form.Item;
const { Option } = Select; // 头像组件 方便以后独立，增加裁剪之类的功能

const AvatarView = ({ avatar }) => (
  <Fragment>
    <div className={styles.avatar_title}></div>
    <div className={styles.avatar}>
      <img
        src={
          "https://gw.alipayobjects.com/zos/antfincdn/XAosXuNZyF/BiazfanxmamNRoxxVxka.png"
        }
        alt="avatar"
      />
    </div>
    <Upload fileList={[]}>
      <div className={styles.button_view}>
        <Button icon="upload">Avatar değiştir</Button>
      </div>
    </Upload>
  </Fragment>
);

const validatorPhone = (rule, value, callback) => {
  const values = value.split("-");

  if (!values[0]) {
    callback("Please input your area code!");
  }

  if (!values[1]) {
    callback("Please input your phone number!");
  }

  callback();
};

class ProfilDetay extends Component {
  view = undefined;

  componentDidMount() {
    this.setBaseInfo();
  }

  setBaseInfo = () => {
    const { currentUser, form } = this.props;

    if (currentUser) {
      Object.keys(form.getFieldsValue()).forEach(key => {
        const obj = {};
        obj[key] = currentUser[key] || null;
        form.setFieldsValue(obj);
      });
    }
  };

  getAvatarURL() {
    const { currentUser } = this.props;

    if (currentUser) {
      if (currentUser.avatar) {
        return currentUser.avatar;
      }

      const url =
        "https://gw.alipayobjects.com/zos/rmsportal/BiazfanxmamNRoxxVxka.png";
      return url;
    }

    return "";
  }

  getViewDom = ref => {
    this.view = ref;
  };

  handlerSubmit = event => {
    event.preventDefault();
    const { form } = this.props;
    form.validateFields(err => {
      if (!err) {
        message.success("Başarılı");
      }
    });
  };

  render() {
    const {
      form: { getFieldDecorator }
    } = this.props;
    return (
      <div className={styles.baseView} ref={this.getViewDom}>
        <div className={styles.left}>
          <Form layout="vertical" hideRequiredMark>
            <FormItem label="Email">
              {getFieldDecorator("email", {
                rules: [
                  {
                    required: true,
                    message: "Email Adresini girin"
                  }
                ]
              })(<Input />)}
            </FormItem>
            <FormItem label="İsim">
              {getFieldDecorator("name", {
                rules: [
                  {
                    required: false,
                    message: "İsminizi girin"
                  }
                ]
              })(<Input />)}
            </FormItem>
            <FormItem label="Basic profile">
              {getFieldDecorator("profile", {
                rules: [
                  {
                    required: true,
                    message: "Deneme"
                  }
                ]
              })(<Input.TextArea placeholder="Placeholder" rows={4} />)}
            </FormItem>

            <FormItem label="Adres">
              {getFieldDecorator("address", {
                rules: [
                  {
                    required: false,
                    message: "Adres girin"
                  }
                ]
              })(<Input />)}
            </FormItem>
            <FormItem label="Telefon No">
              {getFieldDecorator("phone", {
                rules: [
                  {
                    required: false,
                    message: "Telefon no girin"
                  },
                  {
                    validator: validatorPhone
                  }
                ]
              })(<Input />)}
            </FormItem>
            <Button type="primary" onClick={this.handlerSubmit}>
              Update Information
            </Button>
          </Form>
        </div>
        <div className={styles.right}>
          <AvatarView avatar={this.getAvatarURL()} />
        </div>
      </div>
    );
  }
}

export default Form.create()(ProfilDetay);
