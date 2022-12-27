
var DescriptionProducts = ({productDetails, productDetailsPrice})=>{
    // let {foodDetail} = props
    let goodRating = productDetails.rating
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
        <div className='detail-container'>
            <div className='detail-image' >
                <img src={productDetails.Image} className='description_image'/>
                <img src={productDetails.Image} className='description_image_small'/>
                <div className="advert" style={{display:'flex', alignItems:'center', justifyContent:'center', fontWeight:'700', fontSize:'20px'}}>
                        Another Advert
                </div>
            </div>
            <div className='detail-sale'>
            <div >
                <h4 className="Product_name">{productDetails.Name}</h4>
                    <div className='star'>
                        {goodRating ? goodRatingArray.map((x)=>(<img key = {x} src='/goodstar.png'/>)):null}
                        {badRating ? badRatingArray.map((x)=>(<img key={x} src='/badstar.png'/>)):null}
                    </div>
                    <div className='Name-price'>
                        <p className='price _price'>{productDetailsPrice}</p>
                    </div>
                    <div className='cart_add_bigScreen'>
                        
                        <button className='btn btn-success'> Add to Cart</button>
                    </div>
            </div>
               
                <h3>Description</h3>
                <div className='detail-sale-des'>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Impedit magnam praesentium molestiae architecto corrupti tempora sit assumenda itaque possimus sint, placeat labore cupiditate sed nihil? Corrupti facere exercitationem eaque consequuntur.
                </div>
                <h3>Nutritonal Facts</h3>
                <div className="nutrition_fact_list">
                    <ul>
                        <li>
                        Lorem ipsum dolor sit amet consectetur 
                        </li>
                        <li>
                        Lorem ipsum dolor sit amet consectetur
                        </li>
                        <li>
                        Lorem ipsum dolor sit amet consectetur
                        </li>
                        <li>
                        Lorem ipsum dolor sit amet consectetur
                        </li>
                        <li>
                        Lorem ipsum dolor sit amet consectetur
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    </>
}
export default DescriptionProducts