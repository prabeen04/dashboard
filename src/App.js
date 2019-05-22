import React from 'react';
import { Skeleton, Empty } from "antd";
import useData, { SET_TIME_RANGE } from './useData';
import DateRangePicker from "./Components/DateRangePicker";
import Chart from "./Components/Chart";
import Table from "./Components/Table";
import 'antd/dist/antd.css';
import './App.css';

function App() {
  const { state, dispatch } = useData()
  const { isFetching, isFetchingError, data, startDate, endDate, } = state;

  if (isFetching) return <Skeleton loading />
  // if (isFetchingError) return <Empty description='Error fetching Data' />
  // if (!data.length) return <Empty description="Couldn't any relevent data" />
  return (
    <div className="App">
    <h1 className='header-text'>Dashboard</h1>
      <div className="datepicker-container">
        <DateRangePicker
          startDate={startDate}
          endDate={endDate}
          onChange={(range) => {
            console.log(range)
            dispatch({ type: SET_TIME_RANGE, payload: { startDate: range[0], endDate: range[1] } })
          }}
        />
      </div>
      <div className="chart-container">
        <Chart
          data={data && data.map(d => ({ name: d.timestamp, eCPM: (d.revenue / d.impressions) * 1000 }))}
          dataKey='name'
          value='eCPM'
          emptyText='No relevent data found for this date range'
        />
      </div>
      <div className="table-container">
        <Table
          data={data}
        />
      </div>

    </div>
  );
}

export default App;
