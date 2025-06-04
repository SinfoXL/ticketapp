import { Router } from 'express';
import { UsersController as controller } from './controller';
import { catcher } from '../../helpers/catcher';
import { authorize } from '../../middlewares/authorize';

const router = Router();

const conroller = new controller();

router.get('/', authorize(['admin', 'super', 'user']), catcher(conroller.getUsers));
router.get('/get-xml', catcher(conroller.getUsersXML));
router.post('/save', authorize(['admin', 'super']), catcher(conroller.saveUsers));
router.patch('/update/:id', catcher(conroller.updateUser));
router.patch('/change-activation-status/:id', catcher(conroller.changeUserStatus));
router.delete('/delete/:id', catcher(conroller.deleteUser));

router.post('/login', catcher(conroller.login));
router.post('/register', catcher(conroller.register));
router.get('/logout', catcher(conroller.logout));

router.get('/profile', authorize(['admin', 'super', 'user']), catcher(conroller.profile));

export default router;
