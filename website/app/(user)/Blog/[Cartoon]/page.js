import atas from "@/component/lib/one.json"
import Image from "next/image";
const Cartoon=({params})=>{
    const data=atas;

return(
    <>
    <h1>{data[params.Cartoon-1].des}</h1>
    <Image src={data[params.Cartoon-1].src} width={500} height={400} alt="no problem"/>
    </>
)
}
export default Cartoon;

