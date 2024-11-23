import React, { useState, useEffect, useParams } from "react";
import axios from 'axios';
import apiClient from "../API/bootApi";
import { saveTokenToLocalStorage } from "../authentication/authUtility";
import { useNavigate } from "react-router-dom";

const LoginCmp = () => {
    const navigate = useNavigate();

    const [formData, setFormData] = useState({
        email: '',
        password: ''
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });

    };

    const loginCheck = (e) => {
        const responseData = apiClient.post(`/auth/login`, formData).then((respnse) => respnse.data);

        responseData.then((jwtTokenData) => {
            if (jwtTokenData == 'Credentials Invalid !!') {
                alert("please enter valid credential..");
            } else {
                let token=jwtTokenData.jwtToken;
                saveTokenToLocalStorage(token, () => { alert("login success"); });
                navigate('/admin/adminDashBoard', { state: { id: -1, name: 'sachin' } })

            }

        });

        responseData.catch(error => {
            console.log("my eree=d");
        });

    };



    return (
        <div className="container-fluid" style={{ backgroundImage: 'url(/banner.png)', backgroundSize: 'cover', backgroundRepeat: 'no-repeat', width: '100%', height: '600px', color: 'white' }}>
            <div className="" style={{ height: "60px" }}></div>
            <div className="row" style={{ backgroundColor: 'rgba(0, 0, 0, 0.5)', margin: '0px auto' }} >

                <div className="col-lg-8">
                    <img src="customer-logo.png" />
                    <p>
                        <strong style={{ fontSize: '28px' }}>
                            <span className="copyright">JUNO Software Systems Pvt. Ltd.</span>
                        </strong>
                    </p>
                    <p>
                        MARKET LEADER IN AUTOMATION OF EDUCATION INSTITUTIONS
                        JUNO Campus has been built around a really strong Academic DNA and powered by some of the most advanced AI algorithms and brilliant minds from the academic area. It is the only comprehensive solution available globally that offers One Stop Solution delivering complete automation and seamless integration of all kinds of education institutions using One Application and One Database.
                    </p>
                </div>

                <div className="col-lg-4">
                    <div className="card" style={{ backgroundColor: 'rgba(0, 0, 0, 0.5)', marginTop: '27px', color: 'white' }}>
                        <div className="card-header">
                            <h6>Welcome! Please login to continue.</h6>
                        </div>
                        <div className="card-body">
                            <div className="mb-3">
                                <input value={formData.email} onChange={handleChange} name='email' type="email" className="form-control" id="exampleFormControlInput1" placeholder="UserName" />
                            </div>
                            <div className="mb-3">
                                <input value={formData.password} onChange={handleChange} name='password' type="password" className="form-control" id="exampleFormControlInput2" placeholder="Password" />
                            </div>
                            <div className="mb-3" style={{ display: 'flex', justifyContent: 'center' }}>
                                <button onClick={() => { loginCheck() }} type="button" className="btn btn-danger" style={{ padding: '7px 44px' }}>Login</button>
                            </div>
                        </div>
                    </div>
                </div>

            </div>


        </div>
    );
}

export default LoginCmp;