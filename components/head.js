import Image from "next/image";
import Link from "next/dist/client/link";

export function Header(){

    return <>
        <header>
            <div className="containers">
                <div className="header">
                    <div className="image-col">
                       <Image className="icon" src={'/Agric.png'} width={200} height={200}/>
                       <div ><Link className="Navbar-brand brand" href={""}>Ag<span style={{color:"light orange"}}>r</span>ic_Fr<span style={{color:"yellow"}}>e</span>sh</Link>  </div>
                    </div>
                    <div className="input-col" >
                        <input className="form-control search_input" placeholder="search for product... "/>
                        <button className="btn btn-success search_button">search</button>
                        <div className="cart" >
                            <Image src={'/shopping-cart.gif'} width={20} height={20}/>
                        </div>
                        <div className="account">
                        <Image src={'/account.png'} width={20} height={20}/>
                        </div>
                    </div>
                    
                </div>
            </div>
        </header>
    </>

}