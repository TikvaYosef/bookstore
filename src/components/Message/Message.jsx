import React, { useContext } from 'react';
// import { postcontext } from "./Components/NewContext";
import {postcontext} from "../NewContext";




// const valuecontext = useContext(postcontext);

export const Message = () => {
    let valuecontext = useContext(postcontext);

    const ChangeState = (e)=> {
        valuecontext.object = {name: e.target.value}
    }
    const updateValue = ()=> {
        valuecontext.setObject = (valuecontext.object)
    }
    return (
        <div>
            <input type="text" onChange={ChangeState}/>
            <button onClick={updateValue}>click</button>
            <h1>{valuecontext.object.name}</h1>
        </div>
    )
}