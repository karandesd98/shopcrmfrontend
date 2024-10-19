
import { Bar } from 'react-chartjs-2';
import { Chart as ChartJS, CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend } from 'chart.js';

// Register the required components for the bar chart
ChartJS.register(
  CategoryScale,  // for the x-axis (categories like months)
  LinearScale,    // for the y-axis (linear scale for sales values)
  BarElement,     // for the bars themselves
  Title,          // to show a title
  Tooltip,        // for tooltips when hovering over bars
  Legend          // for the legend at the top
);

const AdminDashBoard = () => {

  const salesData = {
    labels: ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'],
    datasets: [
      {
        label: 'Sales',
        data: [5000, 7000, 8000, 6000, 9000, 11000, 9500, 12000, 13000, 11000, 9500, 14000], // Monthly sales data
        backgroundColor: 'rgba(75, 192, 192, 0.6)', // Bar color
        borderColor: 'rgba(75, 192, 192, 1)', // Border color
        borderWidth: 1, // Border thickness
      },
    ],
  };


  // Chart configuration
  const options = {
    responsive: true,
    plugins: {
      legend: {
        position: 'top', // Position of the legend
      },
      title: {
        display: true,
        text: 'Month-wise Sales Data', // Title of the chart
      },
    },
    scales: {
      y: {
        beginAtZero: true, // Ensure the y-axis starts at 0
      },
    },
  };


  return (
    <>
      <div className='d-flex justify-content-center' style={  {height: '90vh', width: '90vw' }}>
        <Bar data={salesData} options={options} />
      </div>
    </>
  );
}
export default AdminDashBoard;