import { getRepository } from 'typeorm';
import { Response, Request } from 'express';
//import { startOfHour, parseISO, isBefore } from 'date-fns';

import Entrega from '../models/Entrega';

class EntregaController {

  public async index(request: Request, response: Response): Promise<Response> {
    const entregasRepository = getRepository(Entrega);
    const entregas = await entregasRepository.find({
      relations: ['funcionario','exame','agente', 'medico'],
      select: ['id',],
    });

    return response.status(200).json(entregas);
  }

  public async show(request: Request, response: Response): Promise<Response> {
    const id = request.params;

    const entregasRepository = getRepository(Entrega);
    const entrega = await entregasRepository.find({
      relations: ['funcionario','exame','agente', 'medico'],
      select: ['id', 'descricaoPPP'],
      where: { id },
    });

    return response.status(200).json(entrega);
  }

  public async delete(request: Request, response: Response): Promise<Response> {
    const { id } = request.params;

    const entregasRepository = getRepository(Entrega);
    const entrega = await entregasRepository.delete(id);

    return response.status(200).json(entrega);
  }

  public async update(request: Request, response: Response): Promise<Response> {
    const id = request.params;

    const {  descricaoPPP } = request.body;

    const entregasRepository = getRepository(Entrega);
    const entrega = await entregasRepository.findOne(id);



    if (!entrega) {
      return response.status(400).json({ error: 'Entrega não encontrada' });
    }

   // const horaDeInicio = startOfHour(parseISO(data_entrega));

   /*
   if (isBefore(horaDeInicio, new Date())) {
      return response
        .status(400)
        .json({ error: 'Data anterior não é pemitida' });
    }
*/
    //entrega.data_entrega = horaDeInicio;

    entrega.descricaoPPP = descricaoPPP;

    await entregasRepository.save(entrega);

    return response.status(200).json(entrega);
  }



  public async store(request: Request, response: Response): Promise<Response> {
    const {
     // data_entrega,
      funcionario_id,
      exame_id,
      agente_id,
      descricaoPPP,
    } = request.body;

    const entregasRepository = getRepository(Entrega);

    //const horaDeInicio = startOfHour(parseISO(data_entrega));

    /*
    if (isBefore(horaDeInicio, new Date())) {
      return response
        .status(400)
        .json({ error: 'Data anterior não é pemitida' });
    }
*/


    const entregas = entregasRepository.create({
      //data_entrega: horaDeInicio,
      funcionario_id,
      exame_id,
      agente_id,
      descricaoPPP,
    });

    await entregasRepository.save(entregas);

    return response.status(200).json(entregas);
  }
}

export default new EntregaController();
