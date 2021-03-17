import React,{useState} from 'react';
import { Link } from 'react-router-dom';
import '../styles/Signin.css';


function Signin() {

    const [username, setUsername] =  useState('');

    return (
        <div className='siginin'>
            <div className='main_form'>
                <div className='left_part'>
                    <div className='left_contents'>
                        <h1 className='left_text1'>Sign in your </h1>
                        <h1 className='left_text2'>account</h1>
                    </div>
                </div>
                <div className='right_part'>
                    <div className='login'>
                        <div className='right_contents'>
                            <form className='form_signin'>
                                <h5 className='right_text'>USERNAME</h5>
                                <input type='text' onChange={(e)=>setUsername(e.target.value)} className='input_field'/>
                                <h5 className='right_text'>PASSWORD</h5>
                                <input type='password' className='input_field'/><br/>
                                <button type='submit' className='signin_button'><Link to='/home'>Signin</Link></button>
                                {username}
                            </form>
                            <p className='right_text2'><span className='right_text3'>Note:-<br/></span>By signing in you agree to our conditions of use and sale. Please
                                see our Privacy Notice, our Cookies Notice and our Interest-Based Ads Notice.
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Signin;
