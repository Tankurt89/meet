import React, { useEffect, useState, useRef } from "react";
import { PieChart, Pie, Cell, ResponsiveContainer } from "recharts";

const colors = ["#8F8CF2", "#EAA221", "#65B8BF", "#e642f5", "#1e7033"];
const genres = ["React", "JavaScript", "Node", "jQuery", "AngularJS"];

const EventGenresChart = ({ events }) => {
  const [data, setData] = useState([]);
  const outerRadius = useRef(80);

  useEffect(() => {
    setData(getData());
}, [`${events}`])

const getData = () => {
    const data = genres.map((genre) => {
        const value = events.filter(({ summary }) =>
          summary.split(" ").includes(genre)
        ).length;

        return { name: genre, value };
      });
      return data.filter((entry) => entry.value > 0);
};

const renderCustomizedLabel = ({ cx, cy, midAngle, outerRadius, percent, index }) => {
    const RADIAN = Math.PI / 180;
    const radius = outerRadius;
    const x = cx + radius * Math.cos(-midAngle * RADIAN) * 1.07;
    const y = cy + radius * Math.sin(-midAngle * RADIAN) * 1.07;
    return percent ? (
      <text
        x={x}
        y={y}
        fill="#8884d8"
        textAnchor={x > cx ? 'start' : 'end'}
        dominantBaseline="central"
      >
        {`${genres[index]} ${(percent * 100).toFixed(0)}%`}
      </text>
    ) : null;
  };
  
  return (
    <ResponsiveContainer height={400}>
      <PieChart key={data}>
        <Pie
          data={data}
          labelLine={false}
          outerRadius={150}
          dataKey="value"
          label={renderCustomizedLabel}
        >
          {data.map((_entry, index) => (
            <Cell key={`cell-S${index}`} fill={colors[index]} />
          ))}
        </Pie>
      </PieChart>
    </ResponsiveContainer>
  );
};

export default EventGenresChart;