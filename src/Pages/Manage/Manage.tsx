import React from 'react';
import { Line } from 'react-chartjs-2';
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
} from 'chart.js';
import './Panel.css'
import { IoPerson } from "react-icons/io5";

ChartJS.register(CategoryScale, LinearScale, PointElement, LineElement, Title, Tooltip, Legend);

const Manage: React.FC = () => {
  const performanceData = {
    labels: ['June', 'July', 'August', 'September', 'October', 'November'],
    datasets: [
      {
        label: 'Performance',
        data: [65, 59, 80, 81, 56, 55],
        borderColor: '#3b82f6',
        backgroundColor: 'rgba(59, 130, 246, 0.2)',
        fill: true,
        tension: 0.4,
        pointBackgroundColor: '#3b82f6',
      },
    ],
  };

  const projectsData = {
    labels: ['Project 1', 'Project 2', 'Project 3', 'Project 4', 'Project 5'],
    datasets: [
      {
        label: 'Number of Projects',
        data: [12, 19, 3, 5, 2],
        backgroundColor: '#10b981',
      },
    ],
  };

  return (
    <div className="bg-gray-100 p-6 font-sans WrapperManage">
      <header className="flex justify-between items-center mb-8">
        <h1 className="text-3xl font-bold text-gray-800">Manage</h1>
      </header>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
        <div className="bg-white rounded-lg shadow p-6">
          <h3 className="text-xl font-semibold mb-4">Performance Chart</h3>
          <Line data={performanceData} className="h-64" />
        </div>
        <div className="bg-white rounded-lg shadow p-6">
          <h3 className="text-xl font-semibold mb-4">Projects Count</h3>
          <Line data={projectsData} className="h-64" />
        </div>
      </div>

      <div className="bg-white rounded-lg shadow p-6 float">
        <h3 className="text-xl font-semibold mb-4">News & Announcements</h3>
        <ul className="list-disc list-inside text-gray-700 space-y-2">
          <li>Project growth this month</li>
          <li>Planning session tomorrow</li>
          <li>User surveys</li>
        </ul>
      </div>
    </div>
  );
};

export default Manage;