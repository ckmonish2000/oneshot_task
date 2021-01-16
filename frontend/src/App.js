import logo from './logo.svg';
import './App.css';
import {useState,useEffect} from "react"
import CollegeTable from "./components/Table"
import 'antd/dist/antd.css';
import { Doughnut,Bar,Line } from 'react-chartjs-2';

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
  // increment or set the property
  // `(obj[v.status] || 0)` returns the property value if defined
  // or 0 ( since `undefined` is a falsy value
  obj[v.state] = (obj[v.state] || 0) + 1;
  // return the updated object
  return obj;
  // set the initial value as an object
}, {})
var res2 = data?.reduce(function(obj, v) {
  // increment or set the property
  // `(obj[v.status] || 0)` returns the property value if defined
  // or 0 ( since `undefined` is a falsy value
  obj[v.courses] = (obj[v.courses] || 0) + 1;
  // return the updated object
  return obj;
  // set the initial value as an object
}, {})
setFrequency(res)
setCourses(res2)
    })
    .catch(err=>console.log(err))
  
 
 
  }, [])
  
  
  return (
    <div className="App">
 
 <div style={{display:"flex",justifyContent:"center",height:"300pt"}}>
   
  <div style={{margin:"45pt",boxShadow: "3px 3px 5px 6px #ccc",borderRadius:"7pt",padding:"5pt",width:"40%",justifyContent:"center"}}>
    
    <Doughnut   
     data={{
       labels:Object.keys(Frequency),
       datasets: [{
         label: 'Colleges Based On State',
         data:Object.values(Frequency),
         backgroundColor: [
             'rgba(255, 99, 132, 0.2)',
             'rgba(54, 162, 235, 0.2)',
             'rgba(255, 206, 86, 0.2)',
             'rgba(75, 192, 192, 0.2)',
             'rgba(153, 102, 255, 0.2)',
             'rgba(255, 159, 64, 0.2)'
         ]}]
     }}
     options={{ maintainAspectRatio: false }}
     />
   </div>

   
  <div style={{margin:"45pt",boxShadow: "3px 3px 5px 6px #ccc",borderRadius:"7pt",padding:"5pt",width:"40%",justifyContent:"center"}}>
    
    <Line 
     data={{
       labels:Object.keys(Courses),
       datasets: [{
         label: 'Colleges Based On State',
         data:Object.values(Courses),
         backgroundColor: [
             'rgba(255, 99, 132, 0.2)',
             'rgba(54, 162, 235, 0.2)',
             'rgba(255, 206, 86, 0.2)',
             'rgba(75, 192, 192, 0.2)',
             'rgba(153, 102, 255, 0.2)',
             'rgba(255, 159, 64, 0.2)'
         ]}]
     }}
     options={{ maintainAspectRatio: false }}
     />
   </div>
 </div>

  <CollegeTable data={data}/>
    </div>
  );
}

export default App;
