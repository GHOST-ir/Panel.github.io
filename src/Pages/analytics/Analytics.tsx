import React from "react";
import IntroDivider from "../../Components/devider/Devider";  // corrected 'devider' to 'divider'
import './analytics.css'
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';
import { AnalysticChartData, RadarData , NextChartData} from '../../datas';
import { Radar, RadarChart, PolarGrid, PolarAngleAxis, PolarRadiusAxis } from 'recharts';
import { dataTable1 , dataTable2} from "../../datas";


const Analytics: React.FC = () => {
  return (
    <div className="Wrapper">
      <div className="DividerContainer">
        <IntroDivider />
      </div>

      <div className="ChartsContainer">
        <div className="ChartWrapper">
          <ResponsiveContainer width="100%" height={300}>
            <LineChart
              data={AnalysticChartData}
              margin={{ top: 5, right: 30, left: 20, bottom: 5 }}
            >
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis dataKey='name' />
              <YAxis />
              <Tooltip />
              <Legend />
              <Line type='monotone' dataKey='pv' stroke='#8884d8' activeDot={{ r: 8 }} />
              <Line type='monotone' dataKey='uv' stroke='#82ca9d' />
              <Line type='monotone' dataKey='ov' stroke="#d8cb84"></Line>
              <Line type='monotone' dataKey='iv' stroke="#84c6d8"></Line>
            </LineChart>
          </ResponsiveContainer>
        </div>
        <div className="RadarWrapper">
          <ResponsiveContainer width={'100%'} height={300}>
            <RadarChart cx='50%' cy='50%' outerRadius='80%' data={RadarData}>
              <PolarGrid />
              <PolarAngleAxis dataKey='subject' />
              <PolarRadiusAxis />
              <Radar name="Mike" dataKey='A' stroke="#8884d8" fill="#8884d8" fillOpacity={0.6} />
            </RadarChart>
          </ResponsiveContainer>
        </div>
      </div>
      
    </div>
  );
};

export default Analytics;