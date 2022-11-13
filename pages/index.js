import Adverts from '../components/Advert';
import HomeProducts from '../components/homeProduct';
import Product from '../components/productComponent';
import Slider from '../components/slider';
import Testimony from '../components/testimonies';
import {data} from '../data/sliders';
import { dataApi } from "../data/sliders";
import testimonyData from '../data/testimoniesData';


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
        <HomeProducts/>
        <a className="product container" href='/products' style={{color:'black', textDecoration:'None'}}>
            <h3>
              Top Products
            </h3>
            <div className="product-container">
            {food.map((details)=>(
            <Product
              key = {details.id}
              foodDetail = {details}
              />))}
            </div>
        </a>
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
              />))}
            </div>
    </div>
);
}
export default home;
