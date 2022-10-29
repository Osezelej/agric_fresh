import Image from "next/image";
import Link from "next/dist/client/link";

export function Header(){

    return <>
        <header>
            <div className="containers">
                <div className="header">
                    <div className="image-col">
                       <Image className="icon" src={'/Agric.png'} width={200} height={200}/>
                       <div ><Link className="navbar-brand brand" href={""}>Ag<span style={{color:"light orange"}}>r</span>ic_Fr<span style={{color:"yellow"}}>e</span>sh</Link>  </div>
                    </div>
                    <div className="phone icon_info">(+234)08076320300</div>
                    <div className="input-col" >
                        <input className="form-control search_input" placeholder="Category | search for product... "/>
                        <button className="btn btn-success search_button">search</button>

                        <div className="account">
                        <Image src={'/account.png'} width={20} height={20}/>
                        <p className="icon_info">Account</p>
                        </div>

                        <div className="cart" >
                            <Image src={'/shopping-cart.gif'} width={20} height={20}/>
                            <p className="icon_info">Cart</p>
                        </div>
                    </div>
                </div>
            </div>
        </header>
    </>

}