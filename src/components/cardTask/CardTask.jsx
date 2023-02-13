import React from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { deltd, comptd } from '../../redux/action';
const mcolor = ['#4e0691', '#910664', '#910607', '#060f91', '#068f91','#06911f','#917a06','#636968','#8997e2','#ff5fa5'];

const CardTask = () => {
  const {todo,filter}=useSelector(state=>state)
  const dispatch=useDispatch()

  return (
    <div className='ttask'> 
          {
          filter 
          ?todo.filter((el)=> (el.comleated=== false)).map((el,index)=> 
          
            <div className="task" key={index} style={{backgroundColor: (index<10?mcolor[index]:mcolor[index%10]) }}>
              
              <span style={{textDecoration: el.comleated ?"line-through":""}}>{el.name} </span>
              <div className="butt">

                {/* <button onClick={()=>valid(el.id)}>{el.comleated ? "INCPOMPLITED" : "COMPLETED"}</button> */}
                <button onClick={()=>dispatch(comptd(el.id))} >{el.comleated ? "INCPOMPLITED" : "COMPLETED"}</button>
                <button onClick={()=>dispatch(deltd(el.id))} >DELETE</button>
              </div>

            </div>
            

          )
          :todo.map((el,index)=> 
          
          <div className="task" key={index} style={{backgroundColor: (index<10?mcolor[index]:mcolor[index%10]) }}>
            
            <span style={{textDecoration: el.comleated ?"line-through":""}}>{el.name} </span>
            <div className="butt">

              {/* <button onClick={()=>valid(el.id)}>{el.comleated ? "INCPOMPLITED" : "COMPLETED"}</button> */}
              <button onClick={()=>dispatch(comptd(el.id))} >{el.comleated ? "INCPOMPLITED" : "COMPLETED"}</button>
              <button onClick={()=>dispatch(deltd(el.id))} >DELETE</button>
            </div>

          </div>
          )
          }
</div>
  )
}

export default CardTask