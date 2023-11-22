import { useState } from "react";

const initialItems = [
    { id: 1, description: "Passports", quantity: 2, packed: false },
    { id: 2, description: "Socks", quantity: 12, packed: false },
  ];

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
    let [descripttion, setDescription] = useState("");
    let [select, setSelect] = useState(1);

    function handelDescription(event) {
        setDescription((descripttion = event.target.value));
    }

    function handleOption(event) {
        setSelect((select = event.target.value));
    }

    return (
        <form className="add-form">
            <h2>Enter the itmes: </h2>
            <select onChange={handleOption}>
                {Array.from({ length: 10 }, (_, i) => i + 1).map((num) => (
                    <option>{num}</option>
                ))}
            </select>
            <input placeholder="items..." onChange={handelDescription}></input>
            <button>Add</button>
        </form>
    );
}
function ItemsList() {}
function Footer() {}

export default App;
