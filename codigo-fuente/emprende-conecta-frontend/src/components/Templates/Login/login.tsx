import logoEmprende from "../../../assets/imagenes/Logo-Emprende-Conecta.png";
import InputText from "../../Atoms/Input/text/text";
import Button from "../../Atoms/Actions/button/button";
import Session from "../../Atoms/Actions/session/session";
import iconFacebook from "../../../assets/imagenes/iconos/fb.png";
import iconApple from "../../../assets/imagenes/iconos/apple.png";
import iconGoogle from "../../../assets/imagenes/iconos/google.png";
import { Link } from 'react-router-dom';
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';


const Login = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState<null | string>(null);
    const navigate = useNavigate();

    const handleEmailChange = (e: React.ChangeEvent<HTMLInputElement>) => setEmail(e.target.value);
    const handlePasswordChange = (e: React.ChangeEvent<HTMLInputElement>) => setPassword(e.target.value);

    const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        try {
            const response = await fetch('http://127.0.0.1:8000/api/business/login/', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({
                    email: email,
                    password: password
                })
            });

            const data = await response.json();

            if (response.ok) {
               navigate('/dashboard');
            } else {
                setError(data.error);
            }
        } catch (error) {
            setError("Hubo un problema al intentar iniciar sesión. Por favor, intenta de nuevo.");
        }
    };

    return (
        <div className="bg-custom-blue min-h-screen flex flex-col">
            <main className="flex flex-col items-center justify-center flex-1 p-6">
                <div className="flex flex-col items-center justify-center w-full max-w-md">
                    <img
                        src={logoEmprende}
                        className="w-32 h-auto mb-8"
                        alt="Logo Emprende Conecta"
                    />
                    <form className="w-full space-y-4" onSubmit={handleSubmit}>
                        <InputText
                            inputType="text"
                            placeholder="Correo electrónico o teléfono"
                            required={true}
                            name="emailUser"
                            extraClasses="w-full"
                            value={email}
                            onChange={handleEmailChange}
                        />
                        <InputText
                            inputType="password"
                            placeholder="Contraseña"
                            required={true}
                            name="passwordUser"
                            extraClasses="w-full"
                            value={password}
                            onChange={handlePasswordChange}
                        />
                        {error && <p className="text-red-500">{error}</p>}    
                        <div className="mt-6">
                            <Button text="Iniciar Sesión" type="submit" width="full" />
                        </div>
                    </form>
                    <hr className="w-full my-6 border-t border-gray-200" />
                    <div className="w-full space-y-4">
                        <Session
                            logo={iconFacebook}
                            network="Facebook"
                            extraClasses="w-full"
                        />
                        <Session
                            logo={iconApple}
                            network="Apple"
                            extraClasses="w-full"
                        />
                        <Session
                            logo={iconGoogle}
                            network="Google"
                            extraClasses="w-full"
                        />
                    </div>
                    <div className="flex flex-col items-center mt-6 space-y-2">
                        <p className="text-white">
                            ¿Aún no eres usuario? <Link to="/preregistro">Regístrate </Link>
                        </p>
                        <Link to="/login">¿Olvidaste tu contraseña? </Link>
                    </div>
                </div>
            </main>
        </div>
    );
};

export default Login;
