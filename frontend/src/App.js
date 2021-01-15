import logo from './logo.svg';
import './App.css';
import {useState,useEffect} from "react"
import CollegeTable from "./components/Table"
import 'antd/dist/antd.css';
import { Doughnut,Bar } from 'chart.js';

function App() {
  const [data, setdata] = useState([])
 
  
  useEffect(() => {
   
    fetch("http://localhost:5000/college")
    .then(data=>data.json())
    .then(data=>setdata(data))
    .catch(err=>console.log(err))
  
    console.log(data)
  
  }, [])
  console.log(data)
  




 

  return (
    <div className="App">
   <CollegeTable data={data}/>

    </div>
  );
}

export default App;
