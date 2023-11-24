import { useState } from "react";
import "./index";

const questions = [
    {
        id: 3457,
        question: "What language is React based on?",
        answer: "JavaScript",
    },
    {
        id: 7336,
        question: "What are the building blocks of React apps?",
        answer: "Components",
    },
    {
        id: 8832,
        question:
            "What's the name of the syntax we use to describe a UI in React?",
        answer: "JSX",
    },
    {
        id: 1297,
        question: "How to pass data from parent to child components?",
        answer: "Props",
    },
    {
        id: 9103,
        question: "How to give components memory?",
        answer: "useState hook",
    },
    {
        id: 2002,
        question:
            "What do we call an input element that is completely synchronised with state?",
        answer: "Controlled element",
    },
];

// App...
function App() {
    return (
        <div className="App">
            <FlashCards />
        </div>
    );
}

function FlashCards() {
    return (
        <div className="flashcards">
            {questions.map((question) => (
                <FlashCard name={question} key={question.id} />
            ))}
        </div>
    );
}

function FlashCard({ name }) {
    let [selectedId, setSelectedId] = useState(null);

    function handleAnswer(id) {
        setSelectedId(id !== selectedId ? id : null);
    }
    return (
        <div
            key={name.id}
            onClick={() => handleAnswer(name.id)}
            className={name.id === selectedId ? "selected" : ""}
        >
            <p>{selectedId === name.id ? name.answer : name.question}</p>
        </div>
    );
}

export default App;
