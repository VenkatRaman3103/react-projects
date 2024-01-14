import { fireEvent } from "@testing-library/react";
import "./App.css";
import { useState } from "react";

const initialFriends = [
    {
        id: 118836,
        name: "Clark",
        image: "https://i.pravatar.cc/48?u=118836",
        balance: -7,
    },
    {
        id: 933372,
        name: "Sarah",
        image: "https://i.pravatar.cc/48?u=933372",
        balance: 20,
    },
    {
        id: 499476,
        name: "Anthony",
        image: "https://i.pravatar.cc/48?u=499476",
        balance: 0,
    },
];

function Button({ children, onClick }) {
    return (
        <button className="button" onClick={onClick}>
            {children}
        </button>
    );
}

function App() {
    const [showform, setShowform] = useState(false);

    let [allFrienList, setAllFriendList] = useState(initialFriends);

    function handleShowForm() {
        setShowform(!showform);
    }

    function updateFirends(newFriend) {
        setAllFriendList([...allFrienList, newFriend]);
    }

    return (
        <div className="app">
            <div className="sidebar">
                <FriendList data={allFrienList} />
                {showform ? (
                    <FormAddFriend updateFirends={updateFirends} />
                ) : (
                    ""
                )}

                <Button onClick={handleShowForm}>
                    {showform ? "close" : "Add Friends"}
                </Button>
            </div>

            <FormSplitBill />
        </div>
    );
}

function FriendList({ data }) {
    return (
        <ul>
            {data.map((friend) => (
                <Friend
                    image={friend.image}
                    name={friend.name}
                    balance={friend.balance}
                    key={friend.id}
                />
            ))}
        </ul>
    );
}

function Friend({ image, name, balance }) {
    function balanceDis(num, name) {
        if (num < 0) {
            return <p className="red">you owe ${Math.abs(num)}</p>;
        } else if (num > 0) {
            return (
                <p className="green">
                    {name} owes you ${num}
                </p>
            );
        } else {
            <p>you and {name} are even</p>;
        }
    }

    return (
        <li>
            <img src={image} />
            <h3>{name}</h3>
            {balanceDis(balance, name)}
            <Button>Select</Button>
        </li>
    );
}

// {
//     id: 118836,
//     name: "Clark",
//     image: "https://i.pravatar.cc/48?u=118836",
//     balance: -7,
// },

function FormAddFriend({ updateFirends }) {
    let [freindName, setFriendName] = useState("");
    let [friedPhotoUrl, setFriedPhotoUrl] = useState(
        "https://i.pravatar.cc/48"
    );

    function handleAddFriend(e) {
        e.preventDefault();

        if(!freindName || !friedPhotoUrl) return;

        const id = crypto.randomUUID();

        let newFriend = {
            id: id,
            name: freindName,
            image: `https://i.pravatar.cc/48?=${id}`,
            balance: 0,
        };

        updateFirends(newFriend);

        setFriendName("");
        setFriedPhotoUrl("https://i.pravatar.cc/48");
    }

    return (
        <form className="form-add-friend" onSubmit={handleAddFriend}>
            <lable>Friend Name</lable>
            <input
                type="text"
                onChange={(e) => setFriendName(e.target.value)}
            />

            <lable>input url</lable>
            <input
                type="tet"
                onChange={(e) => setFriedPhotoUrl(e.target.value)}
            />
            <Button>Add</Button>
        </form>
    );
}

function FormSplitBill() {
    return (
        <form className="form-split-bill">
            <h2>Split the Bill</h2>

            <lable>Total Bill</lable>
            <input type="text" />

            <lable>Your's expense</lable>
            <input type="text" />

            <lable>__friendName__ </lable>
            <input type="text" />

            <lable>who paid the bill</lable>
            <select>
                <option>You</option>
                <option>__friendName__</option>
            </select>

            <Button>Split Bill</Button>
        </form>
    );
}

export default App;
