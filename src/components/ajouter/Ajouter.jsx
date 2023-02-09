import React, { useState } from 'react'

const Ajouter = ({ajouter}) => {
  const [inp, setInp] = useState("")
  
  const handeltexte=(e)=>{
    // console.log(e)
    setInp(e.target.value)
  }
  
  // ajouter=(e)=>{
  //   if(this.state.inp==="")
  //   alert("enter your value")
  //   else{  
  //     this.setState({todo: [...this.state.todo ,{id:Math.random(),name:this.state.inp,comleated:false} ] } )
      
  //   }
  // }
  
  const handelAjouter=()=>{
    if(inp==="")
    alert("enter your value")
    else{  
      ajouter(inp)
      
    }
  }

  return (
    <div className="inp">
        <input type="text" value={inp} onChange={handeltexte} className="searchInput" />
        <button onClick={()=>{handelAjouter();setInp("")}}>add</button>
      </div>
  )
}

export default Ajouter