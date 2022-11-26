import cartData from "../data/cartData";
import Product from "../components/productComponent";
import axios from 'axios';
import { CartItems } from "../components/cart/cartItems";
export const getStaticProps = async ()=>{
    let res = await axios.get('http:127.0.0.1:8000/v1/fooddetails')
    return {
        props:{
           foodData:res.data
        }
    }
}
const CartPage = ({foodData})=>{
    let booked = foodData.results
    return <>
    
    <div className="cart-main-container">

        <div>
            {booked.length > 0?booked.map((items)=>{
                
                return <CartItems
                    key = {items.id}
                    foodDetail = {items}
                    isProduct = {false}
                    />}):<div><h3>No Item have been booked</h3></div>}
        </div>
        <h4>Cart totals</h4>
        <div className="cart-totals" style={{display:'flex', flexDirection:'column', justifyContent:'center'}}>
                <div className="totalNamePrice">
                    <p className="Name">subtotal</p>
                    <p className="price" style={{marginBottom:'0'}}>N20000</p>
                </div>
                <hr style={{backgroundColor:'GrayText'}}/>
                <div className="totalNamePrice">
                    <p className="Name" style={{fontWeight:850}}>Total</p>
                    <p className="price" style={{marginBottom:'0'}}>N20000</p>

                </div>
                <button className="btn btn-success" style={{marginTop:'30px'}}>Proceed To Checkout</button>
                
        </div>
    </div>
    
    </>
}

export default CartPage;