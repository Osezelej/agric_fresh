import {Head, Html} from 'next/document';
import { Header } from './header/head';
import PageNav from './header/pageNav';
import Footer from './footer/footer';
import { useEffect, useState } from 'react';

var layout = (props) => {
    const [width, setWidth] = useState()
    useEffect(()=>(setWidth(window.innerWidth)), [])
    
    return<>
        <Header />
        <PageNav windowWidth={width} />
        {props.children}
        <Footer />
        
    </>
    
}
export default layout;