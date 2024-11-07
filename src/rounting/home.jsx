import { Link } from "react-router-dom";
function Home() {

    return (<>
        <div>
            <nav>
                <ul class="nav-links">
                  <li> <Link to={"/home1"}>Home</Link> </li>
                    <li><Link to={"/menu"}>menu cards</Link></li>
                    <li><Link to={"/address"}>Address</Link></li>
                    <li><Link to={"/photos"}>photos</Link></li>
                </ul>
            </nav>
        </div>
        

    </>)
}
export default Home;