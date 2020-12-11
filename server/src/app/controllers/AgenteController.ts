import { getRepository } from 'typeorm';
import { Request, Response } from 'express';

import Agente from '../models/Agente';

class AgenteController {
  public async index(request: Request, response: Response): Promise<Response> {
    const agentesRepository = getRepository(Agente);
    const agentes = await agentesRepository.find({
      select: ['id', 'nome'],
    });

    return response.status(200).json(agentes);
  }


  public async store(request: Request, response: Response): Promise<Response> {
    const { nome } = request.body;

    const agenteRepository = getRepository(Agente);

    const agentes = await agenteRepository.create({ nome });

    await agenteRepository.save(agentes);

    return response.status(200).json(agentes);
  }
}

export default new AgenteController();
