import { useState } from "react";

function App() {
    return (
        <div>
            <Title />
            <Form />
            <ItemsList />
            <Footer />
        </div>
    );
}

function Title() {
    return (
        <div>
            <h1>Travel App</h1>
        </div>
    );
}
function Form() {
    return (
        <form className="add-form"> 
            <h2>Enter the itmes: </h2>
            <select>
                {Array.from({ length: 10 }, (_, i) => i + 1).map((num) => (
                    <option>{num}</option>
                ))}
            </select>
            <input placeholder="items..."></input>
            <button>Add</button>
        </form>
    );
}
function ItemsList() {}
function Footer() {}

export default App;
