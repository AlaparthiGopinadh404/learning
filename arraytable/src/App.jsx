import React from 'react';
import './App.css';
import { useState } from 'react';
import Array from './Array';



function App() {

var [keys,setKeys] = React.useState(0)
var [array,setArray] = React.useState([
    {
            "name": "gopi",
            "age": 36,
            "gender": "male",
            "city": "Hyd",
            "salary": 10000
        },
        {
            "name": "srikanth",
            "age": 32,
            "gender": "male",
            "city": "Bangaluru",
            "salary": 20000
        },
  
        {
            "name": "pradeep", 
            "age": 21,
            "gender": "male",
            "city": "Hyd",
            "salary": 20000
        },
        
        {
            "name": "mounika",
            "age": 20,
            "gender": "female",
            "city": "Nalgonda",
            "salary": 30000
        },
        {
            "name": "nikhil",
            "age": 22,
            "gender": "male",
            "city": "Guntur",
            "salary": 20000
        },
        {
            "name": "riya",
            "age": 14,
            "gender": "female",
            "city": "Indore",
            "salary": 40000
        },
    ]);
  //  function abc(i){
  //      setKeys(1)
    
  //  }
  function xyz(i){
    
    

  }

  return (
    <div>
    
      <table className='table table-striped'>
        <thead>
        <th>s.no</th>
        <th>name</th>
        <th>age</th>
        <th>gender</th>
        <th>city</th>
        <th>salary</th>
        </thead>
        <tbody>
        {
      array.map((a,i)=>{
        
          return <Array a={a} i={i} xyz={xyz} key ={i}></Array>
        
       
        
      })
     }
        </tbody>
       
      </table>
     
    </div>
  
  );
}

export default App;
