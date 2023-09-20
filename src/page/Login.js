import "./Login.css";
import {useNavigate} from "react-router-dom";
const Login=()=>{
const History=useNavigate();
const dbname="Arun"
const dbpassword="Arun123"
var user=""
var userpass=""

return(
    <div className="App">
        <div className="Box">
        <h1 className="Title">Signup</h1>
        <input className="Text" placeholder="Email or Phone number" onChange={(e)=>user=e.target.value}/>
        <input className="Text" placeholder="password" type="password" onChange={(e)=>userpass=e.target.value}/>
        <button className="Botton" onClick={()=>{
            return
            if(dbname===user && dbpassword===userpass){
        alert("login successful")
        History("/Sample")
        
    }else{
        alert("incorrect")
    }
}}>Sign in </button>

<div className="Remember">
    <p className="Me">Remember Me</p>
    <p className="Help">Need Help?</p>
</div>
<p className="New">New to Netflix?</p>
        </div>
    </div>
);
}
export default Login;