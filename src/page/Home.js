import "./Home.css"
const Home=()=>{
    const product=[
        {id:1,name:"WHO IS ERINA CARTER",Time:"3Min Ago",Price:100,url:"https://dnm.nflximg.net/api/v6/2DuQlx0fM4wd1nzqm5BFBi6ILa8/AAAAQbbiwtFySoqCLa7vCjEzUNdJSvLBM0GoQZVe5Ac0lOgLsmTX_jFHQKEvCCFZk7uJvKARbLY8g9kEmROIJjrK_QZwhnHIaYHif5pI6QOXHZGLvxjJS_9kZphetztqBOhTH078xdBxj8GRtdbIup5LhieK.jpg?r=a7a"},
        {id:2,name:"THE LOST CITY",Time:"3Min Ago",Price:100,url:"https://assets-prd.ignimgs.com/2022/02/10/lost-city-ver2-button-1644513722141.jpg"},
        {id:3,name:"GUNS AND GULAABS",Time:"3Min Ago",Price:100 , url:"https://assets.gadgets360cdn.com/pricee/assets/product/202308/guns1_1692337032.jpg"},
        {id:4,name:"VIKINGS",Time:"3Min Ago",Price:100 , url:"https://flxt.tmsimg.com/assets/p9155926_b_v10_au.jpg"}
    ]
    
    return(
        <div className="homecontainer">
            {
                product.map((index,item)=>{
                    return(
                        <div className="Cell">
                            <div className="cellhead">
                        <img src={index.url} className="homeimg"/>
                        <div>
                        <p className="cellheadtitle">{index.name}</p>
                        <p className="cellheadtitle">{index.Time}</p>
                        </div>
                        </div>
                        <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/6/69/Netflix_logo.svg/1024px-Netflix_logo.svg.png"className="postimg"/>
                        </div>
                    );
                })
            }
        </div>
    );
        
    }

export default Home