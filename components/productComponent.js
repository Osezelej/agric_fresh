import Link from 'next/link';
import { useEffect } from 'react';
import axios from 'axios'; 
var Product = (props)=>{

    async function HandleCart (){
        // let options = {
        //     method:'POST',
        //     headers:{
        //         'Content-Type':'application/json'
        //     },
        //     body:JSON.stringify(props.foodDetail)
        // }
    
        axios.post('http://127.0.0.1:8000/v1/fooddetails', props.foodDetail)
     
        
    }

    // organising the rating of defferent product
    let {foodDetail} = props
    let goodRating = foodDetail.rating
    let badRating = 5 - goodRating
    let goodRatingArray = []
    let badRatingArray = []

    for (let i = 0; i < goodRating; i++) {
        goodRatingArray.push(i);
    }
    for (let i = 0; i < badRating; i++) {
        badRatingArray.push(i);
    }
    

    return <>
    <div className='items'>
    <a href={props.isProduct?`/description/${foodDetail.Name}`:'/products'}>
            <div className='image'>
                <img id='productImages' src={foodDetail.Image} />
            </div>
            <div className='product-details'>
                <div className='star'>
                    {goodRating ? goodRatingArray.map((x)=>(<img key = {x} src='/goodstar.png'/>)):null}
                    {badRating ? badRatingArray.map((x)=>(<img key={x} src='/badstar.png'/>)):null}
                </div>
                <div className='Name-price'>
                    <p className='Name'>{foodDetail.Name}</p>
                    <p className='price'>{foodDetail.Price}</p>
                </div>
            </div>
            </a>
            <button className='btn btn-success cart-button' onClick={HandleCart}>Add to Cart</button>
        </div>
    </>
}
export default Product