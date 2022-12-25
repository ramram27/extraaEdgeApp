import {
    Loadind_Data,
    Loadind_Success ,
    Loading_Error
  } from "../constant";
  
  export function fetchData() {
    return dispatch => {
      dispatch({ type: Loadind_Data });
      return fetch("https://jsonplaceholder.typicode.com/users")
        .then(response => response.json())
        .then(userData => {
          dispatch({
            type: Loadind_Success ,
            userData
          });
        })
        .catch(error => {
          dispatch({
            type: Loading_Error,
            error
          });
        });
    };
  }
  

// import { Loadind_Data, Loadind_Success, Loading_Error } from "./actionType";


// export function fetchData() {

//     return dispatch =>{

//         dispatch({type:Loadind_Data});
//         return fetch("https://jsonplaceholder.typicode.com/users")
//         .then((res => res.json()))
//         .then((userData =>{
//             dispatch({
//                 type:Loadind_Success,
//                 userData
//             })
//         }))
//         .catch((error =>{
//             dispatch({
//                 type:Loading_Error,
//                 error
//             })
//         }))
//     }
// }