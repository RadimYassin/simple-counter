import React, { useState } from 'react'
import { connect } from 'react-redux'
import {buyCake} from '../redux'

function NewConTainer(props) {

    const [number,setNumber]=useState(1)
  return (
    <div>
      <h2 >number of cake : {props.num} </h2>
      <input type={'text'}  value={number} onChange={(e)=>setNumber(e.target.value)} />
      <button onClick={()=>props.buyCake(number)}>bay Cake </button>
    </div>
  )
}


const mapStateToProps=state=>{
  return{
    num:state.num 
  }
}
const mapDispatchToProps=dispatch=>{
  return {
    buyCake:number=>dispatch(buyCake(number))
  }
}

export default connect( mapStateToProps,mapDispatchToProps) (NewConTainer)
