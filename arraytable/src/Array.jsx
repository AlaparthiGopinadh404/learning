import React from 'react';

function Array({a,i,xyz}) {
   const [editflag,setEditflag] = React.useState(true) 
  return (
    

    
     <tr>
        <td>{i+1}</td>
         <td>{a.name}</td>
         <td>{a.age}</td>
          <td>{a.gender}</td>
          <td>{a.city}</td>
           
          {
            editflag?<td>{a.salary}</td>:<input type="text" />
          }
         
          
          <button className='btn' onClick={()=>{
            setEditflag(!editflag)
          }}>Edit</button>
          <button className='btn' onClick={()=>{xyz(i)}}>Delete</button>

        </tr>
        
    
  );
}

export default Array ;