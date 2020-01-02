import React, { useEffect } from "react";
import { Table } from "antd";

import { Link } from "react-router-dom";
import { useGetCarilerQuery } from "../generated/graphql";

const CariListele = props => {
  const { data, error, loading } = useGetCarilerQuery();

  const columns = [
    {
      title: "İsim",
      dataIndex: "isim",
      render: (text, record) => (
        <Link to={`/cariliste/${record.id}`}>{text}</Link>
      )
    },
    {
      title: "E-mail",
      dataIndex: "email"
    },
    {
      title: "Tel no",
      dataIndex: "tel_no"
    }
  ];

  // rowSelection object indicates the need for row selection
  const rowSelection = {
    onChange: (selectedRowKeys, selectedRows) => {
      console.log(
        `selectedRowKeys: ${selectedRowKeys}`,
        "selectedRows: ",
        selectedRows
      );
    },
    getCheckboxProps: record => ({
      disabled: record.name === "Disabled User", // Column configuration not to be checked
      name: record.name
    })
  };

  if (loading) {
    return (
      <Table
        rowSelection={rowSelection}
        columns={columns}
        loading={loading}
        rowKey="id"
      />
    );
  } else {
    return (
      <Table
        rowSelection={rowSelection}
        columns={columns}
        dataSource={data.cariler}
        loading={loading}
        rowKey="id"
      />
    );
  }
};

export default CariListele;
