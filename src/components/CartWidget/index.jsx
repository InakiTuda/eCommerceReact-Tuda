const CartWidget = () => {
    return (
        <div>
            <button type="button" className="btn colorCartButton position-relative">
                <i className="bi bi-cart3" width="20"></i>
                <span className="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-danger">0</span>
            </button>
        </div>

    )
}

export default CartWidget;