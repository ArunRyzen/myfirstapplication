import "./Signup.css";
function Signup(){
    const emailRegex = /^[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\.[A-Za-z]{2,}$/;
    const phoneRegex = /^[6-9]\d{9}$/;
    const passwordRegex = /^(?=.*[A-Za-z])(?=.*\d)(?=.*[@$!%#?&])[A-Za-z\d@$!%#?&]{8,}$/;
    var firstname = ""
    var lastname = ""
    var Email = ""
    var Mobilenumber = ""
    var password = ""
    var confirmpassword = ""
    function onsubmit(){
        if(firstname===""||lastname===""||Email===""||Mobilenumber===""||password===""||confirmpassword===""){
            alert("All field must be entered")
        } else if(emailRegex.test(Email)===false){
            alert("email format wrong")
        } else if(phoneRegex.test(Mobilenumber)===false){
            alert("format wrong")
        }else if(passwordRegex.test(password)===false){
            alert("password format wrong")
        }else if(password!==confirmpassword){
            alert("password does not match")
        } else{
            alert("register successfully")
        }
    }

    return(
        <div className="App">
            <div className="Box">
            <h1 className="Title">Signup</h1>
            <input className="Text" placeholder="Enter your first name" onChange={(e)=>firstname=e.target.value} />
            <input className="Text" placeholder="Enter your last name" onChange={(e)=>lastname=e.target.value}/>
            <input className="Text" placeholder="Email" onChange={(e)=>Email=e.target.value}/>
            <input className="Text" placeholder="Mobile Number" onChange={(e)=>Mobilenumber=e.target.value}/>
            <input className="Text" placeholder="password" onChange={(e)=>password=e.target.value}/>
            <input className="Text" placeholder="confirm password" onChange={(e)=>confirmpassword=e.target.value}/>
            <button className="button" onClick={onsubmit}>Register</button>
            </div>
         </div>
    );
}
export default Signup;