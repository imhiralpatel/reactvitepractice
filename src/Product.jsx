import { useDispatch } from "react-redux"
import { addItem, clearAllItems, removeItem } from "./redux/slice"
import {fetchProducts} from "./redux/productSlice"
import { useEffect } from "react"

const Product = () => {
    const dispatch=useDispatch()
    useEffect(()=>{
        dispatch(fetchProducts())
    }, [])
    return (
        <>
            <main className="product-page">

                <div className="product-image">
                    <img src="https://images.unsplash.com/photo-1523275335684-37898b6baf30"
                        alt="Product" />
                </div>

                <div className="product-info">
                    <p className="category">Men's Accessories</p>

                    <h1>Classic Watch</h1>

                    <div className="rating">
                        ★★★★★
                        <span>(120 Reviews)</span>
                    </div>

                    <h2>$99.00</h2>

                    <p className="description">
                        A stylish classic watch designed for everyday use.
                        Premium quality, elegant design and comfortable to wear.
                    </p>

                    <div className="quantity">
                        <button>-</button>
                        <span>1</span>
                        <button>+</button>
                    </div>

                    <button className="add-cart" onClick={()=>dispatch(addItem(1))}>
                        <i className="fas fa-shopping-cart"></i>
                        Add to Cart
                    </button>

                    <button onClick={()=>dispatch(removeItem(1))} className="buy-now">
                        Remove From Cart
                    </button>

                    <button className="btn-clear" onClick={()=>dispatch(clearAllItems())}>
                        Clear Cart
                    </button>

                    <div className="features">
                        <p><i className="fas fa-truck"></i> Free Delivery</p>
                        <p><i className="fas fa-rotate-left"></i> 7 Days Return</p>
                        <p><i className="fas fa-shield"></i> Secure Payment</p>
                    </div>
                </div>

            </main>
        </>
    )
}

export default Product