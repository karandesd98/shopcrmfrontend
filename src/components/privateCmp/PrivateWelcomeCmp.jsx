import { Link } from "react-router-dom";

const PrivateWelcomeCmp = () =>{
return (
    <>
    <h6>welcome to private component</h6>
    <Link to="/" className="btn btn-primary"><i class="bi bi-skip-backward"></i> Go To Home</Link>
    </>
);
}

export default PrivateWelcomeCmp;