import {Head, Html} from 'next/document';
import { Header } from './head';
import PageNav from './pageNav';
var layout = (props) => {
    return<>
        <Header />
        <PageNav />
        {props.children}
    </>
    
}
export default layout;