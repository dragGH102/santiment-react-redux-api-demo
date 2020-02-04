import React from 'react';
import PropTypes from 'prop-types';
import './style.scss';
import { CartesianGrid, Line, LineChart, ResponsiveContainer, XAxis, YAxis } from 'recharts';
import moment from 'moment';
import * as _ from 'lodash';

const Chart = ({ items }) => {
  // If we have items, render the chart
  if (items) {
    // format dates

    let itemsShortData =  _.cloneDeep(items);
    itemsShortData = itemsShortData.map(item => {
      return {
        datetime: moment(item.datetime).format('DD-MM'),
        activity: item.activity
      }
    });

    console.log(itemsShortData)
    return (
      <div className="chart-wrapper">
        <ResponsiveContainer width="100%" height={400}>
          <LineChart data={itemsShortData}>
            <Line type='monotone' dataKey='activity' stroke='#f00'/>
            <CartesianGrid stroke='#000' />
            <XAxis dataKey='datetime' />
            <YAxis />
          </LineChart>
        </ResponsiveContainer>
      </div>
    );
  }
};

Chart.propTypes = {
  items: PropTypes.array,
};

export default Chart;
