import { getRepository } from 'typeorm';
import { Request, Response } from 'express';

import Medico from '../models/Medico';

class MedicoController {
  public async index(request: Request, response: Response): Promise<Response> {
    const medicosRepository = getRepository(Medico);
    const medicos = await medicosRepository.find({
      select: ['id', 'nome'],
    });

    return response.status(200).json(medicos);
  }

 // public async show(request: Request, response: Response): Promise<Response> {
 //   const { funcionario_id } = request.params;

   // const funcionariosRepository = getRepository(Funcionario);

  //  const telefone = await compradoresRepository.findOne(comprador_id, {
  //    select: ['telefone'],
  //  });

  //  return response.status(200).json(telefone);
  //}

  public async store(request: Request, response: Response): Promise<Response> {
    const { nome } = request.body;

    const medicoRepository = getRepository(Medico);

    const medicos = await medicoRepository.create({ nome });

    await medicoRepository.save(medicos);

    return response.status(200).json(medicos);
  }
}

export default new MedicoController();
