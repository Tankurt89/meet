import React, { useEffect, useState, useRef } from "react";
import { PieChart, Pie, Cell, ResponsiveContainer } from "recharts";

const colors = ["#A653F5", "#8F8CF2", "#65B8BF", "#F96CFF", "#FA92FB"];
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

  return (
    <ResponsiveContainer height={400}>
      <PieChart key={data}>
        <Pie
          data={data}
          labelLine={false}
          outerRadius={outerRadius.current}
          dataKey="value"
          label={({ name, percent }) =>
            `${name} ${(percent * 100).toFixed(0)}%`
          }
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