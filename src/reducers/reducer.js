import {
    Loadind_Data,
    Loadind_Success ,
    Loading_Error
  } from "../constant";
  
  const initialState = {
    loading: false,
    data: [],
    error: null
  };
  
  export default function(state = initialState, action) {
    switch (action.type) {
      case Loadind_Data:
        return { ...state, loading: true };
      case Loadind_Success :
        return {
          ...state,
          data: action.userData,
          loading: false
        };
      case Loading_Error:
        return {
          ...state,
          error: action.error,
          loading: false
        };
      default:
        return state;
    }
  }
  

// import {Loadind_Data,Loadind_Success,Loading_Error} from "../actions/actionType";

// const intialState = {
//     loading:false,
//     data:[],
//     error:null
// }

// export default function(state = intialState, action) {

//     switch(action.type) {

//         case Loadind_Data :
//              return {...state, loadin : true}

//         case Loadind_Success : 
//              return {
//                 ...state,
//                 data : action.userData,
//                 loadin : false
//              }
//         case Loading_Error : 
//             return {
//                 ...state,
//                 error : action.error,
//                 loadin : false
//             }
//         default :
//            return state
//     }
// }