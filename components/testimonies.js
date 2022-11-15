import Image from 'next/image'
const Testimony = (props)=>{
    let {data} = props
    let goodRating = data.rating
    let badRating = 5 - goodRating
    let goodRatingArray = []
    let badRatingArray = []

    for (let i = 0; i < goodRating; i++) {
        goodRatingArray.push(i);
    }
    for (let i = 0; i < badRating; i++) {
        badRatingArray.push(i);
    }
    const color = [
        '#f0a4ff',
        '#fce97d',
        '#baa7ff',
    ];

    return<>
        <div className="testimony-body" style={{backgroundColor:color[Math.floor(Math.random()* color.length) ]}}>
            <div className="user-details">
                <Image src={'/account.png'} width={20} height={20}/>
                <div className='user-info'>
                    <p><strong>{data.Name}</strong></p>
                    <p className="job">~{data.occupation}</p>
                </div>
            </div>
            <div className='user-testimony'>
                    "I Love Agric Fresh"
            </div>
            <div className='star'>
                {goodRating && goodRatingArray.map((x)=>(<img key = {x} src='/goodstar.png'/>))}
                {badRating ? badRatingArray.map((x)=>(<img key={x} src='/badstar.png'/>)):null}
            </div>
        </div>
    </>
}
export default Testimony;
