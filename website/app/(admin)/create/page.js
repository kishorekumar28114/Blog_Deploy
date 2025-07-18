"use client";
import Link from "next/link";
const create=()=>{
    return(
        <>
        <h1>Create Your Blog</h1>
        <br></br>
        <Link href="/list"><button className="btn">Submit</button></Link>
        </>
    )
}
export default create;