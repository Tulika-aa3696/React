import React from 'react';
import ReactDOM from 'react-dom';

const parent = React.createElement("div",{},
    ["This is Parent Child",  React.createElement("div",{},[React.createElement("div",{},"I am the 1.1 Child"),React.createElement("div",{},"I am the 1.2 Child")]),React.createElement("div",{},"I am the 2 Child")]);
const root=ReactDOM.createRoot(document.getElementById("root"));
root.render(parent);