import logo from './logo.svg';
import './App.css';
import {useState,useEffect} from "react"
import {  Table, Tag, Space  } from "antd"
import 'antd/dist/antd.css';

function App() {
  const [data, setdata] = useState([])
  const [start, setstart] = useState(true)
  
  useEffect(() => {
    if(start){
    fetch("http://localhost:5000/college")
    .then(data=>data.json())
    .then(data=>setdata(data))
    .catch(err=>console.log(err))
    setstart(!start)
    console.log(data)
    }
  }, [])
  console.log(data)
  




 
const { Column, ColumnGroup } = Table;
  return (
    <div className="App">
   <Table dataSource={data}>
       <Column title="College Name" dataIndex="name"/>
       <Column title="Year founded" dataIndex="yearFounded"/>
      <Column title="Country" dataIndex="country" />
      <Column title="State" dataIndex="state" />
       <Column title="City" dataIndex="city" />
       <Column title="Student Strength" dataIndex="No_Of_Students" />
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
