import style from '../styles/Home.module.css'
var Slider = (props)=>{
    return<>
    <div id="carouselExampleIndicators" className="carousel slide" data-bs-ride="carousel">
        <div className="carousel-indicators">
            <button id='sliderIndicator1' type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="0" className={`active ${style.sliderIndicator}`} aria-current="true" aria-label="Slide 1"></button>
            <button id='sliderIndicator2' type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="1" className="slider-indicator" aria-label="Slide 2"></button>
            {/* <button id='sliderIndicator3' type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="2" className="slider-indicator" aria-label="Slide 3"></button> */}
        </div>
        <div className="carousel-inner">

            {props.data.map((url)=>{
            return <div key={url} className="carousel-item active">
                        <img src={url} className="d-block w-100 sliderImg"  height={300}/>
                    </div>
            })}
        </div>
        <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="prev">
            <span className="carousel-control-prev-icon" aria-hidden="true"></span>
            <span className="visually-hidden">Previous</span>
        </button>
        <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="next">
            <span className="carousel-control-next-icon" aria-hidden="true"></span>
            <span className="visually-hidden">Next</span>
        </button>
    </div>
    </>
}

export default Slider;
