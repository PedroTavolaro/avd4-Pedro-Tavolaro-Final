import { Router } from 'express';
//import uploads from '../upload';
import EntregaController from '../app/controllers/EntregaController';

const entregasRouter = Router();

entregasRouter.get('/', EntregaController.index);
entregasRouter.post('/', EntregaController.store);
//entregasRouter.post(
//  'entregas/entregas/foto',
//  uploads.single('foto'),
//  EntregaController.upload,
//);
entregasRouter.delete('/:id', EntregaController.delete);
entregasRouter.put('/:id', EntregaController.update);
entregasRouter.get('/:id', EntregaController.show);

export default entregasRouter;
