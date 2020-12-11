
import React, { useState, useEffect } from 'react';
import { Link, useParams } from 'react-router-dom';
import { useForm } from 'react-hook-form';

import api from '~/services/api';

import { Container, Content } from './styles';

function Atualizar() {
  const [entrega, setEntrega] = useState({});
  const [exames, setExames] = useState([]);
  const [agentes, setAgentes] = useState([]);
  const [medicos, setMedicos] = useState([]);
  //const [descricaoPPP, setDescricaoPPP] = useState([]);
  const { register, handleSubmit, reset } = useForm({});

  const params = useParams();

  useEffect(() => {
    api.get(`entregas/${params.id}`).then(response => {
      setEntrega(response.data);
      console.log(response.data)
      reset({
        data_entrega: entrega.data_entrega,
        exame: entrega.exame.id,
        agente: entrega.agente.id,
        medico: entrega.medico.id,
        descricaoPPP: entrega.descricaoPPP,
        
      });
    }).catch(err => console.log(err));

    api.get('exames').then(response => {
      setExames(response.data);
    });
  
    api.get('agentes').then(response => {
      setAgentes(response.data);
    });

    api.get('medicos').then(response => {
      setMedicos(response.data);
    });

    
  }, [params.id]);

  
  

   
  /*
    api.get('motoristas').then(response => {
      setMotoristas(response.data);
    });
  }, [params.id]);
*/



  const onSubmit = async (data, e) => {
    const { data_entrega, foto, exame_id, agente_id, medico_id, descricaoPPP } = data;

    await api.put(`entregas/${entrega.id}`, {
      data_entrega,
      foto,
      exame_id,
      agente_id,
      medico_id,
      descricaoPPP,
    });
    e.target.reset();
  };

//if(Object.keys(entrega).length ===0 ) return <h1>Loading...</h1>;

  return (
    <Container>
      <Content>
        <form onSubmit={handleSubmit(onSubmit)}>
          <input
            type="datetime-local"
            nome="data_entrega"
            placeholder="Título do conteúdo"
            ref={register}
          />
          
          <input
            type="text"
            nome="exame"
            value={entrega.exame.nome}
            disabled
          />
          
          <input
            type="text"
            nome="exame"
            value={entrega.exame.nome}
            disabled
          />
          

          <input
            type="textarea"
            nome="agente"
            placeholder="descrição agente de risco"
            ref={register}
          />

          <input
            type="text"
            nome="medico"
            value={entrega.medico.nome}
            disabled
          />

          <select nome="exame_id" ref={register}>
            <option value="" disabled selected>
              Informe o exame
            </option>
            {exames.map(exame => (
              <option key={exame.id} value={exame.id}>
                {`${exame.nome}`}
              </option>
            ))}
          </select>

          <select nome="medico_id" ref={register}>
            <option value="" disabled selected>
              Informe o medico
            </option>
            {medicos.map(medico => (
              <option key={medico.id} value={medico.id}>
                {`${medico.nome}`}
              </option>
            ))}
          </select>


          <button type="submit">Atualizar</button>
          <Link to="/">Voltar</Link>
        </form>
      </Content>
    </Container>
  );
}

export default Atualizar;
