import React, { useState, useEffect, useCallback } from 'react';
import { Link } from 'react-router-dom';
import { useForm } from 'react-hook-form';

import api from '~/services/api';

import { Container, Content } from './styles';

function Cadastrar(props) {

  const [funcionarios, setFuncionarios] = useState([]);
  //const [fotos, setFotos] = useState([]);
  const [exames, setExames] = useState([]);
  const [agentes, setAgentes] = useState([]);
  const [medicos, setMedicos]  = useState([]);
  const [valorSelecionado, setValorSelecionado] = useState(null);
  const { register, handleSubmit } = useForm({});
  

  useEffect(() => {
    api.get('funcionarios').then((response) => {
      setFuncionarios(response.data);
    });
    api.get('exames').then((response) => {
      setExames(response.data);
    });
    api.get('agentes').then((response) => {
      setAgentes(response.data);
    });
  
    api.get('medicos').then((response) => {
      setMedicos(response.data);
  });

  }, []);

  const handleSelected = useCallback(async (e) => {
    setValorSelecionado(e.target.value);
    console.log(valorSelecionado)
  }, [valorSelecionado]);


  const onSubmit = async (data, e) => {
    const {  
      funcionario_id, 
      foto, 
      exame_id, 
      agente_id, 
      medico_id, 
      descricaoPPP 
    } = data;

   
  

    await api.post('entregas', {
      funcionario_id, 
      foto, 
      exame_id, 
      agente_id, 
      medico_id, 
      descricaoPPP
    });
    e.target.reset();
  };


  return (
    <Container>
      <Content>
        <form onSubmit={handleSubmit(onSubmit)}>
         

          <select name="funcionario_id" onChange={handleSelected} ref={register}>
            <option value="" disabled selected>
              Informe o funcionario
          </option>
            {funcionarios.map((funcionario) => (
              <option key={funcionario.id} value={funcionario.id}>
                {`${funcionario.nome}`}
              </option>
            ))}
          </select>

                      
          
          

          <select name="exame_id" ref={register}>
            <option value="" disabled selected>
              Informe o exame
          </option>
            {exames.map((exame) => (
              <option key={exame.id} value={exame.id}>
                {`${exame.nome}`}
              </option>
            ))}
          </select>

          <select name="agente_id" ref={register}>
            <option value="" disabled selected>
              Informe o agente de risco
          </option>
            {agentes.map((agente) => (
              <option key={agente.id} value={agente.id}>
                {`${agente.nome}`}
              </option>
            ))}
          </select>

          <select name="medico_id" ref={register}>
            <option value="" disabled selected>
              Informe o medico
          </option>
            {medicos.map((medico) => (
              <option key={medico.id} value={medico.id}>
                {`${medico.nome}`}
              </option>
            ))}
          </select>

          <input type="textarea" name="descricaoPPP" placeholder="Informe a descricao" ref={register}/>

          <button type="submit">Cadastrar</button>
          <Link to="/">
            Voltar
          </Link>
        </form>
      </Content>
    </Container>
  );
}

export default Cadastrar;
