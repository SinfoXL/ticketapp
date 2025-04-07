import { Router } from 'express';
import { ProjectClientsController as controller } from './controller';
import { catcher } from '../../helpers/catcher';

const router = Router();

const conroller = new controller();

router.get('/', catcher(conroller.getProjectClients));
router.post('/save', catcher(conroller.saveProjectClients));
router.patch('/update/:id', catcher(conroller.updateProjectClient));
router.delete('/delete/:id', catcher(conroller.deleteProjectClient));

export default router;
