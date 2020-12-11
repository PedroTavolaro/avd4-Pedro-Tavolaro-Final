import { Router } from 'express';

import funcionariosRouter from './funcionario.routes';
import examesRouter from './exame.routes';
import agentesRouter from './agente.routes';
import medicosRouter from './medico.routes';
import entregasRouter from './entrega.routes';
//import uploads from '../upload';
import FuncionarioController from '../app/controllers/FuncionarioController';
import EntregaController from '../app/controllers/EntregaController';
//import ExameController from '..app/controllers/ExameController';

//import compradoresRouter from './comprador.routes';
//import fornecedoresRouter from './fornecedor.routes';
//import motoristasRouter from './motorista.routes';
//import entregasRouter from './entrega.routes';

const routes = Router();

routes.use('/funcionarios', funcionariosRouter);
routes.post('/entregas', EntregaController.store);
//routes.post(
//  '/entregas/foto',
//  uploads.single('foto'),
//  EntregaController.upload,
//);

routes.use('/exames', examesRouter);
routes.use('/agentes', agentesRouter);
routes.use('/medicos', medicosRouter);
routes.use('/entregas', entregasRouter);

//routes.use('/compradores', compradoresRouter);
//routes.use('/fornecedores', fornecedoresRouter);
//routes.use('/motoristas', motoristasRouter);
//routes.use('/entregas', entregasRouter);


export default routes;
