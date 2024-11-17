import React from 'react';
import { LineChart, Line, CartesianGrid, XAxis, YAxis, Tooltip } from 'recharts';

const Chart = ({ data }) => (
    <LineChart width={500} height={300} data={data}>
        <Line type="monotone" dataKey="speed" stroke="#8884d8" />
        <CartesianGrid stroke="#ccc" />
        <XAxis dataKey="time" />
        <YAxis />
        <Tooltip />
    </LineChart>
);

export default Chart;
