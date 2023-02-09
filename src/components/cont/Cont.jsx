
import React, { useState } from 'react'
import Ajouter from '../ajouter/Ajouter'
import Task from '../task/Task'
import './Cont.css'


const todo=[{
  id:Math.random(),
  name:"Learn HTML",
  comleated:true
},
{
  id:Math.random(),
  name:"Learn css",
  comleated:true
},
{
  id:Math.random(),
  name:"Learn jsx",
  comleated:true
},
{
  id:Math.random(),
  name:"Learn React",
  comleated:false
}
]

const Cont = () => {
const [todos, setTodos] = useState(todo)

const supp=(idd)=>{
 setTodos(todos.filter(el=> el.id!==idd))
}
const valid=(idd)=>{
  setTodos(todos.map(el=>el.id===idd ?{...el,comleated: !el.comleated}:el))
 

  // this.setState(...todo ,{todo:[{comleated: !this.state.todo.comleated}]})
}
const ajouter=(inp)=>{
  setTodos([...todos,{id:Math.random(),name:inp.trim(),comleated:false}]  )
}



  return (
    <>
      <div className="back"></div>
      <div className='cont'>
        <h3>TODO APP</h3>
          <Ajouter ajouter={ajouter} />

        {/* <div className="task" key={index} style={{backgroundColor: this.collor() }}></div> */}
        
                <Task tab={todos} valid={valid} supp={supp} />
      </div>
    </>
  )
}

export default Cont