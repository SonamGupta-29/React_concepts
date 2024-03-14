// Conditional Rendering JSX & Component

import React, { Component } from "react";
import Code from "./Code";
import Welcome from "./Welcome";

// function ConditionalComponent() {
//   const display = true;

//   if (display) {
//     return <Welcome />;
//   } else {
//     return <Code />;
//   }
// }

// export default ConditionalComponent;

// in this having one issue that it will return two(multiple) statement for that prblm we use
// Conditional Rendering using element variable
// function ConditionalComponent() {

//     let message;
//     const display = false;
  
//     if (display) {
//      message= <h1>Message one</h1>;
//     } else {
//         message= <h1>Message two</h1>;
//     }
//     return message
//   }
  
//   export default ConditionalComponent;


// conditional operator
function ConditionalComponent() {

    let message;
    const display = true;
    // return display ? <h1>Message1</h1> : <h1>Message2</h1>
    return display ? <Welcome />: <Code />
  }
  
  export default ConditionalComponent;