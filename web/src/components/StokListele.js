import React, { useEffect } from "react";
import { List, Avatar, Icon } from "antd";
import { Link } from "react-router-dom";
import { useGetStoklarQuery } from "../generated/graphql";

const StokListele = props => {
  const { data, error, loading } = useGetStoklarQuery();

  if (loading) {
    return <List loading={loading} itemLayout="horizontal"></List>;
  }

  return (
    <List
      itemLayout="horizontal"
      dataSource={data.stoklar}
      renderItem={item => (
        <List.Item
          extra={
            <img
              width={200}
              height={200}
              alt="logo"
              src={item.arac_resimleri ? item.arac_resimleri[0].image : ""}
            />
          }
          actions={[
            <a key="list-loadmore-edit">edit</a>,
            <Link to={`/stokliste/${item.id}/`}>more</Link>
          ]}
        >
          <List.Item.Meta
            avatar={
              <Avatar
                src={item.arac_resimleri ? item.arac_resimleri[0].image : ""}
              />
            }
            title={<Link to={`/stokliste/${item.id}/`}>{item.plaka}</Link>}
            description={item.aciklama}
          />
        </List.Item>
      )}
    />
  );
};

export default StokListele;
