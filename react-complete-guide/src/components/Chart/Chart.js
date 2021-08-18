import React from 'react';
import { ChartBar } from './ChartBar/ChartBar';

import './Chart.css';

export const Chart = (props) => {
  const dataPointValues = props.dataPoints.map((dataPoint) => dataPoint.value);
  const totalMaximum = Math.max(...dataPointValues);

  return (
    <div className="chart">
      {props.dataPoints.map((dataPoint) => {
        return (
          <ChartBar
            value={dataPoint.value}
            maxValue={totalMaximum}
            label={dataPoint.label}
            key={dataPoint.label}
          />
        );
      })}
    </div>
  );
};
