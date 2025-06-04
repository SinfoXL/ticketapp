import { Router } from 'express';
import { RolesController as Controller } from './controller';
import { catcher } from '../../helpers/catcher';

const router: Router = Router();

const controller = new Controller();

router.get('/', catcher(controller.getRoles));
router.post('/save', catcher(controller.saveRoles));
router.patch('/update/:id', catcher(controller.updateRoles));
router.delete('/delete/:id', catcher(controller.deleteRoles));

export default router;
