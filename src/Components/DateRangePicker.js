import React from 'react'
import { DatePicker } from 'antd';
import moment from 'moment';
const RangePicker = DatePicker.RangePicker;
const dateFormat = 'YYYY/MM/DD';

export default function DateRangePicker({ startDate, endDate, onChange }) {
  return (
    <div>
      <RangePicker
        // defaultValue={[moment(startDate, dateFormat), moment(endDate, dateFormat)]}
        onChange={onChange}
      />
    </div>
  )
}
