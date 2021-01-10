import React from 'react';
import Dinner from './dinner.js';

function App() {
  return (
    <div>
 <Dinner  Dishes="Kichen Karahi" sweet="Kheer"/>
 <hr />
 <Dinner  Dishes="Nehari" sweet="Jalebi"/>
 <hr />
 <Dinner  Dishes="Began" sweet="Kheer"/>
 <hr />
 <Dinner  Dishes="Kabab" sweet="Gajar ka halwa"/>
 {/* <Dinner></Dinner>  both work same*/}


 </div>
 
 

  );
}


export default App;
