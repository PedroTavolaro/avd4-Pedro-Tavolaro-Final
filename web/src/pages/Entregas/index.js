import React, { useState, useEffect } from 'react';
//import moment from 'moment';
import { Link } from 'react-router-dom'
import { FiTrash2 } from 'react-icons/fi';
import './styles.css'

import api from '~/services/api';


function Entregas() {

  const [entregas, setEntrega] = useState([]);
  
  

  useEffect(() => {
    
    api.get(`entregas`).then((response) => {
      setEntrega(response.data);
      console.log(response.data);
   
  });

  }, []);


  async function handleDeleteIncident(id){
    try {
        await api.delete(`entregas/${id}`);

        setEntrega(entregas.filter(incident => incident.id !== id));
    } catch (err) {
      
        alert('Erro ao deletar caso, tente novamente');
    }
}



  return (
    <div className="profile-container">
    <header>
        <Link className="button" to="cadastrar">Cadastrar novo Período Profissiográfico
Profissional (PPP) </Link>
    </header>

    <h1>PPP Cadastrados</h1>

    <ul>
      {entregas.map(entrega => (
        <li key={entrega.id}>
            <strong>Funcionario:</strong>
            <p>{entrega.funcionario.nome}</p>
            
            <strong>exame:</strong>
            <p>{entrega.exame.nome}</p>
            <strong>agente de risco:</strong>
            <p>{entrega.agente.nome}</p>
            <strong>Descricao:</strong>
            <p>{entrega.descricaoPPP}</p>
            

            <button onClick={() => handleDeleteIncident(entrega.id)} type="button">
                <FiTrash2 size={20} color="#E02041" />
            </button>
            
            
            <Link className="button" to={`atualizar/${entrega.id}`}>atualizar</Link>
            

            
        </li>
      ))}
    </ul>
</div>
);
}

export default Entregas;
