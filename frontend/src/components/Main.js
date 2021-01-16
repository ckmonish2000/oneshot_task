import {useState,useEffect} from "react"
import CollegeTable from "./Table/Table"
import 'antd/dist/antd.css';
import { Doughnut,Bar,Line } from 'react-chartjs-2';
import StateChart from './charts/StateChart';
import CoursesChart from './charts/CoursesChart';
import { Drawer} from "antd"
import "./btn.css"
import "../App.css"
function App(props) {
  const [data, setdata] = useState([])

  const [Frequency, setFrequency] = useState({})
  const [Courses, setCourses] = useState({})
  
  
  useEffect(() => {
    //    fetching all the data
    fetch("http://localhost:5000/college")
    .then(data=>data.json())
    .then(data=>{
      setdata(data)
    //  filtering data related to states
    var res = data?.reduce(function(obj, v) {
    obj[v.state] = (obj[v.state] || 0) + 1;
    return obj;
    }, {})
    //  filtering data related to courses
    var res2 = data?.reduce(function(obj, v) {
    obj[v.courses] = (obj[v.courses] || 0) + 1;
    return obj;
    }, {})

    setFrequency(res)
    setCourses(res2)
    })
    .catch(err=>console.log(err))
 
  }, [])

  const [visible, setvisible] = useState(false)
  const onClose=()=>setvisible(false)
  const open=()=>setvisible(true)
  return (
    <div className="App">
 <div>
    <div style={{display:"flex",margin:10}}>
    <button onClick={open} 
    className="btn"
     style={{background:"none",border:"none",outline:"none"}}
     ><img src="https://img.icons8.com/cotton/2x/menu.png" style={{width:"30pt",margin:"10pt"}}/></button>
     <h1 style={{margin:"10pt",opacity:0.9}}>DashBoard</h1>
    </div>
 <Drawer
          title="App Drawer"
          placement="left"
          closable={false}
          onClose={onClose}
          visible={visible}
          
        >
        <a onClick={()=>{props.history.push("/createcollege")}}> Create College</a>
        </Drawer>
 </div>
 <div style={{display:"flex",justifyContent:"center",height:"300pt"}}>
 <StateChart Frequency={Frequency}/>
 <CoursesChart Courses={Courses}/>
 </div>
 
  <CollegeTable data={data}/>
  
    </div>
  );
}

export default App;
