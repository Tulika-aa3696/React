import React from "react";
import ReactDOM from "react-dom/client";

const jsxHeading = <h1 id="Heading">Hello World as 1 sibling!</h1>;

/*const jsxHeading2 = () => {
    return <h1 id="Heading">This is the React Functional Component 1 way </h1>;
};

const jsxHeading3 = () => <h1 id="Heading">This is the React Functional Component 2 way </h1>;

const nestedstructure = () => (
    <div className="parent">
        <h2>Child Element</h2>
        <div>2 child Element</div>
    </div>
    );
const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(
    <div>
        {jsxHeading}
        {jsxHeading2()}
        {jsxHeading3()}
        {nestedstructure()}
    </div>
);*/

//For React Element - root.render(jsxHeading)
//For React Functional Component - root.render(<jsxHeading2 />)
//For React Functional Component - root.render(<jsxHeading3 />)
//For React Functional Component - root.render(<nestedstructure />)

const JsxHeading2 = () => {
    return <h1 id="Heading">This is the React Functional Component 1 way </h1>;
};

const number = 1000;

const JsxHeading3 = () => <h1 id="Heading">This is the React Functional Component 2 way </h1>;

const Nestedstructure = () => (
    <div className="parent">

        {number}  
        {jsxHeading}
        {console.log("This is javascipt inside jsx")}
        {JsxHeading2()}
        <JsxHeading3 />
        <h2>Child Element</h2>
        <div>2 child Element</div>
    </div>
    );
const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(<Nestedstructure />);