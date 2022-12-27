import { useState } from "react";
import Router from "next/router";
import Image from 'next/image';
var Account = ()=>{

    return <>
        <div className="account-body">
            
            <div className="login_body">
                
                <div className='inputs-body'>
                    <h1>Login</h1>
                    <div>
                        <h4>Username</h4>
                        <input type='text' placeholder='Enter your Username' className='form-control'/>
                    </div>
                    <div>
                        <h4>Password</h4>
                        <input type='password' placeholder = 'Enter your password' className='form-control'/>
                    </div>
                    
                    <button className='btn btn-success' style={{color:'white', fontSize:18, fontWeight:'bolder'}} onClick={()=>(Router.push('/'))}>Submit</button>
                    <a href='' style={{display:'flex', justifyContent:'center', color:'blue', fontWeight:'500'}}><p>Don't have an account? Sign up!</p></a>
                </div>
            </div>
            <div className="account-image">
                <Image src="/Agric.png" width={200} height={200}/>
            </div>
        </div>

    </>
}
export default Account;