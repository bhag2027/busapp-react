import axios from 'axios'
import React, { useState } from 'react'
import { Link } from 'react-router-dom'

const AddUser = () => {

    const [data,changeData]=useState(
        
        [  {
            "name":"",
            "email":"",
            "mob":"",
            "gender":"",
            "password":"",
            "confirmpassword":""
        }
      ] 
      
  )
  
  const inputHandler=(event)=>{
    changeData({...data,[event.target.name]:event.target.value})
  }
  const readValue=()=>{
    console.log(data)
    if(data.password==data.confirmpassword){
    axios.post("http://localhost:8080/reg",data).then(
      (response)=>{
        console.log(response.data)
        if (response.data.status=="success") 
          {
            alert("successfull")
          
        } else {
          alert("error")
          
        }
      }
    )}else{
      alert("incorrect password")
    }
  }
  return (
    <div>
           <h1 align="center"><u>REGISTER</u></h1>
        <div className="container">
          <div className="row">
            <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
              <div className="row">
                <div className="col col-12 col-sm-6 col-md-6 col-lg-6 col-xl-6 col-xxl-6">
                  <label htmlFor="" className="form-label">Name</label>
                  <input type="text" className="form-control" name='name' value={data.name} onChange={inputHandler} />
                </div>
                
                <div className="col col-12 col-sm-6 col-md-6 col-lg-6 col-xl-6 col-xxl-6">
                <label htmlFor="" className="form-label">Email</label>
                <input type="text" className="form-control"  name='email' value={data.email} onChange={inputHandler}/>
                </div>
                <div className="col col-12 col-sm-6 col-md-6 col-lg-6 col-xl-6 col-xxl-6">
                <label htmlFor="" className="form-label">Mobile</label>
                <input type="text" className="form-control"  name='mob' value={data.mob} onChange={inputHandler}/>
                </div>
                <div className="col col-12 col-sm-6 col-md-6 col-lg-6 col-xl-6 col-xxl-6">
                <label htmlFor="" className="form-label">gender</label>
                <input type="text" className="form-control"  name='gender' value={data.gender} onChange={inputHandler}/>
                </div>
               
                <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
                <label htmlFor="" className="form-label">Password</label>
                <input type="password" className="form-control" name='password' value={data.password} onChange={inputHandler} />
                </div>
                <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
                <label htmlFor="" className="form-label">confirm Password</label>
                <input type="password" className="form-control" name='confirmpassword' value={data.confirmpassword} onChange={inputHandler} />
                </div>

                <div className="col col-12 col-sm-6 col-md-6 col-lg-6 col-xl-6 col-xxl-6">
                  <button className="btn btn-success" onClick={readValue}>Submit</button>
                </div>
                <p>Back to login page <Link to="/">Back</Link></p>
              </div>
            </div>
          </div>
        </div>
    </div>
  )
}

export default AddUser