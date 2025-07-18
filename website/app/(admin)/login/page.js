"use client";
import Link from "next/link";
const login = () => {
    return (
        <>
            <div className="logpg">
                <div className="right">
                    <form className='form1'>
                        <h2>Login</h2>
                        <h4>Admins can Login</h4>
                        <input type="email" placeholder='email' className='input' required={true} /><br />
                        <input type="password" placeholder='password' className='input' required={true} /><br />
                        
                        <Link href="/list"><button className='sumbtn'>Submit</button></Link>
                    </form>
                </div>
            </div>

        </>
    )
}
export default login;