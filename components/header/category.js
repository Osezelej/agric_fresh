import Image from 'next/image';
var Category = () =>{
    return <>
        <a href="/products">
            <div className="category" >
                <p>
                    <strong>
                        Shop by Category.
                    </strong>
                </p>
                <button className="btn btn-outline"><Image src={'/setting.png'} width={27} height={20}/></button>
            </div>
        </a>
    </>
}
export default Category;