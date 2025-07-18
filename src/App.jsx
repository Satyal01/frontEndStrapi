import React, { use } from 'react'
import { useEffect, useState } from 'react'
import HomePage from './HomePage';
import { Routes, Route } from 'react-router-dom';
import FormPage from './FormPage';


const App = () => {
    const [data, setData] = useState(null);


  useEffect(()=>{
    fetch("https://supreme-fellowship-a9b7703297.strapiapp.com/api/global").then((res)=> res.json())
    .then((data)=> setData(data.data))
    .catch(err => console.error("eror", err));
  },[]);
  return (
    <Routes>
      <Route  path="/" element={data ? <HomePage data={data} /> : <div>loading..</div> }/>
      <Route path='/connect' element={data ?  <FormPage data={data} />: <div>loading..</div>} />
    </Routes>
    
  )
}

export default App

// http://localhost:5173/