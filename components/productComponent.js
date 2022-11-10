var Product = (props)=>{
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
                <button className='btn btn-success cart-button'>Add to Cart</button>
            </div>

        </div>
    </>
}
export default Product