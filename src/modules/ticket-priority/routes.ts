import { Router } from 'express';
import { TicketPriorityController as Controller } from './controller';
import { catcher } from '../../helpers/catcher';

const router: Router = Router();

const controller = new Controller();

router.get('/', catcher(controller.getTicketPriorities));
router.post('/save', catcher(controller.saveTicketPriorities));
router.patch('/update/:id', catcher(controller.updateTicketPriority));
router.delete('/delete/:id', catcher(controller.deleteTicketPriority));

export default router;
