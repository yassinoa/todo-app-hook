import { ADDTODO, COMPTODO, DELTODO, FILTERTODO, UPTODO } from "./actionType";

const init={
  todo:[{
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
          name:"Learn javaScript",
          comleated:true
        },
        {
          id:Math.random(),
          name:"Learn React",
          comleated:false
        }
      ],
      filter:false
      
}

export const reducer=(state=init,{type,payload})=>{
  switch (type) {
    case ADDTODO:return{...state,todo:[...state.todo ,{ id:Math.random(),name:payload, comleated:false} ]}
    case UPTODO:return{}
    case DELTODO:return{...state,todo: state.todo.filter(el=>el.id!==payload) }
    case COMPTODO:return{...state,todo:state.todo.map(el=>el.id===payload?{...el ,comleated: !el.comleated} :el)}
    case FILTERTODO:return{...state,filter: !state.filter}
    default:return state
  }
}