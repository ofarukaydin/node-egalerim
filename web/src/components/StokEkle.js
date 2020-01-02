import React from "react";
import "./StokEkle.css";
import { Form, Row, Col, Input, Button, Icon, Upload, DatePicker } from "antd";
import { useStokEkleMutation, GetStoklarDocument } from "../generated/graphql";

const StokEkleForm = props => {
  const [stokEkle, { data, loading, error }] = useStokEkleMutation();

  const customRequest = options => {
    const data = new FormData();
    data.append("image", options.file);
    const config = {
      headers: {
        Authorization: `Token ${props.token}`,
        "Content-Type":
          "application/x-www-form-urlencoded,multipart/form-data; boundary=--------------------------002996157090454745565512"
      }
    };
    /*     axios
      .post("http://127.0.0.1:8000/api/aracresimleri/", data, config)
      .then(res => {
        options.onSuccess(res.data, options.file);
      })
      .catch(err => {
        options.onError(err);
      }); */
  };

  const customRequest2 = options => {
    const data = new FormData();
    data.append("image", options.file);
    const config = {
      headers: {
        Authorization: `Token ${props.token}`,
        "Content-Type":
          "application/x-www-form-urlencoded,multipart/form-data; boundary=--------------------------002996157090454745565512"
      }
    };
    /*     axios
      .post("http://127.0.0.1:8000/api/ruhsatresimleri/", data, config)
      .then(res => {
        options.onSuccess(res.data, options.file);
      })
      .catch(err => {
        options.onError(err);
      }); */
  };

  const handlePlaka = (rule, value, callback) => {
    let regex, v;
    let val = value;
    v = val.replace(/\s+/g, "").toUpperCase();
    regex = /([0-9]{2}|[01]{2})([a-z|A-Z]{2,})([0-9]{2,})/;
    if (v.match(regex)) {
      return callback();
    } else {
      return callback(true);
    }
  };

  const normFile = e => {
    console.log("Upload event:", e);
    if (Array.isArray(e)) {
      return e;
    }
    return e && e.fileList;
  };

  const handleSubmit = e => {
    e.preventDefault();
    props.form.validateFields(async (err, fieldsValue) => {
      if (!err) {
        let tarih;
        fieldsValue["alisTarihi"]
          ? (tarih = fieldsValue["alisTarihi"].format("YYYY-MM-DD"))
          : (tarih = null);
        console.log("Received values of form: ", fieldsValue, tarih);
        const {
          plaka,
          marka,
          model,
          yil,
          ruhsatNo,
          alisTarihi,
          motorNo,
          saseNo,
          alisFiyati,
          kdv,
          toplam,
          aciklama,
          tur
        } = fieldsValue;
        const response = await stokEkle({
          variables: {
            plaka,
            marka,
            model,
            yil,
            ruhsatNo,
            alisTarihi: tarih,
            motorNo,
            saseNo,
            alisFiyati,
            kdv,
            toplam,
            aciklama,
            tur
          },
          refetchQueries: [{ query: GetStoklarDocument }]
        });
        console.log(response);
        props.history.push("/stokliste");
      }
    });
  };

  const { getFieldDecorator } = props.form;
  return (
    <Form
      labelAlign="left"
      className="ant-advanced-search-form"
      onSubmit={handleSubmit}
    >
      <Row>
        <Col span={12} style={{ textAlign: "left" }}>
          <h2>Araç Bilgileri</h2>
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
        <Col span={11} key={"plaka"}>
          <Form.Item required label={`Plaka`} labelCol={{ span: 3 }}>
            {getFieldDecorator("plaka", {
              rules: [
                { required: true, message: "Lütfen plakayı kontrol edin" },
                {
                  validator: handlePlaka
                }
              ]
            })(<Input />)}
          </Form.Item>
        </Col>

        <Col span={11} offset={1} key={"motor"}>
          <Form.Item label={`Motor No`} labelCol={{ span: 3 }}>
            {getFieldDecorator("motorNo", {
              rules: [{ required: false }]
            })(<Input placeholder="Aracın motor numarasını girin" />)}
          </Form.Item>
        </Col>

        <Col span={11} key={"marka"}>
          <Form.Item label={`Marka`} labelCol={{ span: 3 }}>
            {getFieldDecorator("marka", {
              rules: [{ required: false }]
            })(<Input placeholder="Araç markası" />)}
          </Form.Item>
        </Col>

        <Col span={11} offset={1} key={"sase"}>
          <Form.Item label={`Şase no`} labelCol={{ span: 3 }}>
            {getFieldDecorator("saseNo", {
              rules: [{ required: false }]
            })(<Input placeholder="Araç şase no" />)}
          </Form.Item>
        </Col>

        <Col span={11} key={"model"}>
          <Form.Item label={`Model`} labelCol={{ span: 3 }}>
            {getFieldDecorator("model", {
              rules: [{ required: false }]
            })(<Input placeholder="Araç Modeli" />)}
          </Form.Item>
        </Col>

        <Col span={11} offset={1} key={"alis"}>
          <Form.Item label={`Alış Fiyatı`} labelCol={{ span: 3 }}>
            {getFieldDecorator("alisFiyati", {
              rules: [{ required: false }]
            })(<Input placeholder="Alış fiyatı" />)}
          </Form.Item>
        </Col>
        <Col span={11} key={"yil"}>
          <Form.Item label={`Yıl`} labelCol={{ span: 3 }}>
            {getFieldDecorator("yil", {
              rules: [{ required: false }]
            })(<Input placeholder="Aracın üretim tarihi" />)}
          </Form.Item>
        </Col>
        <Col span={11} offset={1} key={"kdv"}>
          <Form.Item label={`KDV`} labelCol={{ span: 3 }}>
            {getFieldDecorator("kdv", {
              rules: [{ required: false }]
            })(<Input placeholder="KDV" />)}
          </Form.Item>
        </Col>
        <Col span={11} key={"ruhsat"}>
          <Form.Item label={`Ruhsat No`} labelCol={{ span: 3 }}>
            {getFieldDecorator("ruhsatNo", {
              rules: [{ required: false }]
            })(<Input placeholder="Araç ruhsat no" />)}
          </Form.Item>
        </Col>

        <Col span={11} offset={1} key={"toplam"}>
          <Form.Item label={`Toplam`} labelCol={{ span: 3 }}>
            {getFieldDecorator("toplam", {
              rules: [{ required: false }]
            })(<Input placeholder="Toplam" />)}
          </Form.Item>
        </Col>
        <Col span={11} key={"tarih"}>
          <Form.Item label={`Alış Tarihi`} labelCol={{ span: 3 }}>
            {getFieldDecorator("alisTarihi", {
              rules: [{ required: false }]
            })(<DatePicker />)}
          </Form.Item>
        </Col>

        <Col span={11} offset={1} key={"Açıklama"}>
          <Form.Item label={`Açıklama`} labelCol={{ span: 3 }}>
            {getFieldDecorator("aciklama", {
              rules: [{ required: false }]
            })(<Input placeholder="Açıklama" />)}
          </Form.Item>
        </Col>
      </Row>
      <h2> Araç Resimleri</h2>
      <hr></hr>
      <br />

      <Row type="flex" gutter={24}>
        <Col span={11} key={"aracresim"}>
          <Form.Item
            labelAlign="left"
            label="Araç Resimleri"
            labelCol={{ span: 4 }}
          >
            {getFieldDecorator("aracResim", {
              valuePropName: "fileList",
              getValueFromEvent: normFile
            })(
              <Upload.Dragger
                multiple
                customRequest={customRequest}
                name="files"
                action="http://127.0.0.1:8000/api/aracresimleri/"
                listType="picture"
              >
                <p className="ant-upload-drag-icon">
                  <Icon type="picture" />
                </p>
                <p className="ant-upload-text">
                  Araç resimleri eklemek için buraya tıklayın veya sürükleyin
                </p>
              </Upload.Dragger>
            )}
          </Form.Item>
        </Col>
        <Col span={11} offset={1} key={4}>
          <Form.Item label="Ruhsat Resimleri" labelCol={{ span: 4 }}>
            {getFieldDecorator("ruhsatResim", {
              valuePropName: "fileList2",
              getValueFromEvent: normFile
            })(
              <Upload.Dragger
                multiple
                customRequest={customRequest2}
                name="files"
                action="http://127.0.0.1:8000/api/ruhsatresimleri/"
                listType="picture"
              >
                <p className="ant-upload-drag-icon">
                  <Icon type="picture" />
                </p>
                <p className="ant-upload-text">
                  Araç resimleri eklemek için buraya tıklayın veya sürükleyin
                </p>
              </Upload.Dragger>
            )}
          </Form.Item>
        </Col>
      </Row>
    </Form>
  );
};

const WrappedStokEkleForm = Form.create({ name: "stok_ekle" })(StokEkleForm);

export default WrappedStokEkleForm;
