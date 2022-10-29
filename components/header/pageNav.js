import { useState } from "react";
import Category from "./category";
import Link_ from "./link";

var PageNav = (props) =>{
    const links = ['Home', 'Blog', 'Contact us', 'Todays special', 'Patner with us']

    const [text, setText] = useState({action:'Click',display:"none"})
    let handleClick = (event) =>{
       let data =  event.target.innerText;
       console.log(data)
       if(text.action == 'Click'){
        setText({display:'flex', action:'cancel'})
       }else{
        setText({display:'none', action:'Click'})
       }

    }

    const styles = {
        controlNav:{
            display:text.display,
            flexDirection:'column',
            padding:'20px',
            backgroundColor:'#198754',
            rowGap:'20px',
            fontWeight:'800',
            transition:'0.3s'
        }
    }

    return(
        <>
       <nav>
            
            <div className="cat">
                <Category/>
            </div>
            <div className="links">
                {links.map((value)=>(<Link_
                        key = {value}
                        char = {value}
                        className = 'navlink'
                        width = {props.windowWidth}
                />))}
            </div>
            <button className="btn btn-warning togle" onClick={handleClick}>{text.action}</button>
      </nav>
      <div className="controls" style={styles.controlNav}>
                {links.map((value)=>(<Link_
                            key = {value}
                            char = {value}
                            className = 'navlink'
                            width = {props.windowWidth}
                    />))}
            </div>
      </>
    );

}


export default PageNav;