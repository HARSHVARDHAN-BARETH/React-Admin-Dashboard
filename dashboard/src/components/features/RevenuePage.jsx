import { Line } from 'react-chartjs-2';
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend
} from 'chart.js';

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend
);

const RevenuePage = () => {
  const chartData = {
    labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun'],
    datasets: [
      {
        label: 'Revenue',
        data: [4000, 5000, 7000, 6000, 8500, 9500],
        borderColor: '#16A34A',
        backgroundColor: 'rgba(34,197,94,0.2)',
        tension: 0.4,
        fill: true
      }
    ]
  };

  const chartOptions = {
    responsive: true,
    plugins: {
      legend: {
        position: 'top',
        labels: { color: '#1E3A8A', font: { size: 14, weight: 'bold' } }
      },
      title: {
        display: true,
        text: 'Monthly Revenue (USD)',
        color: '#1E3A8A',
        font: { size: 18, weight: 'bold' }
      }
    },
    scales: {
      x: {
        ticks: { color: '#4B5563' },
        grid: { color: '#E5E7EB' }
      },
      y: {
        ticks: { color: '#4B5563' },
        grid: { color: '#E5E7EB' }
      }
    }
  };

  return (
    <div className="min-h-screen p-6 bg-gray-100 dark:bg-gray-900 overflow-hidden">
      <h1 className="text-4xl font-bold text-blue-700 dark:text-blue-400 mb-8 text-center">
        💰 Revenue Overview
      </h1>

       <img
    src="https://png.pngtree.com/png-clipart/20230820/original/pngtree-revenue-flat-vector-illustration-picture-image_8107102.png"
    alt="Revenue Illustration"
    className="w-40 md:w-52 mx-auto mb-4"
  />



      {/* Top Summary Cards */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-10">
        <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow text-center">
          <p className="text-sm text-gray-500 dark:text-gray-400">Total Revenue</p>
          <h2 className="text-2xl font-bold text-green-600">$45,000</h2>
        </div>
        <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow text-center">
          <p className="text-sm text-gray-500 dark:text-gray-400">This Month</p>
          <h2 className="text-2xl font-bold text-blue-600">$9,500</h2>
        </div>
        <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow text-center">
          <p className="text-sm text-gray-500 dark:text-gray-400">Growth</p>
          <h2 className="text-2xl font-bold text-purple-600">+18.5%</h2>
        </div>
      </div>

      {/* Chart Section */}
      <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow">
        <Line data={chartData} options={chartOptions} />
      </div>
    </div>
  );
};

export default RevenuePage;