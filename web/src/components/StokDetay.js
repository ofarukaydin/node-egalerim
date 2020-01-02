import React, { useEffect } from "react";
import { useParams } from "react-router-dom";
import { Descriptions } from "antd";
import { useStokQuery } from "../generated/graphql";

const StokDetay = props => {
  let { id } = useParams();

  const { data, error, loading } = useStokQuery({
    variables: { id: Number(id) }
  });

  if (loading) {
    return (
      <Descriptions
        title="Araç Bilgileri"
        layout="vertical"
        bordered
        loading={loading}
      ></Descriptions>
    );
  }
  if (error) {
    return <p>{error.message}</p>;
  }

  /*   if (data.stok.arac_resimleri) {
    aracResimleriList = props.currentStok.arac_resimleri.map(resimler => (
      <div>
        <img width="500px" alt="Araç Resmi" src={resimler.image} />
      </div>
    ));
  }

  if (props.currentStok.ruhsat_resimleri) {
    ruhsatResimleriList = props.currentStok.ruhsat_resimleri.map(resimler => (
      <div>
        <img width="500px" alt="Araç Resmi" src={resimler.image} />
      </div>
    ));
  } */

  return (
    <Descriptions title="Araç Bilgileri" layout="vertical" bordered>
      <Descriptions.Item label="Plaka">{data.stok.plaka}</Descriptions.Item>
      <Descriptions.Item label="Marka">{data.stok.marka}</Descriptions.Item>
      <Descriptions.Item label="Model">{data.stok.model}</Descriptions.Item>
      <Descriptions.Item label="Yıl">{data.stok.yil}</Descriptions.Item>
      <Descriptions.Item label="Tür" span={2}>
        {data.stok.tur}
      </Descriptions.Item>
      <Descriptions.Item label="Ruhsat No" span={3}>
        {data.stok.ruhsat_no}
      </Descriptions.Item>
      <Descriptions.Item label="Alış Tarihi">
        {data.stok.alis_tarihi}
      </Descriptions.Item>
      <Descriptions.Item label="Motor No">
        {data.stok.motor_no}
      </Descriptions.Item>
      <Descriptions.Item label="Şase No">{data.stok.sase_no}</Descriptions.Item>
      <Descriptions.Item label="Alış Fiyatı">
        {data.stok.alis_fiyati}
      </Descriptions.Item>
      <Descriptions.Item label="KDV">{data.stok.kdv}</Descriptions.Item>
      <Descriptions.Item label="Toplam">{data.stok.toplam}</Descriptions.Item>
      <Descriptions.Item label="Açıklama" span={4}>
        {data.stok.aciklama}
      </Descriptions.Item>
      <Descriptions.Item label="Araç Resimleri">{null}</Descriptions.Item>
      <Descriptions.Item label="Ruhsat Resimleri">{null}</Descriptions.Item>
    </Descriptions>
  );
};

export default StokDetay;
