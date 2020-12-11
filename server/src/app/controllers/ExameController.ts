import { getRepository } from 'typeorm';
import { Request, Response } from 'express';

import Exame from '../models/Exame';

class ExameController {



  public async index(request: Request, response: Response): Promise<Response> {
    const examesRepository = getRepository(Exame);
    const exames = await examesRepository.find({
      select: ['id', 'nome'],
    });

    return response.status(200).json(exames);
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

    const exameRepository = getRepository(Exame);

    const exames = await exameRepository.create({ nome });

    await exameRepository.save(exames);

    return response.status(200).json(exames);
  }
}

export default new ExameController();
