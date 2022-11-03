import Contact from "./Contact";
import UsefulLink from "./usefulLinks";

var FooterNavi = ()=>{
    const titles = {'Usefull links':['About Us', 'Delivery information', 'Privacy Policy', 'Terms & Conditions', 'Contact Us', 'My Accounts'],
     'Customer Care':['Farms', 'Gift Certificate', 'Special Offers', 'Pattner With Us', 'Newsletters', 'Order History'],
      'Product':['My Product', 'Order History', 'Farms', 'Site Map', 'Affilates']};
    return <>
        <div className="footNavi">
            <Contact title = 'Contact Us'/>
            {
                Object.keys(titles).map((val) =>(
                    <UsefulLink
                     title = {val}
                     links = {titles[val]}
                     />))
            }
            
        </div>
            
    </>
}
export default FooterNavi;