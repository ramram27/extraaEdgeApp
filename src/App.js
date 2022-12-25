// import React,{useState,useEffect} from 'react'
// import Home from './components/Home';

//  const App = () => {
//   const [data,setdata] = useState([]);

//   useEffect(() =>{

//       const fetchfun = async() =>{

//         await fetch("https://jsonplaceholder.typicode.com/users")
//         .then((res =>  res.json()))
//         .then((res) => setdata(res))
//         .catch((error => console.log(error)))
//       }
//       fetchfun();

//   },[])
//   //console.log("data",data[0].company.name);
//   //Each user's profile contains an avatar picture, name, email, phone, address, website and company name.
//   return (
//    <>
//      <div>
//        {
//         data.map((val,idx) =>{
//           console.log("val=",val)
//           return(
//             <Home  name={val.name} email={val.email} username={val.username}
//             />
//           )
//         })
//        }
//        hello
//      </div>
//    </>
//   )
// }

// export default App
