import { Router } from 'express';
import { TicketCategoryController as Controller } from './controller';
import { catcher } from '../../helpers/catcher';

const router: Router = Router();

const controller = new Controller();

router.get('/', catcher(controller.getTicketCategories));
router.post('/save', catcher(controller.saveTicketCategories));
router.patch('/update/:id', catcher(controller.updateTicketCategory));
router.delete('/delete/:id', catcher(controller.deleteTicketCategory));

export default router;
