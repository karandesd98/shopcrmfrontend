import { Link } from "react-router-dom";

const WelcomeCmp = () => {
    return (
        <div>
            <h1>welcome to rect base development </h1>
            <Link to="/" className="btn btn-primary"><i class="bi bi-skip-backward"></i> Go To Home</Link>
        </div>
    );
}

export default WelcomeCmp;