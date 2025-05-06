import React, { useState } from 'react';
import { BarChart, Bar, XAxis, YAxis, Tooltip } from 'recharts';

const question = 'Do you like working with SAP?';
const options = ['Yes', 'No'];
type Votes = { name: string; votes: number; };

function App() {
  const [data, setData] = useState<Votes[]>([
    { name: 'Yes', votes: 0 },
    { name: 'No', votes: 0 }
  ]);

  const vote = (idx: number) => {
    const newData = [...data];
    newData[idx].votes += 1;
    setData(newData);
  };

  return (
    <div style={{ textAlign: 'center', marginTop: 40 }}>
      <h2>{question}</h2>
      {data.map((d, i) => (
        <button key={d.name} onClick={() => vote(i)} style={{ margin: 10 }}>
          {d.name}
        </button>
      ))}
      <BarChart width={300} height={200} data={data}>
        <XAxis dataKey="name" />
        <YAxis />
        <Tooltip />
        <Bar dataKey="votes" fill="#8884d8" />
      </BarChart>
    </div>
  );
}

export default App;
