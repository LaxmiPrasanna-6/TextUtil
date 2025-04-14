import React, { useState } from 'react';

function About() {
  const [mystyle,setMystyle]=useState({
    color:"white",
    background:"black"
  })
  const [btntext,setBtnText]=useState("Enable light mode")
  function togglestyle(){
    if(mystyle.color==='white'){
      setMystyle({
        color:"black",
    background:"white"
      })
      setBtnText("Enable dark mode");
    }else{
      setMystyle({
        color:"white",
    background:"black"

      })
      setBtnText("Enable light mode");

    }
  }
  return (
    <div  className="container" style={mystyle}>
      <h1 className='my-1'>About us</h1>
      <div className="accordion" id="accordionExample">
    <div className="accordion-item">
      <h2 className="accordion-header">
        <button className="accordion-button" style={mystyle} type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne" >
          Accordion Item #1
        </button>
      </h2>
      <div id="collapseOne" className="accordion-collapse collapse show" data-bs-parent="#accordionExample">
        <div className="accordion-body">
          <strong>This is the first item's accordion body.</strong> 
        </div>
      </div>
    </div>
    <div className="accordion-item">
      <h2 className="accordion-header">
        <button className="accordion-button collapsed" style={mystyle} type="button" data-bs-toggle="collapse" data-bs-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">
          Accordion Item #2
        </button>
      </h2>
      <div id="collapseTwo" className="accordion-collapse collapse" data-bs-parent="#accordionExample">
        <div className="accordion-body">
          <strong>This is the second item's accordion body.</strong> 
        </div>
      </div>
    </div>
    <div className="accordion-item">
      <h2 className="accordion-header">
        <button className="accordion-button collapsed" style={mystyle} type="button" data-bs-toggle="collapse" data-bs-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree">
          Accordion Item #3
        </button>
      </h2>
      <div id="collapseThree" className="accordion-collapse collapse" data-bs-parent="#accordionExample">
        <div className="accordion-body">
          <strong>This is the third item's accordion body.</strong> 
        </div>
      </div>
    </div>
  </div>
  <div className='container my-3'>
    <button className='btn btn-primary' onClick={togglestyle} > {btntext}</button>

  </div>

    </div>
  );
}

export default About;
