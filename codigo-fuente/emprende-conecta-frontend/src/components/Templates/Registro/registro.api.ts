import axios, { AxiosInstance, AxiosResponse } from 'axios';

const registroApi: AxiosInstance = axios.create({
    baseURL: 'http://localhost:8000/api/business/persona/',
});

interface Persona {
    nombre: string,
    apellido: string,
    dni: string,
    telefono: string,
    password: string,
    nuevaContrasena: string,
    email: string,
    email_recuperacion: string,
    direccion: string,
    tipo: number
}

interface Emprendimiento {
    nombre_emprendimiento: string,
    categoria: number,
    correo: string,
    ubicacion: string,
    presentacion: string,
    telefono_contacto: string,
    nombre: string,
    apellido: string,
    password: string,
    telefono_personal: string
}

export const crearPersona = (persona: Persona): Promise<AxiosResponse<Persona>> => {
    return registroApi.post<Persona>('/persona/', persona);
};

export const crearEmprendimiento = (emprendimiento: Emprendimiento): Promise<AxiosResponse<Emprendimiento>> => {
    return registroApi.post<Emprendimiento>('/emprendimiento/', emprendimiento);
};