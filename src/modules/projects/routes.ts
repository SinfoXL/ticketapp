import { Router } from 'express';
import { ProjectsController as controller } from './controller';
import { catcher } from '../../helpers/catcher';

const router = Router();

const conroller = new controller();

router.get('/', catcher(conroller.getProjects));
router.post('/save', catcher(conroller.saveProjects));
router.patch('/update/:id', catcher(conroller.updateProject));
router.delete('/delete/:id', catcher(conroller.deleteProject));

export default router;
