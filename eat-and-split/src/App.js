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

    let [allFriendList, setAllFriendList] = useState(initialFriends);

    const [selectedFriend, setSelectedFriend] = useState('hi')

    function handleShowForm() {
        setShowform(!showform);
    }

    function updateFriends(newFriend) {
        setAllFriendList([...allFriendList, newFriend]);
    }

    function onSelection(friend){
        setSelectedFriend(friend)
        console.log(friend)
    }

    return (
        <div className="app">
            <div className="sidebar">
                <FriendList data={allFriendList} onSelection={onSelection}/>
                {showform ? (
                    <FormAddFriend updateFriends={updateFriends} />
                ) : (
                    ""
                )}

                <Button onClick={handleShowForm}>
                    {showform ? "close" : "Add Friends"}
                </Button>
            </div>

            <FormSplitBill selectedFriend={selectedFriend}/>
        </div>
    );
}

function FriendList({ data, onSelection }) {
    return (
        <ul>
            {data.map((friend) => (
                <Friend
                    image={friend.image}
                    name={friend.name}
                    balance={friend.balance}
                    key={friend.id}

                    friend={friend}

                    onSelection={onSelection}
                />
            ))}
        </ul>
    );
}

function Friend({ image, name, balance, onSelection, friend }) {
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
            <Button onClick={()=>onSelection(friend)}>Select</Button>
        </li>
    );
}

// {
//     id: 118836,
//     name: "Clark",
//     image: "https://i.pravatar.cc/48?u=118836",
//     balance: -7,
// },

function FormAddFriend({ updateFriends }) {
    let [friendName, setFriendName] = useState("");
    let [friedPhotoUrl, setFriedPhotoUrl] = useState(
        "https://i.pravatar.cc/48"
    );

    function handleAddFriend(e) {
        e.preventDefault();

        if(!friendName || !friedPhotoUrl) return;

        const id = crypto.randomUUID();

        let newFriend = {
            id: id,
            name: friendName,
            image: `https://i.pravatar.cc/48?=${id}`,
            balance: 0,
        };

        updateFriends(newFriend);

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

function FormSplitBill({selectedFriend}) {
    return (
        <form className="form-split-bill">
            <h2>Split the Bill with {selectedFriend.name}</h2>

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
