import { Router } from 'express';
import { UsersController as Controller } from './controller';
import { catcher } from '../../helpers/catcher';
import { authorize } from '../../middlewares/authorize';

const router: Router = Router();

const controller = new Controller();

router.get('/', authorize(['admin', 'super', 'user']), catcher(controller.getUsers));
router.get('/get-xml', catcher(controller.getUsersXML));
router.post('/save', authorize(['admin', 'super']), catcher(controller.saveUsers));
router.patch('/update/:id', catcher(controller.updateUser));
router.patch('/change-activation-status/:id', catcher(controller.changeUserStatus));
router.delete('/delete/:id', catcher(controller.deleteUser));

router.post('/login', catcher(controller.login));
router.post('/register', catcher(controller.register));
router.get('/logout', catcher(controller.logout));

router.get('/profile', authorize(['admin', 'super', 'user']), catcher(controller.profile));

export default router;
