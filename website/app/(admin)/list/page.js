"use client";
import Link from "next/link";
const list = () => {
    return (
        <>
            <div className="ulnav">
                <Link href="/update"><button className="btn">Update Blog</button></Link>
                <h1>List of Blogs</h1>
                <Link href="/create"><button className="btn">Create New Blog</button></Link>
            </div>
            
        </>
    )
}
export default list;