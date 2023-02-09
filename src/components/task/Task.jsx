
import React from 'react'
import CardTask from '../cardTask/CardTask'
const Task = ({tab ,valid,supp}) => {
  return (
    <div className='ttask'>
         <CardTask tab={tab} valid={valid} supp={supp} />
    </div> 
  )
}

export default Task