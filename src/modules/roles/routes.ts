import { Router } from 'express';
import { RolesController as controller } from './controller';
import { catcher } from '../../helpers/catcher';

const router = Router();

const conroller = new controller();

router.get('/', catcher(conroller.getRoles));
router.post('/save', catcher(conroller.saveRoles));
router.patch('/update/:id', catcher(conroller.updateRoles));
router.delete('/delete/:id', catcher(conroller.deleteRoles));

export default router;
