import { useState } from "react";
import Header from "../components/header";

export default function Cadastro(){
    const [nome, setNome] = useState('');
    const [endereco, setEndereco] = useState('');
    const [email, setEmail] = useState('');
    const [celular, setCelular] = useState('');
    const [documento, setDocumento] = useState('');
    return(
        <div className="container">
            <Header/>
            <h3>Cadastro de dados pessoais</h3>
            <form action="">
                
            </form>
        </div>
    )
}