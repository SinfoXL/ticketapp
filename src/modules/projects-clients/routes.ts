import { Router } from 'express';
import { ProjectClientsController as Controller } from './controller';
import { catcher } from '../../helpers/catcher';

const router: Router = Router();

const controller = new Controller();

router.get('/', catcher(controller.getProjectClients));
router.post('/save', catcher(controller.saveProjectClients));
router.patch('/update/:id', catcher(controller.updateProjectClient));
router.delete('/delete/:id', catcher(controller.deleteProjectClient));

export default router;
