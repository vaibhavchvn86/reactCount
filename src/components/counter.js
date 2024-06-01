import { useState } from "react"
import './counter.css';

export function Counter() {

    const [count, setState] = useState(0);
    const [show, setError] = useState()


    const increment = () => {
        setState(count + 1)

        if ((count === 0) || (count > 0)) {
            setError("")
        }
    }

    const decrement = () => {
        if (count > 0) {
            setState(count - 1)
        } else {
            setError("Can not go below 0")
            alert("Number can not go below 0")
        }
    }

    const goback = () => {
        setState(0)
    }

    return (
        <div className="flex">
            <div className="container-flex">
                <div className="container-main">
                    <p className="heading">Counter using React</p>
                </div>
                <div className="display-container">
                    <p>You'r Current Count is : {count}</p>
                </div>
                <div className="error-container">
                    <p>Error : {show}</p>
                </div>
                <div className="btn-container">
                    <button className="btn btn-success" onClick={increment}>Increment</button>
                    <button className="btn btn-warning" onClick={decrement}>Decrement</button>
                    {
                        count > 10 && (
                            <button className="btn btn-danger" onClick={goback}>Reset</button>
                        )
                    }
                </div>
            </div>
        </div>
    )
}