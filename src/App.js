import { useState } from "react";
import { NumericFormat } from "react-number-format";
import "./App.css";

function App() {
    const [preState, setPreState] = useState("");
    const [currState, setCurrState] = useState("");
    const [input, setInput] = useState("0");
    const [operator, setOperator] = useState(null);
    const [total, setTotal] = useState(false);

    return (
        <div className="container">
            <div className="wrapper">
                <div className="screen">
                    {input !== "" || input === "0" ? (
                        <NumericFormat
                            value={input}
                            displayType={"text"}
                            thousandSeparator={true}
                        />
                    ) : (
                        <NumericFormat
                            value={preState}
                            displayType={"text"}
                            thousandSeparator={true}
                        />
                    )}
                </div>
                <div className="btn light-gray">AC</div>
                <div className="btn light-gray">%</div>
                <div className="btn light-gray">+/-</div>
                <div className="btn orange">/</div>
                <div className="btn">7</div>
                <div className="btn">8</div>
                <div className="btn">9</div>
                <div className="btn orange">X</div>
                <div className="btn">4</div>
                <div className="btn">5</div>
                <div className="btn">6</div>
                <div className="btn orange">+</div>
                <div className="btn">1</div>
                <div className="btn">2</div>
                <div className="btn">3</div>
                <div className="btn orange">-</div>
                <div className="btn">0</div>
                <div className="btn">.</div>
                <div className="btn equal">=</div>
            </div>
        </div>
    );
}

export default App;
