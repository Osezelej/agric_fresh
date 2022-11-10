import Adverts from '../components/Advert';
import HomeProducts from '../components/homeProduct';
import Product from '../components/productComponent';
import Slider from '../components/slider';
import {data} from '../data/sliders';
import { dataApi } from "../data/sliders"


export const getStaticProps = async()=>{
    return {
        props: {food:dataApi.slice(0, 4)}
    }
}

var home = ({food}) =>{

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
    </div>
);
}
export default home;
