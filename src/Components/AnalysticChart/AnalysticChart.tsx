import React from 'react'
import { AnalysticChartData } from '../../datas'
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';

export default function AnalysticChart() {

    return (
        <ResponsiveContainer width={'100%'} height={300}>
            <LineChart
                width={500}
                height={300}
                data={AnalysticChartData}
                margin={{top:5 , right:30 , left:20 , bottom:5}}
            >
                <CartesianGrid strokeDasharray='3 3'>
                    <XAxis dataKey='name' />
                    <YAxis />
                    <Tooltip />
                    <Legend />
                    <Line type='monotone' dataKey='pv' stroke='#8884d8' activeDot={{r:8}} />
                    <Line type='monotone' dataKey='uv' stroke='#82ca9d'/>
                </CartesianGrid>
            </LineChart>
        </ResponsiveContainer>
    )
}
