import { Router } from 'express';
import { ProjectsController as Controller } from './controller';
import { catcher } from '../../helpers/catcher';

const router: Router = Router();

const controller = new Controller();

router.get('/', catcher(controller.getProjects));
router.post('/save', catcher(controller.saveProjects));
router.patch('/update/:id', catcher(controller.updateProject));
router.delete('/delete/:id', catcher(controller.deleteProject));

export default router;
