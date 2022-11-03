var ContactTable = (props)=>{
return <>
    <div className="contact-bold">
                <strong>{props.title}:</strong>
    </div>
        <div className="contact-mess">
                {props.info}
        </div>
</>
        

}

export default ContactTable;