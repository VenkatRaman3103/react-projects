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
    return;
}
function ItemsList() {}
function Footer() {}

export default App;
