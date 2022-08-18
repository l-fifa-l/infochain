import React from 'react';

// Line from react-chartjs-2 to create a line chart
import { Line } from 'react-chartjs-2';

// chart is require to make chart visible on the web page
import { Chart as ChartJS } from 'chart.js/auto';

// Chart component to create a line chart
function LineChart({ chartData }) {
  // chartData is the data that will be displayed on the chart
  return <Line data={chartData} />;
}

export default LineChart;
