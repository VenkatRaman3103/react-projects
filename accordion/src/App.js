import "./App.css";
import { useState } from "react";

const faqs = [
    {
        title: "Where are these chairs assembled?",
        text: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Accusantium, quaerat temporibus quas dolore provident nisi ut aliquid ratione beatae sequi aspernatur veniam repellendus.",
    },
    {
        title: "How long do I have to return my chair?",
        text: "Pariatur recusandae dignissimos fuga voluptas unde optio nesciunt commodi beatae, explicabo natus.",
    },
    {
        title: "Do you ship to countries outside the EU?",
        text: "Excepturi velit laborum, perspiciatis nemo perferendis reiciendis aliquam possimus dolor sed! Dolore laborum ducimus veritatis facere molestias!",
    },
];

///// App component
function App() {
    return (
        <>
            <Accordion data={faqs} />
        </>
    );
}

function Accordion({ data }) {
    return (
        <>
            <div className="accordion">
                {data.map((el, ind) => (
                    <AccordionItem
                        title={el.title}
                        num={ind + 1}
                        text={el.text}
                    />
                ))}
            </div>
        </>
    );
}

function AccordionItem({ num, title, text }) {
    let [isOpen, setIsOpen] = useState(false);

    function handleToggle() {
        setIsOpen((isOpen = !isOpen));
    }

    return (
        <>
            <div
                className={`item ${isOpen ? "open" : ""}`}
                onClick={handleToggle}
            >
                <p className="number">{num <= 9 ? `0${num}` : `${num}`}</p>
                <p className="title">{title}</p>
                <p className="icon">{isOpen ? "-" : "+"}</p>
                <p className="content-box">{isOpen && text}</p>
            </div>
        </>
    );
}

export default App;
