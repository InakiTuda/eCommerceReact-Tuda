import React,{useState} from "react";
import "./ItemCount.css";

const ItemCount = ({stockItems, onAdd}) => {
    const [counter, setCounter] = useState(1);

    const decreaseStock = () => {
        setCounter(counter - 1)
    }

    const increaseStock = () => {
        setCounter(counter + 1)
    }

    return (
        <div className="container" id="itemcount">
            <div className="row mb-3">
                <div className="">
                    <div className="btn-group" role="group" aria-label="Basic outlined example">
                        <button type="button" className="btn btn-outline-danger" disabled={counter <= 1} onClick={decreaseStock}>-</button>
                        <span className="btn btn-outline-dark">{counter}</span>
                        <button type="button" className="btn btn-outline-success" disabled={counter >= stockItems} onClick={increaseStock}>+</button>
                        <button type="button" className="btn btn-outline-primary" disabled={stockItems <= 0} onClick={() => onAdd(counter)}>
                            <i className="bi bi-cart3"></i>
                        </button>

                    </div>
                </div>
            </div>
        </div>
    ) 
}

export default ItemCount;