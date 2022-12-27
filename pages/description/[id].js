import { dataApi} from '../../data/sliders';
import DescriptionProducts from '../../components/description/product';
import AddItem from '../../components/increaseNumber';
import { useState } from 'react';
export const getStaticPaths = async()=>{
    const data = dataApi
    const path = data.map((details)=>{
        return {
            params:{id: details.Name.toString()}
        }
    })
    return{
        paths:path,
        fallback:false,
    }
}
export const getStaticProps = async (context)=>{
    const id = context.params.id
    const data = dataApi.filter((detail)=>{
        return detail.Name == id
    })
    return{
        props:{
            detail:data,
            food:dataApi.slice(0, 4)}
    }
}

var Description = ({detail, food}) =>{
    let product_details = detail[0]
    console.log(product_details)
    
    const [price, setPrice] = useState(product_details.Price)
    function changePrice(price) {
        setPrice(price)
    }
 
    return <>
        <DescriptionProducts
            productDetails = {product_details}
            productDetailsPrice = {price}
        />
        <hr/>
        <div className='cart_add'>
            <AddItem
                price ={product_details.Price}
                changePrice = {changePrice}
            />
            <button className='btn btn-success'> Add to Cart</button>
        </div>
    </> 
}
export default Description;