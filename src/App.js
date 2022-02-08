// import logo from './logo.svg';

import React, { Component } from 'react';
import './App.css';
import { Posts } from './components/Posts/Posts';
// import { Comments } from './components/Comments/Comments';
// import BookClass from "./components/BookClass/BookClass.jsx";
// import { MyContext } from './components/Context/MyContext';
// import { Likes } from './components/Likes/Likes';
// import Gener from './components/Genre/Genre';
// import Song from './components/Song/Song';
// import {nameGener} from './components/Context/MyContext';
// import AddMovie from './components/AddMovie/AddMovie';
// import InputComp from './components/InputComp/InputComp';
// import {Views} from "./components/Views/Views";

function App() {
  return (
   
      <div >
        {/* <BookClass name="kofiko" />
        <Song /> */}
        {/* <Provider name = {<MyContext/>}>
        </Provider> */}
        {/* <Likes/> */}
        {/* <AddMovie/> */}
        {/* <Views/> */}
        {/* <Comments/> */}
        <Posts/>
      </div>
  );
}
export default App;
