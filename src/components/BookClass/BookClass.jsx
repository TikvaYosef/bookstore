// import React from "react";
// import Gener from "../Genre/Genre";
// import Country from "../Country/Country";
// import { MyContext } from '../Context/MyContext';




// class BookClass extends React.Component {

//     constructor(props) {
//         super(props);
//         this.state = { input: " " };
//         this.TextInput = this.TextInput.bind(this);
//         this.PrintToScreen = this.PrintToScreen.bind(this);
//     }

//     TextInput(event) {
//         this.state.input = event.target.value;

//     }

//     PrintToScreen(){
//         this.setState({input:this.state.input});
//     }

//     // WillMounth(){
//     //     alert("welcome");
//     // }



//     render() {
//         let { name } = this.props;

//         return (
//             <div>
//                 <h1>{name}</h1>
//                 <p>{this.state.input}</p>

//                 <label htmlFor="text">Author</label>
//                 <input onChange={this.TextInput} type="text"/>

//                 <button type="button" onClick={this.PrintToScreen}>click</button>
//                 <Gener />
//                 <Country/>
                
//             </div>
//         )
//     }


// }

// export default BookClass;