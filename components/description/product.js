var DescriptionProducts = ({productDetails})=>{
    return <>
        <div className='detail-container'>
            <div className='detail-image' >
                <img src={productDetails.Image} className='description_image'/>
            </div>
            <div className='detail-sale'>
            <h4>{productDetails.Name}</h4>
            <img src={productDetails.Image} className='description_image_small'/>
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