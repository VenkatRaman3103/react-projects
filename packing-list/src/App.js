import { useState } from "react";

const initialItems = [
    { id: 1, description: "Passports", quantity: 2, packed: false },
    { id: 2, description: "Socks", quantity: 12, packed: false },
];

function App() {
    let [allItems, setAllItems] = useState([]);

    function handelAllItems(item) {
        setAllItems((allItems = [...allItems, item]));
        console.log(allItems);
    }
    return (
        <div>
            <Title />
            <Form onAddItems={handelAllItems} />
            <ItemsList allItems={allItems} />
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

function Form({ onAddItems }) {
    let [descripttion, setDescription] = useState("");
    let [select, setSelect] = useState(1);

    function handelDescription(event) {
        setDescription((descripttion = event.target.value));
    }

    function handleOption(event) {
        setSelect((select = event.target.value));
    }

    function handleSubmit(event) {
        event.preventDefault();

        let ItemsList = {
            id: Date.now(),
            descripttion: descripttion,
            quantity: select,
            packed: true,
        };
        onAddItems(ItemsList);
        console.log(ItemsList);
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
            <button onClick={handleSubmit}>Add</button>
        </form>
    );
}

function ItemsList({ allItems }) {
    return (
        <div>
            {allItems.map((item) => (
                <Item items={item} />
            ))}
        </div>
    );
}

function Item({ items }) {
    return (
        <lis>
            <span>{items.description}</span>
        </lis>
    );
}

function Footer() {}

export default App;
