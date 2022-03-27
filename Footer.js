import {Link} from "react-router-dom";
import "bootstrap/dist/css/bootstrap.css";
const Footer=()=>{
return(
    <>
    <ul className="nav justify-content-center">
  <li classNameName="nav-item">
    <a className="nav-link active" aria-current="page" to="#">Active</a>
  </li>
  <li className="nav-item">
    <a className="nav-link" to="#">Link</a>
  </li>
  <li className="nav-item">
    <a className="nav-link" to="#">Link</a>
  </li>
  <li className="nav-item">
    <a className="nav-link disabled">Disabled</a>
  </li>
</ul>
</>
)
}
export default Footer;