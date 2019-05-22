import React from 'react'
import { Empty } from "antd";
import {
  LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer
} from 'recharts';

export default function Chart({ data, dataKey, value, emptyText, width, height, ...rest }) {
  if (!data.length) return <Empty description={emptyText || 'No data'} />
  return (
    <ResponsiveContainer width='100%' aspect={5.0/3.0}>
      <LineChart
        // width={width || 500}
        // height={height || 300}
        data={data}
        margin={{
          top: 5, right: 30, left: 20, bottom: 5,
        }}
        {...rest}
      >
        <CartesianGrid strokeDasharray="3 3" />
        <XAxis dataKey={dataKey} />
        <YAxis />
        <Tooltip />
        <Legend />
        <Line type="monotone" dataKey={value} stroke="#8884d8" activeDot={{ r: 8 }} />
      </LineChart>
    </ResponsiveContainer>
  )
}
