import { useSelector } from "react-redux"

const AddToCart = () => {
    const selector = useSelector((state)=>state.cartone.value);
    return (
        
            <div className="cart">
                <i className="fas fa-shopping-cart"></i>
                <span className="cart-count">{selector}</span>
            </div>
       
    )
}

export default AddToCart