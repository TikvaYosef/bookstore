import React from "react";
import { useState } from "react/cjs/react.development";


export const postcontext = React.createContext();

// const post = { id: "", name: "tikva", text: "dsfseds", likes: " " };

export const MyContext = ({ children }) => {
    const[object,setObject] = useState({});

    return (
        <postcontext.Provider value={object,setObject}>
            {children}
        </postcontext.Provider>
    )
}

