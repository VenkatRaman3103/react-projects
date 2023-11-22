import { useState } from "react";

function App() {
    let [allItems, setAllItems] = useState([]);

    function handleDelete(id) {
        setAllItems(allItems.filter((item) => item.id !== id));
    }

    function handleUpdate(id) {
        setAllItems((items) =>
            items.map((item) =>
                item.id === id ? { ...item, packed: !item.packed } : item
            )
        );
    }

    function handelAllItems(item) {
        setAllItems((allItems = [...allItems, item]));
    }
    return (
        <div className="app">
            <Title />
            <Form onAddItems={handelAllItems} />
            <ItemsList
                allItems={allItems}
                onDelete={handleDelete}
                onUpdate={handleUpdate}
            />
            <Footer allItems={allItems} />
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
            description: descripttion,
            quantity: select,
            packed: false,
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

function ItemsList({ allItems, onDelete, onUpdate }) {
    let [sortedItems, setSortedItems] = useState("input");

    function handleSort(event) {
        setSortedItems((sortedItems = event.target.value));
        console.log(sortedItems);
    }

    let itemsSorted;
    if (sortedItems === "input") {
        itemsSorted = allItems
            .slice()
            .sort((a, b) => a.description.localeCompare(b.description));
    }
    if (sortedItems === "description") {
        itemsSorted = allItems.slice().sort((a, b) => Number(a) - Number(b));
    }
    return (
        <div className="list">
            <div>
                {itemsSorted.map((item) => (
                    <Item
                        items={item}
                        onDelete={onDelete}
                        onUpdate={onUpdate}
                    />
                ))}
            </div>
            <div className="actions">
                <select onChange={handleSort}>
                    <option value={"input"}>sort by input order</option>
                    <option value={"description"}>sort by description</option>
                    <option value={"status"}>sort by packed status</option>
                </select>
                <button>clear all</button>
            </div>
        </div>
    );
}

function Item({ items, onDelete, onUpdate }) {
    return (
        <li>
            <input type="checkbox" onChange={() => onUpdate(items.id)}></input>
            <span
                style={items.packed ? { textDecoration: "line-through" } : null}
            >
                {items.quantity} {items.description}
            </span>
            <button onClick={() => onDelete(items.id)}>❌</button>
        </li>
    );
}

function Footer({ allItems }) {
    let len = allItems.length;
    return (
        <footer className="stats">
            <em>you haeve {len} itmes in your list</em>
            <em></em>
        </footer>
    );
}

export default App;
