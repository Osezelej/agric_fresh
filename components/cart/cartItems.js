import AddItem from "../increaseNumber";
import { useState } from "react";
export function CartItems(props){
    const [price, setPrice] = useState(props.foodDetail.Price)
    function changePrice(price) {
        setPrice(price)
    }
    return <>
        <div className="cart-info">
            <div className="cart-images">
                <img src="close.png" width={20} className="cancel-image" onClick={()=>(console.log('cancel'))}/>
                <img src={props.foodDetail.Image} width={100} className= 'food-Images'/>
            </div>
            <div className="cart_info">
                <div className='Name-price'>
                    <p className='Name'>{props.foodDetail.Name}</p>
                    <p className='price' value={price}>{price}</p>
                </div>
                <div>
                    <AddItem 
                        price ={props.foodDetail.Price}
                        changePrice = {changePrice}
                    />
                </div>
            </div>
        </div>
        <hr />
    </>
}