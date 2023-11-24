import { useState } from "react";

const messages = [
    "Learn React ⚛️",
    "Apply for jobs 💼",
    "Invest your new income 🤑",
];

function App() {
    return (
        <>
            <Main />
        </>
    );
}

function Main() {
    const [step, setStep] = useState(0);
    let [isOpen, setIsOpen] = useState(true);

    function toggle() {
        setIsOpen((s) => !s);
    }

    function hadlePrevious() {
        if (step > 0) {
            setStep((step) => step - 1);
        }
    }

    function hadleNext() {
        if (step < 3) {
            setStep((step) => step + 1);
        }
    }
    return (
        <>
            <button className="close" onClick={toggle}>
                &times;
            </button>
            {isOpen ? (
                <div className="steps">
                    <div className="numbers">
                        <div className={step >= 1 ? "active" : ""}>1</div>
                        <div className={step >= 2 ? "active" : ""}>2</div>
                        <div className={step >= 3 ? "active" : ""}>3</div>
                    </div>
                    <p className="message">
                        Step:{step} {messages[step - 1]}
                    </p>
                    <div className="buttons">
                        <button
                            style={{
                                backgroundColor: "#7950f2",
                                color: "#fff",
                            }}
                            onClick={hadlePrevious}
                        >
                            Pervious
                        </button>
                        <button
                            style={{
                                backgroundColor: "#7950f2",
                                color: "#fff",
                            }}
                            onClick={hadleNext}
                        >
                            Next
                        </button>
                    </div>
                </div>
            ) : null}
        </>
    );
}

export default App;
