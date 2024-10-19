import { Link } from "react-router-dom";

const Home =() =>{
    return (
        <>
        <nav>
        <ul>
          <li><Link to="/WelcomeCmp">WelcomeCmp</Link></li>
          <li><Link to="/LoginCmp">Login</Link></li>
          <li><Link to="/admin/PrivateWelcomeCmp">PrivateWelcomeCmp</Link></li>
        </ul>
      </nav>
        </>
    );
}

export default Home;