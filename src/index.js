import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import FirebaseContext from "./context/firebase"

ReactDOM.render(<App />, document.getElementById("root"));

// client side rendered app: react (cra)
    // -> database: Firebase
    // -> react-loadking-skeleton
    // tailwind

// architecture
    // -> components, 
    // -> constants, 
    // -> context, 
    // -> helpers, 
    // -> hooks, 
    // -> pages, 
    // -> lib (Firebase here)
    // -> service (firebase functions)
    // -> styles (tailwind)