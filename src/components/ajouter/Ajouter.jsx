import React, { useRef, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { addtd, filtertd } from '../../redux/action'

const Ajouter = () => {
  const {todo}=useSelector(state=>state)
  const dispatch=useDispatch()
   const [inp, setInp] = useState("")
   const inputRef = useRef();
  
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
  
  // const handelAjouter=()=>{
  //   if(inp==="")
  //   alert("enter your value")
  //   else{  
  //     ajouter(inp)
      
  //   }
  // }
  
  const handelAjouter=(e)=>{
    e.preventDefault()
    dispatch(addtd(inp))
    // if(inp==="")
    // alert("enter your value")
    // else{  
    //   addtd(inp)
      
    // }
    console.log(inputRef.current.value);
    setInp("")
  }

  return (
    <>
    <div className="inpo">
      <center>
        
      <form action='' onSubmit={handelAjouter}>
          <div className="inp">
          {/* <input type="text" value={inp} onChange={handeltexte} className="searchInput" />
          <button onClick={()=>{handelAjouter();setInp("")}}>add</button> */}
          <input type="text" value={inp} onChange={handeltexte} className="searchInput"  ref={inputRef}/>
          <button type='submit'>add</button>
        </div>
      </form>
      <button onClick={()=>dispatch(filtertd())} >filter</button>
          </center>
    </div>
    </>

  )
}

export default Ajouter