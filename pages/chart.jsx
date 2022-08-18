import { useState } from 'react';
import Layout from '../components/Layout';
import LineChart from '../components/ChartCompoonent';
import axios from 'axios';

function Chart({ data }) {
  // chartData is a state that will be used to display the chart
  // setChartData is a function that will be used to display the chart
  // chartData is an array that will be used to display the chart
  const [chartData, setChartData] = useState({
    // labels is an array that will be used to display the chart on y axis
    labels: data.values.map((datum) => datum.y),
    // datasets is an array that will be used to display the chart on x axis
    datasets: [
      {
        label: data.unit,
        data: data.values.map((datum) => datum.x),
        backgroundColor: ['rgba(75,192,192,1)'],
        borderColor: 'black',
        borderWidth: 2,
      },
    ],
  });

  // will render the chart
  return (
    <Layout>
      <div className="flex-1 items-center">
        <LineChart chartData={chartData} />
      </div>
    </Layout>
  );
}

export default Chart;

// getInitialProps is a function that will be used to get the data that will be displayed on the chart
// from the API
// and data will be passed to the component as props
export async function getStaticProps() {
  const { data } = await axios.get(
    'https://api.blockchain.info/charts/transactions-per-second?timespan=5weeks&rollingAverage=8hours&format=json'
  );

  return {
    props: {
      data: data,
    },
  };
}
