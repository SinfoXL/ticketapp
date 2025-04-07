import { Router } from 'express';
import { UsersController as controller } from './controller';
import { catcher } from '../../helpers/catcher';

const router = Router();

const conroller = new controller();

router.get('/', catcher(conroller.getUsers));
router.post('/save', catcher(conroller.saveUsers));
router.patch('/update/:id', catcher(conroller.updateUser));
router.delete('/delete/:id', catcher(conroller.deleteUser));

export default router;
