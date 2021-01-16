import logo from './logo.svg';
import './App.css';
import {useState,useEffect} from "react"
import CollegeTable from "./components/Table/Table"
import 'antd/dist/antd.css';
import { Doughnut,Bar,Line } from 'react-chartjs-2';
import StateChart from './components/charts/StateChart';
import CoursesChart from './components/charts/CoursesChart';

function App() {
  const [data, setdata] = useState([])

  const [Frequency, setFrequency] = useState({})
  const [Courses, setCourses] = useState({})
  
  
  useEffect(() => {
   
    fetch("http://localhost:5000/college")
    .then(data=>data.json())
    .then(data=>{
      setdata(data)
       
 var res = data?.reduce(function(obj, v) {
  obj[v.state] = (obj[v.state] || 0) + 1;
  return obj;
}, {})

var res2 = data?.reduce(function(obj, v) {
  obj[v.courses] = (obj[v.courses] || 0) + 1;
  return obj;
}, {})
setFrequency(res)
setCourses(res2)
    })
    .catch(err=>console.log(err))
  
 
 
  }, [])
  
  
  return (
    <div className="App">
 
 <div style={{display:"flex",justifyContent:"center",height:"300pt"}}>
 <StateChart Frequency={Frequency}/>
 <CoursesChart Courses={Courses}/>
 </div>
 
  <CollegeTable data={data}/>
  
    </div>
  );
}

export default App;
