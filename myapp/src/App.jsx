import { useState } from 'react';
import Header from './components/Header';
import Body from './components/Body';

import './App.css'



 const AppLayout= ()=>{
  return(
     <div className="app">
    <Header/>
    <Body/>

     </div>
  );
}


export {AppLayout};
