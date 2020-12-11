import { Router } from 'express';

import MedicoController from '../app/controllers/MedicoController';

const medicoRouter = Router();

medicoRouter.get('/', MedicoController.index);

medicoRouter.post('/', MedicoController.store);

export default medicoRouter;
