const parent = React.createElement("div",{id:"Parent"},
    React.createElement("div",{id:"child"},
        [React.createElement("h1",{},"Hello World as 1 sibling!"),
            React.createElement("h2",{},"Hello World as 2 sibling!")]
    )
);
const root=ReactDOM.createRoot(document.getElementById("root"));
root.render(parent);