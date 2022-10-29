var EmailNews = () =>{
    return<>
        <div className="emailNews">
           
            <div className="email_">
                <div className="email_icon">
                    
                </div>
                <div className="email_messge">
                    <p>
                        <strong>
                        Sign Up To Our Newsletter
                        </strong>
                    </p>
                    <p className="email_message_small">to get premium offers directly from the farm</p>
                </div>
            </div>
            
            <div className="email_form">
                <input placeholder="Enter your email..." className="form-control email_input"/>
                <input value={'Subscribe'} type='submit' className="btn btn-warning"/>
            </div>
        </div>
    </>
}
export default EmailNews;