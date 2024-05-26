import React from 'react';
import { useLoaderData } from 'react-router-dom';

const App = () => {
  const data = useLoaderData();
  console.log(data)
  return (
    <div>
      <h1>Add Coffe :</h1>
      {
        data.map(d =><p key={d._id}>{d.name}</p>)
      }
    </div>
  );
};

export default App;