import { Router } from 'express';

import ExameController from '../app/controllers/ExameController';

const exameRouter = Router();

exameRouter.get('/', ExameController.index);

exameRouter.post('/', ExameController.store);

export default exameRouter;
