'use client';
import Image from "next/image";
import Link from "next/link";
import datas from "@/component/lib/one.json"
import styles from "./Blog.module.css"
const Blog=()=>{
    let a=datas;
    return(
        <>
        <div className={styles["body"]}>
            <h1 className={styles["up"]}>Cartoon Characters</h1>
        <div className={styles["one"]}>
            {
            a.map((e)=>(
                <>
                <div>
                <Link key={e.id} href={`/Blog/${e.id}`}>
                <Image src={e.src} width={500} height={300} alt="no problem"/>
                </Link>
                <div className={styles["title"]} >{e.title}</div>
                </div>
                </>
            ))
        } 
        </div>
        </div>
        </>
    )
}
export default Blog;