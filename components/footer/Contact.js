import ContactTable from "./contactTable";
var Contact = (props)=>{
    const contactInfo = {
        Address:'21, Anylocation, Lagos, NG.',
        'Call Us': '(+234) 08076320300',
        'Email Us': '2osezelejoseph@gmail.com'
    }
    return <>
        <div>
            <div className="title">{props.title}</div>
                <div className = "contact-info">
                        {Object.keys(contactInfo).map((val)=>(
                            <ContactTable
                            key={val}
                            title = {val}
                            info = {contactInfo[val]}
                        />))}
                </div>
        </div>
            
    </>
}
export default Contact;