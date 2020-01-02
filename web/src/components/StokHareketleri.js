import React from "react";
import { Form, Row, Col, Input, Button, Select, DatePicker } from "antd";

const { Option } = Select;

class StokHareketForm extends React.Component {
  state = {
    expand: false
  };

  handleSubmit = e => {
    e.preventDefault();
    this.props.form.validateFields((err, values) => {
      if (!err) {
        console.log("Received values of form: ", values);
        /* this.props.cariEkle(this.props.token, values); */
      }
    });
  };

  render() {
    const { getFieldDecorator } = this.props.form;

    return (
      <Form
        labelAlign="left"
        className="ant-advanced-search-form"
        onSubmit={this.handleSubmit}
      >
        <Row>
          <Col span={12} style={{ textAlign: "left" }}>
            <h2>Stok Hareketleri</h2>
          </Col>
          <Col span={12} style={{ textAlign: "right", paddingRight: "4%" }}>
            <Button type="primary" htmlType="submit">
              Kaydet
            </Button>
          </Col>
        </Row>

        <hr />
        <br />
        <Row type="flex" gutter={24}>
          <Col span={24} key={"stokkodu"}>
            <Form.Item required label={`Stok Kodu`} labelCol={{ span: 3 }}>
              {getFieldDecorator("stok_kodu", {
                rules: [{ required: false }]
              })(<Input placeholder="Stok Kodu" />)}
            </Form.Item>
          </Col>

          <Col span={24} key={"fis_turu"}>
            <Form.Item label={`Fiş Türü`} labelCol={{ span: 3 }}>
              {getFieldDecorator("fis_turu", {
                rules: [
                  {
                    required: false,
                    message: "Lütfen carinin TC veya Vergi numarasını girin"
                  }
                ]
              })(
                <Select
                  showSearch
                  style={{ width: 200 }}
                  placeholder="Fiş türü seçin"
                  optionFilterProp="children"
                  filterOption={(input, option) =>
                    option.props.children
                      .toLowerCase()
                      .indexOf(input.toLowerCase()) >= 0
                  }
                >
                  <Option value="Satış Faturası">Satış Faturası</Option>
                  <Option value="Alış Faturası">Alış Faturası</Option>
                  <Option value="Gider Pusulası">Gider Pusulası</Option>
                  <Option value="Noter Evrağı">Noter Evrağı</Option>
                </Select>
              )}
            </Form.Item>
          </Col>

          <Col span={24} key={"fis_no"}>
            <Form.Item label={`Fiş No`} labelCol={{ span: 3 }}>
              {getFieldDecorator("fis_no", {
                rules: [{ required: false, message: "Lütfen Fiş Noni girin" }]
              })(<Input placeholder="Fiş No" />)}
            </Form.Item>
          </Col>

          <Col span={24} key={"evrak_tarihi"}>
            <Form.Item label={`Evrak Tarihi`} labelCol={{ span: 3 }}>
              {getFieldDecorator("evrak_tarihi", {
                rules: [
                  {
                    required: false,
                    message: "Lütfen carinin TC veya Vergi numarasını girin"
                  }
                ]
              })(<DatePicker />)}
            </Form.Item>
          </Col>

          <Col span={24} key={"islem_tarihi"}>
            <Form.Item label={`İşlem Tarihi`} labelCol={{ span: 3 }}>
              {getFieldDecorator("islem_tarihi", {
                rules: [
                  { required: false, message: "Lütfen vergi dairesini girin" }
                ]
              })(<DatePicker />)}
            </Form.Item>
          </Col>

          <Col span={24} key={"alis_fiyati"}>
            <Form.Item label={`Alış Fiyatı`} labelCol={{ span: 3 }}>
              {getFieldDecorator("alis_fiyati", {
                rules: [
                  {
                    required: false,
                    message: "Lütfen carinin TC veya Vergi numarasını girin"
                  }
                ]
              })(<Input placeholder="Alış Fiyatı" />)}
            </Form.Item>
          </Col>

          <Col span={24} key={"satis_fiyati"}>
            <Form.Item label={`Satış Fiyatı`} labelCol={{ span: 3 }}>
              {getFieldDecorator("satis_fiyati", {
                rules: [
                  { required: false, message: "Lütfen vergi dairesini girin" }
                ]
              })(<Input placeholder="Satış Fiyatı" />)}
            </Form.Item>
          </Col>
          <Col span={24} key={"aciklama"}>
            <Form.Item label={`Açıklama`} labelCol={{ span: 3 }}>
              {getFieldDecorator("aciklama", {
                rules: [
                  {
                    required: false,
                    message: "Lütfen carinin TC veya Vergi numarasını girin"
                  }
                ]
              })(<Input placeholder="Açıklama" />)}
            </Form.Item>
          </Col>

          <Col span={24} key={"kdv"}>
            <Form.Item label={`KDV Oranı`} labelCol={{ span: 3 }}>
              {getFieldDecorator("kdv", {
                rules: [
                  { required: false, message: "Lütfen vergi dairesini girin" }
                ]
              })(<Input placeholder="KDV Oranı" />)}
            </Form.Item>
          </Col>
          <Col span={24} key={"giris_miktar"}>
            <Form.Item label={`Giriş Miktarı`} labelCol={{ span: 3 }}>
              {getFieldDecorator("giris_miktar", {
                rules: [
                  {
                    required: false,
                    message: "Lütfen carinin TC veya Vergi numarasını girin"
                  }
                ]
              })(<Input placeholder="Giriş Miktarı" />)}
            </Form.Item>
          </Col>

          <Col span={24} key={"cikis_miktar"}>
            <Form.Item label={`Çıkış Miktarı`} labelCol={{ span: 3 }}>
              {getFieldDecorator("cikis_miktar", {
                rules: [
                  { required: false, message: "Lütfen vergi dairesini girin" }
                ]
              })(<Input placeholder="Çıkış Miktarı" />)}
            </Form.Item>
          </Col>
        </Row>
      </Form>
    );
  }
}

const WrappedCariEkleForm = Form.create({ name: "stok_hareket" })(
  StokHareketForm
);

export default WrappedCariEkleForm;
