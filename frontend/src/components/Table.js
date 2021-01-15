import React from 'react'
import {  Table, Tag, Space  } from "antd"


export default function CollegeTable({data}) {
    const { Column, ColumnGroup } = Table;
    return (
        <div>
            
   <Table dataSource={data} style={{margin:"50pt",boxShadow: "3px 3px 5px 6px #ccc",borderRadius:"7pt",padding:"5pt"}} 
    title={()=><h1 style={{textAlign:"left"}}>List Of Colleges</h1>}
    pagination={{pageSize:3}}
   loading={data.length===0?true:false}> 
   
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
    )
}
