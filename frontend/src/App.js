import logo from './logo.svg';
import './App.css';
import {useState,useEffect} from "react"
import {  Table, Tag, Space  } from "antd"
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
  




 
const { Column, ColumnGroup } = Table;
  return (
    <div className="App">
   

   <Table dataSource={data} style={{margin:"50pt",boxShadow: "3px 3px 5px 6px #ccc",borderRadius:"7pt",padding:"5pt"}}>
       <Column title="College Name" dataIndex="name"/>
       <Column title="Year founded" dataIndex="yearFounded"/>
        <Column title="Student Strength" dataIndex="No_Of_Students" />
      <Column title="Country" dataIndex="country" />
      <Column title="State" dataIndex="state" />
       <Column title="City" dataIndex="city" />
    <Column
      title="Courses Offered"
      dataIndex="courses"
      key="tags"
      render={tags => (
        <>
          {tags.map(tag => (
            <Tag color="blue" key={tag}>
              {tag}
            </Tag>
          ))}
        </>
      )}
    />
     
      
   
   
  </Table>
    </div>
  );
}

export default App;
