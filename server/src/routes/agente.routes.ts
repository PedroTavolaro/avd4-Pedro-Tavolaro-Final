import { Router } from 'express';

import AgenteController from '../app/controllers/AgenteController';

const agenteRouter = Router();

agenteRouter.get('/', AgenteController.index);

agenteRouter.post('/', AgenteController.store);

export default agenteRouter;
