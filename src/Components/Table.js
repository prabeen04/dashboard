import React from 'react'
import { Table } from "antd";
export default function DataTable({ data }) {
  const columns = [
    {
      title: 'Date',
      dataIndex: 'timestamp',
      key: 'timestamp',
      sorter: (a, b) => a.timestamp > b.timestamp ? 1 : -1
    },
    {
      title: 'Game',
      dataIndex: 'game',
      key: 'game',
      sorter: (a, b) => a.game - b.game,
    },
    {
      title: 'Revenue',
      dataIndex: 'revenue',
      key: 'revenue',
      sorter: (a, b) => a.revenue - b.revenue,
    },
    {
      title: 'Impressions',
      dataIndex: 'impressions',
      key: 'impressions',
      sorter: (a, b) => a.impressions - b.impressions,
    },
    {
      title: 'eCPM',
      dataIndex: '',
      key: '',
      render: (name, item, i) => (item.revenue / item.impressions) * 1000,
      sorter: (a, b) => (a.revenue / a.impressions) * 1000 - (b.revenue / b.impressions) * 1000,
    },
  ];
  return (
    <div>
      <Table
        rowKey='uid'
        dataSource={data}
        columns={columns}
        onChange={() => { }}
        pagination={{
          defaultPageSize: 5,
          showSizeChanger: true,
          pageSizeOptions: ['5', '10']
        }}
      />
    </div>
  )
}
