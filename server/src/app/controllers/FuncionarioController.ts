import { getRepository } from 'typeorm';
import { Request, Response } from 'express';

import Funcionario from '../models/Funcionario';

class FuncionarioController {



  public async index(request: any, response: Response): Promise<Response> {
    const funcionariosRepository = getRepository(Funcionario);
    const funcionarios = await funcionariosRepository.find({
      select: ['id', 'nome' ],
    });

    return response.status(200).json(funcionarios);
  }
  async view(request: any, response: Response){

  }

 /*
  public async show(request: Request, response: Response): Promise<Response> {
   const { funcionario_id } = request.params;

    const funcionariosRepository = getRepository(Funcionario);

    const foto = await funcionariosRepository.findOne(funcionario_id, {
      select: ['foto'],
   });

    return response.status(200).json(foto);
  }
  */

  public async store(request: any, response: Response): Promise<Response> {
    const { nome } = request.body;

    const funcionariosRepository = getRepository(Funcionario);

    const funcionarios = await funcionariosRepository.create({ nome });

    await funcionariosRepository.save(funcionarios);

    return response.status(200).json(funcionarios);
  }
}

export default new FuncionarioController();
