import { Router } from 'express';
import { TicketCommentController as Controller } from './controller';
import { catcher } from '../../helpers/catcher';

const router: Router = Router();

const controller = new Controller();

router.get('/', catcher(controller.getTicketComments));
router.post('/save', catcher(controller.saveTicketComments));
router.patch('/update/:id', catcher(controller.updateTicketComment));
router.delete('/delete/:id', catcher(controller.deleteTicketComment));

export default router;
