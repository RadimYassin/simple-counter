import { BUY_CAKE } from "./cakes/caketypes";

const initialStat={
    num:10
}
const cakereducer=(state=initialStat,action)=>{
switch (action.type) {
    case BUY_CAKE:
        
       return {...state,num:state.num -1}
    default: return state
        
}
}


export default cakereducer