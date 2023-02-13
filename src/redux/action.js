import { ADDTODO, COMPTODO, DELTODO, FILTERTODO, UPTODO } from "./actionType"

export const addtd=(task)=>{
  return{
    type:ADDTODO,
    payload:task
  }
}
export const uptd=()=>{
  return{
    type:UPTODO
  }
}
export const deltd=(taskId)=>{
  return{
    type:DELTODO,
    payload:taskId
  }
}
export const comptd=(taskId)=>{
  return{
    type:COMPTODO,
    payload:taskId
  }
}
export const filtertd=()=>{
  return{
    type:FILTERTODO
  }
}