import React,{useState} from "react";

const Product = ()=>{
    const[data,setdata]=useState([]);
    const[title, setTitle] =useState()
    const[body,setbody]= useState()
    const getProdcutDetails =()=>{
        fetch("https://fakestoreapi.com/products")
        .then((response)=>{
            return response.json();
        })
        .then((result)=>{
            setdata(result)
            console.log(result)
        })
    }
    const addProduct =()=>{
        fetch("https://jsonplaceholder.typicode.com/posts/",{
            method:"Get",
            // headers:{"content-type" :"application/json"},
            // body:JSON.stringify({
            //     userId:1,
            //     title:title,
            //     body: body,
                
            // })
        })
    
            .then((response)=>{
                return response.json()
            })
            .then((result)=>{
                console.log(result)
            })
    }
    return(
        <div>
            <input onChange={(e)=>setTitle(e.target.value)}/>
            <input onChange={(e)=>setbody(e.target.value)}/>
            <button onClick={getProdcutDetails}>GET DETAILS</button>
            
            <button onClick={addProduct}>add products</button>

            {
                data.map((item,index)=>{
                    return(
                        <div key={index}>
                        <p>{item.price}</p>
                    </div>
                    )
                })
            }
        </div>
    )
}
export default Product;