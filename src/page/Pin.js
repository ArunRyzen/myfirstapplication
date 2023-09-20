import React,{useState} from "react"
const Pin=()=>{
    var inputpin=""
    const [data,setdata]=useState([])
    const Getdata = ()=>{
        fetch("https://api.postalpincode.in/pincode/"+ inputpin)
        .then((Response)=>{
            return Response.json()
        }).then((result)=>{
            setdata(result)
            console.log(result)
        })
    }
    return(
    <div>
        <div>
        <input placeholder="Pincode" onChange={(e)=> inputpin = e.target.value} />
        <button onClick={Getdata}>search</button>
        {
        data.length==0 ? null: data[0].PostOffice.map((item,index)=>{
                return(
                    <div key={index}>
                    <p>{item.Name}</p>
                    <p>{item.BranchType}</p>
                    </div>
                )
            })
        }
        </div>
    </div>
)}
export default Pin;