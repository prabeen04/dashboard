import React from 'react'
import { DatePicker } from 'antd';
import moment from 'moment';
const RangePicker = DatePicker.RangePicker;
const dateFormat = 'YYYY/MM/DD';

export default function DateRangePicker({ onChange }) {
  function disabledDate(current) {
    // Can not select future date
    return current && current > moment().endOf('day');
  }
  return (
    <div>
      <RangePicker
        onChange={onChange}
        disabledDate={disabledDate}
      />
    </div>
  )
}
