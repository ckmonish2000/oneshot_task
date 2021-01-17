import React,{useState} from 'react'
import {Input,Button,Tooltip} from "antd"
import { SearchOutlined } from '@ant-design/icons';
import {field} from "../createCollege/styles"
import {root} from "./styles"
export default function Getcollege(props) {
    
    // event Handlers and states
    const [SearchVal, setSearchVal] = useState("")

    const GoBack=()=>{props.history.goBack()}

    const OnClick=()=>{ console.log("test") }

    const OnChange=(e)=>setSearchVal(e.target.value.toLowerCase())
   
    // components
    const Back=()=>{
      return(  <div style={{display:"flex",margin:10}}>
      <button
      className="btn" 
      onClick={GoBack}
       style={{background:"none",border:"none",outline:"none"}}
       ><img src="https://img.icons8.com/carbon-copy/2x/back.png" style={{width:"30pt",margin:"10pt"}}/></button>
        <h1 style={{margin:"10pt",opacity:0.9}}>Go Back</h1>
      </div>)
    }

    return (
        <div>
           <Back/>
            <div style={root}>
            <Input style={field} placeholder="Enter College Name" onChange={OnChange}/>
            <Tooltip title="search">
            <Button type="primary" shape="circle" icon={<SearchOutlined />} onClick={OnClick} />
            </Tooltip>
            </div>
        </div>
    )
}
