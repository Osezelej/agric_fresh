import Adverts from '../components/Advert';
import HomeProducts from '../components/homeProduct';
import Product from '../components/product';
import Slider from '../components/slider';
import {data} from '../data/slider';
import { dataApi } from "../data/slider"

export const getStaticProps = async()=>{
    return {
        props: {food:dataApi.slice(0, 4)}
    }
}

var home = ({food}) =>{
console.log(food)
  return (<div >
      <Slider data = {data}/>
      <Adverts/>
      <HomeProducts/>
      <div className="product Container">
          <h3>
            Top Products
          </h3>
          <Product/>
      </div>
  </div>
);
}
export default home;
