import { Link } from "react-router-dom";
function Home1(){
    return (<>
    <div id="main" >
            <div id="k1">
                <h1 >Veg Menu</h1>
                <button> <Link to={"/veg"}>See more</Link> </button>
                
            </div>
            <div id="k2">
                <h1>Non veg Menu</h1>
                <button> <Link to={"/veg"}>See more</Link> </button>
            </div>
        </div>
    </>)
}
export default Home1;