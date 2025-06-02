import { Router } from 'express';
import { UsersController as controller } from './controller';
import { catcher } from '../../helpers/catcher';
import { authorize } from '../../middlewares/authorize';

const router = Router();

const conroller = new controller();

router.get('/', authorize(['admin', 'super']), catcher(conroller.getUsers));
router.post('/save', authorize(['admin', 'super']), catcher(conroller.saveUsers));
router.patch('/update/:id', catcher(conroller.updateUser));
router.delete('/deactivate/:id', catcher(conroller.deleteUser));

router.post('/login', catcher(conroller.login));
router.post('/register', catcher(conroller.register));

export default router;
