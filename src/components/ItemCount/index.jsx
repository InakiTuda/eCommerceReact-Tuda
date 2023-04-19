import React,{useState} from "react";
import "./ItemCount.css";

const ItemCount = ({stockItems}) => {
    const [counter, setCounter] = useState(1);
    const [stock, setStock] = useState(stockItems);

    const decreaseStock = () => {
        setCounter(counter - 1)
    }

    const increaseStock = () => {
        setCounter(counter + 1)
    }

    const onAdd = () => {
        if (counter <= stock){
            setStock(stock - counter);
            setCounter(1);
        }
    }

    return (
        <div className="container" id="itemcount">
            <div className="row mb-3">
                <div className="">
                    <div className="btn-group" role="group" aria-label="Basic outlined example">
                        <button type="button" className="btn btn-outline-danger" disabled={counter <= 1} onClick={decreaseStock}>-</button>
                        <span className="btn btn-outline-dark">{counter}</span>
                        <button type="button" className="btn btn-outline-success" disabled={counter >= stock} onClick={increaseStock}>+</button>
                        <button type="button" className="btn btn-outline-primary" disabled={stock <= 0} onClick={() => onAdd(counter)}>
                            <i className="bi bi-cart3"></i>
                        </button>

                    </div>
                </div>
            </div>
        </div>
    ) 
}

export default ItemCount;