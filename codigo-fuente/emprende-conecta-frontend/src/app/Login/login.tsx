import React from "react";
import Navbar from "../../components/Organism/navbar/navbar2";
import LoginTemplate from "../../components/Templates/Login/login";

const Login: React.FC = () => {
    return (
        <div className="bg-custom-blue h-full">
            <Navbar />
            <LoginTemplate />
        </div>
    );
};

export default Login;
