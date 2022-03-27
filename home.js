import { useState, useEffect} from "react"

export const Home=()=>{
    const[product,newProduct]=useState(0)

    useEffect(()=>{
        document.title=`Product counter(${product})`
        }
    );

    return(
        <>
        <h1>{product}</h1>
        <button onClick={()=>newProduct(product+1)}>Add New Product</button>
        </>
    )
}
export default Home