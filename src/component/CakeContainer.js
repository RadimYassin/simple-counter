import React from 'react'
import { connect } from 'react-redux'
import {buyCake} from '../redux'

function CakeContainer(props) {
  return (
    <div>
      <h2 >number of cake : {props.num} </h2>
      <button onClick={props.buyCake}>bay Cake </button>
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
    buyCake:()=>dispatch(buyCake())
  }
}

export default connect( mapStateToProps,mapDispatchToProps) (CakeContainer)

