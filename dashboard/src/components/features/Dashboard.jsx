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

const Dashboard = () => {
  const data = {
    labels: ['Jan', 'Feb', 'Mar', 'Apr'],
    datasets: [
      {
        label: 'Users',
        data: [100, 200, 150, 300],
        fill: false,
        borderColor: '#3B82F6',
        backgroundColor: '#3B82F6',
        tension: 0.4
      }
    ]
  };

  const options = {
    responsive: true,
    plugins: {
      legend: {
        position: 'top',
        labels: {
          color: '#1D4ED8',
          font: {
            size: 14,
            weight: 'bold'
          }
        }
      },
      title: {
        display: true,
        text: 'User Growth Over Months',
        color: '#1E3A8A',
        font: {
          size: 18,
          weight: 'bold'
        }
      }
    },
    scales: {
      x: {
        ticks: { color: '#6B7280' },
        grid: { color: '#E5E7EB' }
      },
      y: {
        ticks: { color: '#6B7280' },
        grid: { color: '#E5E7EB' }
      }
    }
  };

  return (
    <div className="max-w-7xl mx-auto px-4">
      <h2 className="text-4xl font-extrabold text-blue-600 dark:text-blue-400 mb-6 text-left">
        📊 Dashboard
      </h2>
      <Line data={data} options={options} />
    </div>
  );
};

export default Dashboard;