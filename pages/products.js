import { useState } from "react";
import { dataApi } from "../data/sliders";
import Product from "../components/productComponent";

export const getStaticProps = async ()=>{
    return {
        props:{foods:dataApi.slice()}
    }
}

var Products = ({foods}) => {
    return (<>
    
        <div className="product container">
            <h2>Market Place</h2>
            <div className="productContainer">
                
                {foods.map((details)=>(<Product
              key = {details.id}
              foodDetail = {details}
              />))}
            </div>
        </div>
    </>);
}
export default Products;