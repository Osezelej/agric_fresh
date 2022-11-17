import { dataApi} from '../../data/sliders';
import Head from 'next/head';
import DescriptionProducts from '../../components/description/product';
import Product from '../../components/productComponent';
import ItemInfo from '../../components/itemInfo';
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
            food:dataApi.slice(0, 4)
        }
    }
}
var Description = ({detail, food}) =>{
    console.log(detail[0])
    let product_details = detail[0]
    
    return <>
        <DescriptionProducts
            productDetails = {product_details}
        />
        <ItemInfo />
    </> 
}
export default Description;