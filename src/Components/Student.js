import React, { useState } from 'react'

const Student = () => {
var [name,setName]=useState("Rahul r")
var [Age,setAge]=useState("32")
var [college,setCollege]=useState("MZC")
const changeName=()=>{
    setName(
        name="Ammu"
    )
    setAge(
        Age="23"
        )
    setCollege(
        college="tvm"
        )
    
}
  return (
    <div>

<div className="comtainer">
    <div className="row">
        <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
            <div className="row">
                <div className="col col-12 col-sm-6 col-md-6 col-lg-6 col-xl-6 col-xxl-6">
                    <label for="" className="form-label">Name</label>
                    <label for="" className="form-label">{name}</label>
                    
                 </div>
                <div className="col col-12 col-sm-6 col-md-6 col-lg-6 col-xl-6 col-xxl-6">
                    <label for="" className="form-label">Age</label>
                    <label for="" className="form-label">{Age}</label>
                     </div>
               
               
                <div className="col col-12 col-sm-6 col-md-6 col-lg-6 col-xl-6 col-xxl-6">
                    <label for="" className="form-label">College</label>
                    <label for="" className="form-label">{college}</label>
                </div>
                
                <div className="col col-12 col-sm-6 col-md-6 col-lg-6 col-xl-6 col-xxl-6">
                    <button onClick={changeName} className="btn btn-success">CHANGE</button>
                </div>
            </div>
        </div>
    </div>
</div>
     
    </div>
  )
}

export default Student