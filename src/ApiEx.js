
import React, { useEffect, useState } from 'react'

function Fetch() {
    const [records, setRecords] = useState([0])

    useEffect(()=>{
        fetch('https://jsonplaceholder.typicode.com/comments')
        .then(response => response.json())
        .then(data =>setRecords(data))
        .catch(err => console.log(err))
    },[])

    
  return (
    <div>
        
            {records.map((list, index)=>(
                <li key={index}>{list.id} | {list.name} | {list.email}</li>
            ))}
        
    </div>
  )
}

export default Fetch;