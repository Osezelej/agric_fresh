import Adverts from '../components/Advert';
import Product from '../components/productComponent';
import Slider from '../components/slider';
import Testimony from '../components/testimonies';
import {data} from '../data/sliders';
import { dataApi } from "../data/sliders";
import testimonyData from '../data/testimoniesData';
import Link from 'next/link';


export const getStaticProps = async()=>{
    return {
        props: {
          food:dataApi.slice(0, 4),
          testimonies: testimonyData,
        }
    }
}

var home = ({food, testimonies}) =>{
  return (<div >
        <Slider data = {data}/>
        <Adverts/>
            <h3>
              Top Products
            </h3>
            <div className="product-container">
            {food.map((details)=>(
            <Product
              key = {details.id}
              foodDetail = {details}
              isProduct = {false}
              />))}
            </div> 
        
        <h3>What People Say</h3>
        <div className="testimony container">
           
            {testimonies.map((testimony)=>(
              <Testimony
              key ={testimony.Name}
              data={testimony}
              />
              ))
              }
        </div>
        <h3>Best Seller This week</h3>
        <div className="product-container">
            {food.map((details)=>(
            <Product
              key = {details.id}
              foodDetail = {details}
              isProduct = {true}
              />))}
            </div>
    </div>
);
}
export default home;
