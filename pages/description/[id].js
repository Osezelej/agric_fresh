import { dataApi} from '../../data/sliders';
import Head from 'next/head';
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
            detail:data
        }
    }
}
var Description = ({detail}) =>{
    console.log(detail)
    
    return <>
        <Head>
            <title>{detail.Name}</title>
        </Head>
    </>
}
export default Description;