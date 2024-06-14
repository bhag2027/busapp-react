import axios from 'axios'
import React, { useState } from 'react'
import NavBar from './NavBar'

const AddBus = () => {

    const [data,changeData]=useState(
        
        {
            "bname":"",
            "route":"",
            "busNo":"",
            "dname":""
    
        }  
    
)

const inputHandler=(event)=>{
    changeData({...data,[event.target.name]:event.target.value})
}

const readValue=()=>{
    console.log(data)
    axios.post("http://localhost:8080/add",data).then(
        (response)=>{
            console.log(response.data)
            if (response.data.status=="success") {
                alert("successfully added")
                
            } else {
                alert("error")
                
            }
        }
    )
}
  return (
    <div>
        <NavBar/>
       <h1 align="center"><u>Add Buses</u></h1>
        <div className="container">
            <div className="row">
                <div className="col">
                    <div className="col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
                        <div className="row g-3">
                            <div className="col-12 col-sm-6 col-md-6 col-lg-6 col-xl-6 col-xxl-6">
                                <label htmlFor="" className="form-label">bname</label>
                                <input type="text" className="form-control" name='bname' value={data.bname} onChange={inputHandler} />
                            </div>

                            <div className="col-12 col-sm-6 col-md-6 col-lg-6 col-xl-6 col-xxl-6">
                                <label htmlFor="" className="form-label">route</label>
                                <input type="text" className="form-control" name='route' value={data.route} onChange={inputHandler} />
                            </div>
                            <div className="col-12 col-sm-6 col-md-6 col-lg-6 col-xl-6 col-xxl-6">
                                <label htmlFor="" className="form-label">busno</label>
                                <input type="text" className="form-control" name='busNo' value={data.busNo} onChange={inputHandler} />
                            </div>
                            <div className="col-12 col-sm-6 col-md-6 col-lg-6 col-xl-6 col-xxl-6">
                                <label htmlFor="" className="form-label">dname</label>
                                <input type="text" className="form-control" name='dname' value={data.dname} onChange={inputHandler} />
                            </div>
                            
                            <div className="col-12 col-sm-6 col-md-6 col-lg-6 col-xl-6 col-xxl-6">
                                <button className="btn btn-success" onClick={readValue}>submit</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div> 
    </div>
  )
}

export default AddBus