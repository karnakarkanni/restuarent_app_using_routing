import { Link } from "react-router-dom";

function Veg(){

    return(<>
    <div id="main">
        <table border={2}>
            <tr>
                <td>s.no</td>
                <td>veg menu list</td>
                <td>price</td>
            </tr>
            <tr>
                <td>1</td>
                <td>paneer biryani</td>
                <td>400</td>
            </tr>
            <tr>
                <td>2</td>
                <td>mastroom biryani</td>
                <td>500</td>
            </tr>
            <tr>
                <td>3</td>
                <td>veg masala biryani</td>
                <td>300</td>
            </tr>
            <tr>
                <td>4</td>
                <td>vegetable biryani</td>
                <td>400</td>
            </tr>
    </table>
    <button > <Link to={"/home1"}>back</Link> </button>
    </div>
  
    </>)
}
export default Veg;