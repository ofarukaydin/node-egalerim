import React from "react";
import { Form, Row, Col, Input, Button, Select } from "antd";
import { useCariEkleMutation, GetCarilerDocument } from "../generated/graphql";
const { Option } = Select;

const CariEkleForm = props => {
  const [cariEkle, { data, loading, error }] = useCariEkleMutation();

  const handleSubmit = e => {
    e.preventDefault();
    props.form.validateFields(async (err, values) => {
      if (!err) {
        console.log("Received values of form: ", values);
        const { tcNo, isim, adres, email, postaKodu, telNo, vergiNo } = values;
        const response = await cariEkle({
          variables: {
            tcNo,
            isim,
            adres,
            email,
            postaKodu,
            telNo,
            vergiNo
          },
          refetchQueries: [{ query: GetCarilerDocument }]
        });
        console.log(response);
        props.history.push("/cariliste");
      }
    });
  };
  const { getFieldDecorator } = props.form;

  const prefixSelector = getFieldDecorator("prefix", {
    initialValue: "+90"
  })(
    <Select style={{ width: 70 }}>
      <Option value="+90">+90</Option>
    </Select>
  );

  return (
    <Form
      labelAlign="left"
      className="ant-advanced-search-form"
      onSubmit={handleSubmit}
    >
      {error && <p>{error.message}</p>}
      <Row>
        <Col span={12} style={{ textAlign: "left" }}>
          <h2>Cari Ekle</h2>
        </Col>
        <Col span={12} style={{ textAlign: "right", paddingRight: "4%" }}>
          <Button
            loading={loading}
            disabled={loading}
            type="primary"
            htmlType="submit"
          >
            Kaydet
          </Button>
        </Col>
      </Row>

      <hr />
      <br />
      <Row type="flex" gutter={24}>
        <Col span={24} key={"cariara"}>
          <Form.Item required label={`Carinin Adı`} labelCol={{ span: 3 }}>
            {getFieldDecorator("isim", {
              rules: [{ required: true, message: "Lütfen bir cari ismi girin" }]
            })(<Input placeholder="Carinin Adı" />)}
          </Form.Item>
        </Col>

        <Col span={24} key={"vergino"}>
          <Form.Item label={`Vergi/TC No`} labelCol={{ span: 3 }}>
            {getFieldDecorator("tcNo", {
              rules: [
                {
                  required: true,
                  message: "Lütfen carinin TC veya Vergi numarasını girin"
                }
              ]
            })(<Input placeholder="Carinin TC veya Vergi Numarası" />)}
          </Form.Item>
        </Col>

        <Col span={24} key={"vergidaire"}>
          <Form.Item label={`Vergi Dairesi`} labelCol={{ span: 3 }}>
            {getFieldDecorator("vergiNo", {
              rules: [
                { required: true, message: "Lütfen vergi dairesini girin" }
              ]
            })(<Input placeholder="Vergi dairesi" />)}
          </Form.Item>
        </Col>

        <Col span={24} key={"adres"}>
          <Form.Item label={`Adres`} labelCol={{ span: 3 }}>
            {getFieldDecorator("adres", {
              rules: [
                {
                  required: false,
                  message: "Lütfen carinin TC veya Vergi numarasını girin"
                }
              ]
            })(<Input placeholder="Carinin Adresi" />)}
          </Form.Item>
        </Col>

        <Col span={24} key={"telo"}>
          <Form.Item label={`Telefon Numarası`} labelCol={{ span: 3 }}>
            {getFieldDecorator("telNo", {
              rules: [
                { required: false, message: "Lütfen vergi dairesini girin" }
              ]
            })(
              <Input
                placeholder="Telefon Numarası"
                addonBefore={prefixSelector}
                style={{ width: "100%" }}
              />
            )}
          </Form.Item>
        </Col>

        <Col span={24} key={"email"}>
          <Form.Item label={`E-mail`} labelCol={{ span: 3 }}>
            {getFieldDecorator("email", {
              rules: [
                {
                  required: false,
                  message: "Lütfen carinin TC veya Vergi numarasını girin"
                }
              ]
            })(<Input placeholder="Carinin e-mail adresi" />)}
          </Form.Item>
        </Col>

        <Col span={24} key={"posta"}>
          <Form.Item label={`Posta Kodu`} labelCol={{ span: 3 }}>
            {getFieldDecorator("postaKodu", {
              rules: [
                { required: false, message: "Lütfen vergi dairesini girin" }
              ]
            })(<Input placeholder="Posta Kodu" />)}
          </Form.Item>
        </Col>
      </Row>
    </Form>
  );
};

const WrappedCariEkleForm = Form.create({ name: "cari_ekle" })(CariEkleForm);

export default WrappedCariEkleForm;
