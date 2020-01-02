import React, { useEffect } from "react";
import { Descriptions } from "antd";
import { useCariQuery } from "../generated/graphql";
import { useParams } from "react-router";

const CariDetay = props => {
  let { id } = useParams();

  const { data, error, loading } = useCariQuery({
    variables: { id: Number(id) }
  });

  if (loading) {
    return (
      <Descriptions
        title="Cari Bilgileri"
        layout="vertical"
        loading={loading}
      ></Descriptions>
    );
  }
  if (error) {
    return <p>{error.message}</p>;
  }

  return (
    <Descriptions title="Cari Bilgileri" layout="vertical">
      <Descriptions.Item label="Cari Adı">{data.cari.isim}</Descriptions.Item>
      <Descriptions.Item label="TC No">{data.cari.tc_no}</Descriptions.Item>
      <Descriptions.Item label="Email">{data.cari.email}</Descriptions.Item>
      <Descriptions.Item label="Vergi No">
        {data.cari.vergi_no}
      </Descriptions.Item>
      <Descriptions.Item label="Adres" span={2}>
        {data.cari.adres}
      </Descriptions.Item>
      <Descriptions.Item label="Posta Kodu">
        {data.cari.posta_kodu}
      </Descriptions.Item>
    </Descriptions>
  );
};

export default CariDetay;
