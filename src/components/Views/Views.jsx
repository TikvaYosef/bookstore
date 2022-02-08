// import React, { useState, useEffect, useContext } from "react";
// // import { useState } from "react";
// import { commentcontext } from '../MyContext/MyContext';



// export const Views = () => {

//     const [views, setviews] = useState(0);
//     useEffect(() => { alert("welcome") }, []);
//     useEffect(() => { console.log("update") }, [views]);
//     const [user, setuser] = useState(" ");
//     useEffect(() => { setuser(prompt("enter name")), alert(`welcome ${user}`) }, []);

//     const valuecontext = useContext(commentcontext);
//     console.log(valuecontext)

//     const ViewUp = () => {
//         setviews(views + 1)
//     }
//     const ViewDown = () => {
//         setviews(views - 1)
//     }
//     const ViewsReset = () => {
//         setviews(0)
//     }


//     return (

//         <div>
//             <h1>{views}</h1>
//             {/* <h1>{user}</h1> */}
//             <button onClick={ViewUp}>UP</button>
//             <button onClick={ViewDown}>DOWN</button>
//             <button onClick={ViewsReset}>RESET</button>

//             {
//                 valuecontext.map((item) => {
//                     const { text } = item
//                     return <p>{user} {text} {views}</p>
//                 })
//             }


//         </div>
//     )
// }
