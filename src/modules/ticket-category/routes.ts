import { Router } from 'express';
import { TicketCategoryController as controller } from './controller';
import { catcher } from '../../helpers/catcher';

const router = Router();

const conroller = new controller();

router.get('/', catcher(conroller.getTicketCategories));
router.post('/save', catcher(conroller.saveTicketCategories));
router.patch('/update/:id', catcher(conroller.updateTicketCategory));
router.delete('/delete/:id', catcher(conroller.deleteTicketCategory));

export default router;
